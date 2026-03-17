"""
Authentication module for CityPulse
Handles JWT tokens, password hashing, and user verification
"""

import jwt
import os
import bcrypt
from datetime import datetime, timedelta
from pydantic import BaseModel
from typing import Optional
from fastapi import HTTPException, Depends, Header

# Configuration
SECRET_KEY = os.getenv("SECRET_KEY", "citypulse-secret-key-change-in-production")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_HOURS = 24

# ─────────────────────────────────────────────────────────────
# SCHEMAS
# ─────────────────────────────────────────────────────────────

class UserRegister(BaseModel):
    name: str
    email: str
    password: str
    role: str  # citizen, official, worker


class UserLogin(BaseModel):
    email: str
    password: str


class TokenResponse(BaseModel):
    access_token: str
    token_type: str
    role: str
    name: str


class UserInfo(BaseModel):
    id: int
    name: str
    email: str
    role: str
    created_at: str


# ─────────────────────────────────────────────────────────────
# PASSWORD HASHING
# ─────────────────────────────────────────────────────────────

def hash_password(password: str) -> str:
    """Hash a password using bcrypt."""
    salt = bcrypt.gensalt()
    hashed = bcrypt.hashpw(password.encode(), salt)
    return hashed.decode()


def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Verify a plain password against a hashed password."""
    return bcrypt.checkpw(plain_password.encode(), hashed_password.encode())


# ─────────────────────────────────────────────────────────────
# JWT TOKEN GENERATION & VERIFICATION
# ─────────────────────────────────────────────────────────────

def create_access_token(user_id: int, email: str, role: str) -> str:
    """
    Create a JWT access token.
    
    Args:
        user_id: User ID
        email: User email
        role: User role (citizen, official, worker)
    
    Returns:
        JWT token string
    """
    expires = datetime.utcnow() + timedelta(hours=ACCESS_TOKEN_EXPIRE_HOURS)
    payload = {
        "user_id": user_id,
        "email": email,
        "role": role,
        "exp": expires,
        "iat": datetime.utcnow()
    }
    token = jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)
    return token


def verify_token(token: str) -> dict:
    """
    Verify and decode a JWT token.
    
    Args:
        token: JWT token string
    
    Returns:
        Token payload dictionary
    
    Raises:
        HTTPException: If token is invalid or expired
    """
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")


# ─────────────────────────────────────────────────────────────
# DEPENDENCY FUNCTIONS
# ─────────────────────────────────────────────────────────────

async def get_current_user(authorization: Optional[str] = Header(None)) -> dict:
    """
    Dependency function to get current authenticated user from JWT token.
    
    Args:
        authorization: Authorization header with Bearer token
    
    Returns:
        User payload from token
    
    Raises:
        HTTPException: If token is missing or invalid
    """
    if not authorization:
        raise HTTPException(status_code=401, detail="Missing authorization header")
    
    # Extract token from "Bearer <token>"
    parts = authorization.split()
    if len(parts) != 2 or parts[0].lower() != "bearer":
        raise HTTPException(status_code=401, detail="Invalid authorization header")
    
    token = parts[1]
    payload = verify_token(token)
    return payload


def require_role(*required_roles: str):
    """
    Create a dependency that requires user to have specific role.
    
    Args:
        required_roles: One or more role strings (citizen, official, worker)
    
    Returns:
        Dependency function
    """
    async def check_role(current_user: dict = Depends(get_current_user)) -> dict:
        if current_user["role"] not in required_roles:
            raise HTTPException(
                status_code=403,
                detail=f"Access denied. Required roles: {', '.join(required_roles)}"
            )
        return current_user
    
    return check_role


# ─────────────────────────────────────────────────────────────
# OPTIONAL AUTH (doesn't fail if no token)
# ─────────────────────────────────────────────────────────────

async def get_current_user_optional(
    authorization: Optional[str] = Header(None)
) -> Optional[dict]:
    """
    Optional dependency - returns user info if token provided, None otherwise.
    """
    if not authorization:
        return None
    
    try:
        parts = authorization.split()
        if len(parts) != 2 or parts[0].lower() != "bearer":
            return None
        return verify_token(parts[1])
    except HTTPException:
        return None
