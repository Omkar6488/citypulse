import os
from fastapi import FastAPI, HTTPException, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from contextlib import asynccontextmanager
import uvicorn
from database import init_db
from routes import complaints, analytics, departments, auth

@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_db()
    yield

app = FastAPI(
    title="CityPulse API",
    description="AI-Powered Urban Grievance & Infrastructure Dashboard",
    version="1.0.0",
    lifespan=lifespan
)

# Get FRONTEND_URL from environment or use default
FRONTEND_URL = os.getenv("FRONTEND_URL", "http://localhost:3000")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[FRONTEND_URL, "http://localhost:3000", "http://localhost:3001"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include all routers
app.include_router(auth.router, tags=["Authentication"])
app.include_router(complaints.router, tags=["Complaints"])
app.include_router(departments.router, tags=["Departments"])
app.include_router(analytics.router, tags=["Analytics"])

@app.get("/health")
async def health():
    return {"status": "ok", "service": "CityPulse API"}

if __name__ == "__main__":
    port = int(os.getenv("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)
