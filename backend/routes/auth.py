"""
Authentication routes for CityPulse
Endpoints: /api/auth/register, /api/auth/login, /api/auth/me
"""

from fastapi import APIRouter, Depends, HTTPException
from database import get_db
from auth import (
    UserRegister,
    UserLogin,
    TokenResponse,
    UserInfo,
    hash_password,
    verify_password,
    create_access_token,
    get_current_user
)

router = APIRouter(prefix="/api/auth", tags=["Authentication"])


@router.post("/register", response_model=dict)
async def register(user_data: UserRegister, db=Depends(get_db)):
    """
    Register a new user (citizen, official, or worker).
    
    Args:
        user_data: Registration data with name, email, password, role
        db: Database connection
    
    Returns:
        Success message with user email
    
    Raises:
        HTTPException: If email already exists or invalid role
    """
    # Validate role
    if user_data.role not in ["citizen", "official", "worker"]:
        raise HTTPException(
            status_code=400,
            detail="Invalid role. Must be: citizen, official, or worker"
        )
    
    # Check if email already exists
    async with db.execute("SELECT id FROM users WHERE email = ?", (user_data.email,)) as cur:
        existing_user = await cur.fetchone()
    
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    # Hash password
    hashed_pwd = hash_password(user_data.password)
    
    # Insert user
    try:
        await db.execute(
            """
            INSERT INTO users (name, email, password_hash, role)
            VALUES (?, ?, ?, ?)
            """,
            (user_data.name, user_data.email, hashed_pwd, user_data.role)
        )
        await db.commit()
    except Exception as e:
        await db.rollback()
        raise HTTPException(status_code=400, detail="Registration failed")
    
    return {
        "success": True,
        "message": "User registered successfully",
        "email": user_data.email,
        "role": user_data.role
    }


@router.post("/login", response_model=TokenResponse)
async def login(credentials: UserLogin, db=Depends(get_db)):
    """
    Login user and return JWT token.
    
    Args:
        credentials: Email and password
        db: Database connection
    
    Returns:
        JWT token, token type, role, and name
    
    Raises:
        HTTPException: If credentials are invalid
    """
    # Find user by email
    async with db.execute(
        "SELECT id, name, email, password_hash, role FROM users WHERE email = ?",
        (credentials.email,)
    ) as cur:
        user = await cur.fetchone()
    
    if not user:
        raise HTTPException(status_code=401, detail="Invalid email or password")
    
    # Verify password
    if not verify_password(credentials.password, user["password_hash"]):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    
    # Create JWT token
    access_token = create_access_token(
        user_id=user["id"],
        email=user["email"],
        role=user["role"]
    )
    
    return TokenResponse(
        access_token=access_token,
        token_type="bearer",
        role=user["role"],
        name=user["name"]
    )


@router.get("/me", response_model=UserInfo)
async def get_me(current_user: dict = Depends(get_current_user), db=Depends(get_db)):
    """
    Get current logged-in user info.
    
    Args:
        current_user: Current user from JWT token
        db: Database connection
    
    Returns:
        User information (id, name, email, role, created_at)
    """
    # Fetch fresh user data from DB
    async with db.execute(
        "SELECT id, name, email, role, created_at FROM users WHERE id = ?",
        (current_user["user_id"],)
    ) as cur:
        user = await cur.fetchone()
    
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    return UserInfo(
        id=user["id"],
        name=user["name"],
        email=user["email"],
        role=user["role"],
        created_at=user["created_at"]
    )


@router.post("/logout", response_model=dict)
async def logout():
    """
    Logout (mainly for frontend to clear token).
    Frontend will remove token from localStorage.
    """
    return {
        "success": True,
        "message": "Logged out successfully"
    }
