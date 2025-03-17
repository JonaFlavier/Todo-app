from fastapi import FastAPI
from app.database import init_db
from app.routers import api_router # to import API routes

app = FastAPI() # creates the Fast API application



@app.on_event("startup") # runs when the app starts
async def startup(): # create the db tables
    await init_db()


app.include_router(api_router) # load all the API routes

@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI is now connected to PostgreSQL!"}


@app.get("/health")
def health_check():
    return {"status": "healthy"}