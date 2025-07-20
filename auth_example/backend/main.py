from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware 
from pydantic import BaseModel, EmailStr
import json
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5500"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DATA_FILE = "users.json"

if not os.path.exists(DATA_FILE):
    with open(DATA_FILE, "w") as f:
        json.dump([], f)

class User(BaseModel):
    firstname: str
    lastname: str
    email: EmailStr
    password: str

class LoginData(BaseModel):
    email: EmailStr
    password: str

def load_users():
    with open(DATA_FILE, "r") as f:
        return json.load(f)

def save_users(users):
    with open(DATA_FILE, "w") as f:
        json.dump(users, f, indent=2)

@app.post("/register")
def register(user: User):
    users = load_users()

    if any(u["email"] == user.email for u in users):
        raise HTTPException(status_code=400, detail="Email already registered")

    users.append(user.dict())
    save_users(users)
    return {"message": "User registered successfully"}

@app.post("/login")
def login(data: LoginData):
    users = load_users()

    for u in users:
        if u["email"] == data.email and u["password"] == data.password:
            return {"message": "Login successful", "user": u}

    raise HTTPException(status_code=401, detail="Invalid email or password")
