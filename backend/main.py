from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json
import os

app = FastAPI()

# CORS to let frontend talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # This is not recommended in production.
    # allow_origins=["127.0.0.1:5500"], # Uncomment this and comment above if using VS Live Server
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic model for input validation
class Quote(BaseModel):
    quote: str
    author: str

QUOTES_FILE = "quotes.json"

# Helper functions to read/write the JSON file
def read_quotes():
    if not os.path.exists(QUOTES_FILE):
        return []
    with open(QUOTES_FILE, "r") as f:
        return json.load(f)["quotes"]

def write_quotes(quotes):
    with open(QUOTES_FILE, "w") as f:
        json.dump({"quotes": quotes}, f, indent=4)

# GET: Return all quotes
@app.get("/api/quotes")
def get_quotes():
    return {"quotes": read_quotes()}

# POST: Add a new quote
@app.post("/api/quotes")
def add_quote(new_quote: Quote):
    quotes = read_quotes()
    quotes.append(new_quote.dict())
    write_quotes(quotes)
    return {"message": "Quote added successfully", "quote": new_quote}
