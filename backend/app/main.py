from .data import weekly_data, fakeUserDb, top_products
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


@app.get("/dashboard/top-products")
def top_prod(user: dict = Depends(get_current_user)):
    return top_products


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
