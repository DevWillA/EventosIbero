from fastapi  import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    alloe__methods=["*"],
    allow_headers=["*"]
)

usuarios = [{"username": "admin", "password": "1234"}]

@app.post("/login")
async def login(username: str, password: str):
    for usuario in usuarios:
        if usuario["username"] == username and usuario["password"] == password:
            return {"message": "Login successful"}
    return {"message": "Invalid credentials"}

