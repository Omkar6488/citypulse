from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, Form
from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime
import uuid, os, shutil
from database import get_db
from ai_engine import triage

router = APIRouter()

# ── SCHEMAS ──────────────────────────────────────────────────────────────────
class ComplaintCreate(BaseModel):
    name:        Optional[str] = ""
    phone:       Optional[str] = ""
    issue_type:  str
    location:    str
    description: Optional[str] = ""
    latitude:    Optional[float] = None
    longitude:   Optional[float] = None

class ComplaintUpdate(BaseModel):
    status: str
    note:   Optional[str] = ""

class TriageRequest(BaseModel):
    issue_type:  str
    description: Optional[str] = ""

# ── ROUTES ───────────────────────────────────────────────────────────────────

@router.post("/triage")
async def triage_complaint(req: TriageRequest):
    """
    AI triage endpoint — call this BEFORE submitting to preview
    what the AI will classify, severity score, and route.
    """
    result = await triage(req.issue_type, req.description or "")
    return {"success": True, "triage": result}


@router.post("/file", status_code=201)
async def file_complaint(complaint: ComplaintCreate, db=Depends(get_db)):
    """File a new complaint — same as POST / but with /file URL."""
    return await create_complaint(complaint, db)


@router.post("/", status_code=201)
async def create_complaint(complaint: ComplaintCreate, db=Depends(get_db)):
    """Submit a new complaint. AI triage runs automatically."""
    # Run AI triage
    ai = await triage(complaint.issue_type, complaint.description or "")

    ticket_id = f"CP-{uuid.uuid4().hex[:6].upper()}"

    await db.execute("""
        INSERT INTO complaints
        (ticket_id, name, phone, issue_type, location, description,
         latitude, longitude, severity, priority, category,
         department, sla_hours, confidence, status)
        VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
    """, (
        ticket_id,
        complaint.name, complaint.phone,
        complaint.issue_type, complaint.location, complaint.description,
        complaint.latitude, complaint.longitude,
        ai["severity"], ai["priority"], ai["category"],
        ai["department"], ai["sla_hours"], ai["confidence"],
        "Pending",
    ))
    await db.execute("""
        INSERT INTO status_updates (complaint_id, status, note)
        SELECT id, 'Pending', 'Complaint received and AI-triaged'
        FROM complaints WHERE ticket_id = ?
    """, (ticket_id,))
    await db.commit()

    return {
        "success":   True,
        "ticket_id": ticket_id,
        "triage":    ai,
        "message":   f"Complaint registered. Routed to {ai['department']}. SLA: {ai['sla_hours']} hours.",
    }


@router.get("/")
async def list_complaints(
    status:     Optional[str] = None,
    department: Optional[str] = None,
    priority:   Optional[str] = None,
    limit:      int = 50,
    offset:     int = 0,
    db=Depends(get_db)
):
    """List complaints with optional filters."""
    query  = "SELECT * FROM complaints WHERE 1=1"
    params = []
    if status:     query += " AND status = ?";     params.append(status)
    if department: query += " AND department = ?"; params.append(department)
    if priority:   query += " AND priority = ?";   params.append(priority)
    query += " ORDER BY created_at DESC LIMIT ? OFFSET ?"
    params += [limit, offset]

    async with db.execute(query, params) as cur:
        rows = await cur.fetchall()
    return {"success": True, "complaints": [dict(r) for r in rows], "count": len(rows)}


@router.get("/{ticket_id}")
async def get_complaint(ticket_id: str, db=Depends(get_db)):
    """Get a single complaint with full status history."""
    async with db.execute("SELECT * FROM complaints WHERE ticket_id = ?", (ticket_id,)) as cur:
        row = await cur.fetchone()
    if not row:
        raise HTTPException(404, f"Complaint {ticket_id} not found")

    async with db.execute("""
        SELECT * FROM status_updates WHERE complaint_id = ? ORDER BY updated_at DESC
    """, (row["id"],)) as cur:
        history = await cur.fetchall()

    return {
        "success":   True,
        "complaint": dict(row),
        "history":   [dict(h) for h in history],
    }


@router.patch("/{ticket_id}/status")
async def update_status(ticket_id: str, update: ComplaintUpdate, db=Depends(get_db)):
    """Update complaint status (used by city officials)."""
    async with db.execute("SELECT id FROM complaints WHERE ticket_id = ?", (ticket_id,)) as cur:
        row = await cur.fetchone()
    if not row:
        raise HTTPException(404, f"Complaint {ticket_id} not found")

    resolved_at = "CURRENT_TIMESTAMP" if update.status == "Resolved" else "NULL"
    await db.execute(f"""
        UPDATE complaints SET status = ?, updated_at = CURRENT_TIMESTAMP,
        resolved_at = {resolved_at} WHERE ticket_id = ?
    """, (update.status, ticket_id))

    await db.execute("""
        INSERT INTO status_updates (complaint_id, status, note, updated_by)
        VALUES (?, ?, ?, 'Official')
    """, (row["id"], update.status, update.note or ""))

    await db.commit()
    return {"success": True, "ticket_id": ticket_id, "new_status": update.status}


@router.get("/track/{ticket_id}")
async def track_complaint(ticket_id: str, db=Depends(get_db)):
    """Public tracking endpoint — citizen uses this to check status."""
    async with db.execute("""
        SELECT ticket_id, issue_type, location, status, priority,
               department, sla_hours, created_at, resolved_at
        FROM complaints WHERE ticket_id = ?
    """, (ticket_id,)) as cur:
        row = await cur.fetchone()
    if not row:
        raise HTTPException(404, "Ticket not found")
    return {"success": True, "tracking": dict(row)}
