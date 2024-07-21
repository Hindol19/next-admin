from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer
from pydantic import BaseModel


app = FastAPI()

origins = [
    "http://localhost:3000",
]

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    # Adjust this to the specific origins you want to allow
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

weekly_data = [
    {
        "date": "2024-07-13",
        "items": [
            {"name": "Laptops", "quantity": 5, "price": 10.0},
            {"name": "Monitors", "quantity": 2, "price": 15.0},
            {"name": "CPUs", "quantity": 1, "price": 25.0}
        ]
    },
    {
        "date": "2024-07-14",
        "items": [
            {"name": "Laptops", "quantity": 3, "price": 10.0},
            {"name": "Monitors", "quantity": 4, "price": 15.0},
            {"name": "CPUs", "quantity": 1, "price": 25.0}  # Added CPUs
        ]
    },
    {
        "date": "2024-07-15",
        "items": [
            {"name": "Laptops", "quantity": 7, "price": 10.0},
            {"name": "Monitors", "quantity": 1, "price": 15.0},  # Added Monitors
            {"name": "CPUs", "quantity": 2, "price": 25.0}
        ]
    },
    {
        "date": "2024-07-16",
        "items": [
            {"name": "Laptops", "quantity": 1, "price": 10.0},  # Added Laptops
            {"name": "Monitors", "quantity": 5, "price": 15.0},
            {"name": "CPUs", "quantity": 3, "price": 25.0},

        ]
    },
    {
        "date": "2024-07-17",
        "items": [
            {"name": "Laptops", "quantity": 4, "price": 10.0},
            {"name": "Monitors", "quantity": 1, "price": 15.0},  # Added Monitors
            {"name": "CPUs", "quantity": 1, "price": 25.0},  # Added CPUs

        ]
    },
    {
        "date": "2024-07-18",
        "items": [
            {"name": "Laptops", "quantity": 2, "price": 10.0},
            {"name": "Monitors", "quantity": 6, "price": 15.0},
            {"name": "CPUs", "quantity": 1, "price": 25.0}
        ]
    },
    {
        "date": "2024-07-19",
        "items": [
            {"name": "Laptops", "quantity": 3, "price": 10.0},
            {"name": "Monitors", "quantity": 2, "price": 15.0},
            {"name": "CPUs", "quantity": 1, "price": 25.0},  # Added CPUs

        ]
    }
]


class LoginRequest(BaseModel):
    username: str
    password: str


class LoginResponse(BaseModel):
    username: str
    token: str


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


def fake_decode_token(token):
    if token == "fake-token":
        return {"username": "user123"}
    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid authentication credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )


async def get_current_user(token: str = Depends(oauth2_scheme)):
    return fake_decode_token(token)

fakeUserDb = [
    {
        "username": "user123",
        "password": "password"
    }
]


def checkUser(username, password):
    for user in fakeUserDb:
        if user["username"] == username and user["password"] == password:
            return True
    return False


@app.post("/auth/login")
async def login(request: LoginRequest):
    if checkUser(request.username, request.password):
        return {"username": request.username, "token": "fake-token"}
    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid username or password",
        headers={"WWW-Authenticate": "Bearer"},
    )


@app.get("/")
def index():
    return {"message": "Hello World"}


@app.get("/dashboard/metrics")
def metrics(user: dict = Depends(get_current_user)):
    return {
        "total_sales": 35000,
        "orders": 60,
    }


@app.get("/dashboard/weekly-sales")
def weekly(user: dict = Depends(get_current_user)):
    return weekly_data


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
