from fastapi import APIRouter, Depends
from database import get_db

router = APIRouter()

@router.get("/summary")
async def summary(db=Depends(get_db)):
    """Top-level KPIs for the dashboard stat cards."""
    async with db.execute("SELECT COUNT(*) as total FROM complaints") as cur:
        total = (await cur.fetchone())["total"]
    async with db.execute("SELECT COUNT(*) as n FROM complaints WHERE status != 'Resolved'") as cur:
        active = (await cur.fetchone())["n"]
    async with db.execute("SELECT COUNT(*) as n FROM complaints WHERE status = 'Critical'") as cur:
        critical = (await cur.fetchone())["n"]
    async with db.execute("SELECT COUNT(*) as n FROM complaints WHERE status = 'Resolved'") as cur:
        resolved = (await cur.fetchone())["n"]
    async with db.execute("""
        SELECT AVG((julianday(resolved_at) - julianday(created_at)) * 24) as avg_hrs
        FROM complaints WHERE resolved_at IS NOT NULL
    """) as cur:
        row = await cur.fetchone()
        avg_resolution = round(row["avg_hrs"] or 0, 1)

    return {
        "total":          total,
        "active":         active,
        "critical":       critical,
        "resolved":       resolved,
        "resolution_rate": round((resolved / total * 100) if total else 0, 1),
        "avg_resolution_hours": avg_resolution,
    }


@router.get("/by-department")
async def by_department(db=Depends(get_db)):
    """Complaint counts grouped by department and status."""
    async with db.execute("""
        SELECT department,
               COUNT(*) as total,
               SUM(CASE WHEN status='Pending'     THEN 1 ELSE 0 END) as pending,
               SUM(CASE WHEN status='In Progress' THEN 1 ELSE 0 END) as in_progress,
               SUM(CASE WHEN status='Critical'    THEN 1 ELSE 0 END) as critical,
               SUM(CASE WHEN status='Resolved'    THEN 1 ELSE 0 END) as resolved
        FROM complaints
        GROUP BY department
        ORDER BY total DESC
    """) as cur:
        rows = await cur.fetchall()
    return {"success": True, "departments": [dict(r) for r in rows]}


@router.get("/by-issue-type")
async def by_issue_type(db=Depends(get_db)):
    """Complaint counts by issue type for pie chart."""
    async with db.execute("""
        SELECT category, COUNT(*) as count
        FROM complaints GROUP BY category ORDER BY count DESC
    """) as cur:
        rows = await cur.fetchall()
    return {"success": True, "breakdown": [dict(r) for r in rows]}


@router.get("/by-severity")
async def by_severity(db=Depends(get_db)):
    """Severity distribution."""
    async with db.execute("""
        SELECT severity, COUNT(*) as count
        FROM complaints GROUP BY severity ORDER BY severity DESC
    """) as cur:
        rows = await cur.fetchall()
    return {"success": True, "distribution": [dict(r) for r in rows]}


@router.get("/recent-trend")
async def recent_trend(db=Depends(get_db)):
    """Hourly complaint volume for the trend line chart."""
    async with db.execute("""
        SELECT strftime('%H:00', created_at) as hour, COUNT(*) as count
        FROM complaints
        WHERE created_at >= datetime('now', '-24 hours')
        GROUP BY hour ORDER BY hour
    """) as cur:
        rows = await cur.fetchall()
    return {"success": True, "trend": [dict(r) for r in rows]}


@router.get("/map-points")
async def map_points(db=Depends(get_db)):
    """All complaints with lat/lng for the heat map."""
    async with db.execute("""
        SELECT ticket_id, issue_type, location, latitude, longitude,
               severity, status, priority, department
        FROM complaints
        WHERE latitude IS NOT NULL AND longitude IS NOT NULL
        ORDER BY created_at DESC
    """) as cur:
        rows = await cur.fetchall()
    return {"success": True, "points": [dict(r) for r in rows]}


@router.get("/sla-breaches")
async def sla_breaches(db=Depends(get_db)):
    """Complaints that have breached their SLA target."""
    async with db.execute("""
        SELECT ticket_id, issue_type, location, department, priority,
               sla_hours, created_at, status,
               ROUND((julianday('now') - julianday(created_at)) * 24, 1) as hours_elapsed
        FROM complaints
        WHERE status != 'Resolved'
          AND (julianday('now') - julianday(created_at)) * 24 > sla_hours
        ORDER BY hours_elapsed DESC
    """) as cur:
        rows = await cur.fetchall()
    return {"success": True, "breaches": [dict(r) for r in rows], "count": len(rows)}
