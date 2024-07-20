# app/auth.py

from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
from .models import User
from .schemas import Token

router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/login")

# Fake in-memory user store
fake_users_db = {
    "user@example.com": {
        "username": "user",
        "email": "user@example.com",
        "hashed_password": "fakehashedpassword",
    }
}


def fake_hash_password(password: str):
    return "fakehashed" + password


def authenticate_user(fake_db, email: str, password: str):
    user = fake_db.get(email)
    if not user:
        return False
    if not user['hashed_password'] == fake_hash_password(password):
        return False
    return user


@router.post("/auth/login", response_model=Token)
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    user = authenticate_user(
        fake_users_db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=400, detail="Incorrect username or password")
    return {"access_token": user["email"], "token_type": "bearer"}
