# app/schemas.py

from pydantic import BaseModel


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    email: str | None = None


class Metric(BaseModel):
    name: str
    value: int
