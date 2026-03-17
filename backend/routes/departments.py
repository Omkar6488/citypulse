from fastapi import APIRouter, Depends
from database import get_db

router = APIRouter()

@router.get("/")
async def list_departments(db=Depends(get_db)):
    async with db.execute("SELECT * FROM departments ORDER BY name") as cur:
        rows = await cur.fetchall()
    return {"success": True, "departments": [dict(r) for r in rows]}
