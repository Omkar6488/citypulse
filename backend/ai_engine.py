"""
AI Triage Engine
----------------
Primary  : HuggingFace zero-shot classification (free, no API key needed)
Fallback : Rule-based keyword classifier (works 100% offline)
"""

import re
import os
import httpx
import asyncio
from typing import Optional

HF_API_URL = "https://api-inference.huggingface.co/models/facebook/bart-large-mnli"
HF_TOKEN   = os.getenv("HF_TOKEN", "")   # optional — works without token (rate-limited)

# ── RULE-BASED CLASSIFIER (always available offline) ─────────────────────────
RULES = {
    "Road & Infrastructure": {
        "keywords": ["pothole", "road", "cave", "crack", "asphalt", "footpath", "pavement", "divider", "speed breaker", "broken road"],
        "dept": "PWD", "base_severity": 7, "sla_hours": 48,
    },
    "Drainage & Flood Control": {
        "keywords": ["waterlog", "flood", "drain", "gutter", "clog", "overflow", "standing water", "puddle", "sewage"],
        "dept": "Water Board", "base_severity": 8, "sla_hours": 12,
    },
    "Water Supply": {
        "keywords": ["pipe burst", "water pipe", "no water", "water supply", "leak", "tap", "water waste"],
        "dept": "Water Board", "base_severity": 8, "sla_hours": 6,
    },
    "Electrical Infrastructure": {
        "keywords": ["streetlight", "light", "electric", "wire", "power", "electricity", "pole", "transformer", "shock"],
        "dept": "Electricity", "base_severity": 6, "sla_hours": 72,
    },
    "Sanitation & Waste": {
        "keywords": ["garbage", "trash", "waste", "bin", "dustbin", "smell", "stink", "littering", "dumping", "sanitation"],
        "dept": "Sanitation", "base_severity": 5, "sla_hours": 24,
    },
    "Tree & Green": {
        "keywords": ["tree", "branch", "fallen tree", "shrub", "park", "garden"],
        "dept": "PWD", "base_severity": 5, "sla_hours": 48,
    },
    "Traffic & Transport": {
        "keywords": ["traffic", "signal", "sign", "zebra", "bus stop", "auto", "parking"],
        "dept": "Transport", "base_severity": 4, "sla_hours": 96,
    },
}

SEVERITY_BOOSTERS = {
    "critical": +2, "emergency": +3, "dangerous": +2, "accident": +2,
    "school": +1, "hospital": +1, "major": +1, "collapse": +3,
    "children": +1, "elderly": +1, "death": +3, "injury": +2,
}

PRIORITY_MAP = {
    (9, 10): "CRITICAL",
    (7, 8):  "HIGH",
    (5, 6):  "MEDIUM",
    (1, 4):  "LOW",
}

def rule_classify(issue_type: str, description: str) -> dict:
    text = f"{issue_type} {description}".lower()

    best_cat, best_score = "General Infrastructure", 0
    for category, cfg in RULES.items():
        score = sum(1 for kw in cfg["keywords"] if kw in text)
        if score > best_score:
            best_score, best_cat = score, category

    cfg = RULES.get(best_cat, {"dept":"Municipal Corp","base_severity":5,"sla_hours":72})
    severity = cfg["base_severity"]

    # Boost severity from description keywords
    for word, boost in SEVERITY_BOOSTERS.items():
        if word in text:
            severity = min(10, severity + boost)

    # Map to priority
    priority = "MEDIUM"
    for (lo, hi), p in PRIORITY_MAP.items():
        if lo <= severity <= hi:
            priority = p
            break

    confidence = min(0.99, 0.75 + best_score * 0.05) if best_score > 0 else 0.72
    return {
        "category":   best_cat,
        "department": cfg["dept"],
        "severity":   severity,
        "priority":   priority,
        "sla_hours":  cfg["sla_hours"],
        "confidence": round(confidence * 100, 1),
        "method":     "rule-based",
    }


async def hf_classify(issue_type: str, description: str) -> Optional[dict]:
    """Try HuggingFace zero-shot classification."""
    if not HF_TOKEN:
        return None
    try:
        text = f"{issue_type}: {description[:300]}"
        labels = list(RULES.keys()) + ["General Infrastructure"]
        payload = {"inputs": text, "parameters": {"candidate_labels": labels}}
        headers = {"Authorization": f"Bearer {HF_TOKEN}"}
        async with httpx.AsyncClient(timeout=8) as client:
            resp = await client.post(HF_API_URL, json=payload, headers=headers)
            if resp.status_code != 200:
                return None
            data = resp.json()
            top_label = data["labels"][0]
            top_score = data["scores"][0]
            cfg = RULES.get(top_label, {"dept":"Municipal Corp","base_severity":5,"sla_hours":72})

            text_lower = f"{issue_type} {description}".lower()
            severity = cfg["base_severity"]
            for word, boost in SEVERITY_BOOSTERS.items():
                if word in text_lower:
                    severity = min(10, severity + boost)

            priority = "MEDIUM"
            for (lo, hi), p in PRIORITY_MAP.items():
                if lo <= severity <= hi:
                    priority = p
                    break

            return {
                "category":   top_label,
                "department": cfg["dept"],
                "severity":   severity,
                "priority":   priority,
                "sla_hours":  cfg["sla_hours"],
                "confidence": round(top_score * 100, 1),
                "method":     "huggingface-zero-shot",
            }
    except Exception:
        return None


async def triage(issue_type: str, description: str = "") -> dict:
    """
    Main triage function.
    Tries HuggingFace first, falls back to rule-based instantly.
    """
    hf_result = await hf_classify(issue_type, description)
    if hf_result:
        return hf_result
    return rule_classify(issue_type, description)
