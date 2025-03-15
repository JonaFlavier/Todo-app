from fastapi import FastAPI
from app.database import init_db

app = FastAPI()



@app.on_event("startup")
async def startup():
    await init_db()

@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI is now connected to PostgreSQL!"}

