from fastapi import FastAPI, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import EmailStr
import re

app = FastAPI()

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

def is_valid_name(name: str) -> bool:
    return bool(re.match(r"^[A-Za-z\s\-']+$", name.strip()))

@app.post("/contact")
def contact(
    name: str = Form(...),
    email: EmailStr = Form(...),
    message: str = Form(...)
):
    if not is_valid_name(name):
        raise HTTPException(status_code=400, detail="Invalid name format.")
    if len(message.strip()) < 10:
        raise HTTPException(status_code=400, detail="Message too short.")

    # Placeholder for sending email or storing the message
    # send_email(name, email, message)

    return {"message": "Thank you! We’ll be in touch."}


