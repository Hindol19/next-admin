# app/models.py

from pydantic import BaseModel


class User(BaseModel):
    username: str
    email: str
    hashed_password: str


class Metric(BaseModel):
    name: str
    value: int
