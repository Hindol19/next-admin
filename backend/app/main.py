# app/main.py

from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from .auth import oauth2_scheme, router as auth_router
from .schemas import Metric
from .models import User

app = FastAPI()

# Allowing CORS for specific origins
origins = [
    "http://localhost:3000",
    "http://localhost:8000",
    # add any other origins you want to allow
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)

fake_metrics = [
    {"name": "Total Sales", "value": 1500},
    {"name": "New Customers", "value": 45},
]


# @app.get("/test-cors")
# async def test_cors():
#     return {"message": "CORS works!"}


@app.get("/metrics", response_model=list[Metric])
async def get_metrics(token: str = Depends(oauth2_scheme)):
    if token not in [user['email'] for user in fake_users_db.values()]:
        raise HTTPException(status_code=401, detail="Unauthorized")
    return fake_metrics
