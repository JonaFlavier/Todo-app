from sqlalchemy import create_engine
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os
from dotenv import load_dotenv
from app.models import Base

#load the environment variables
load_dotenv()

# get the database url from the env variables
SQL_DATABASE = os.getenv("DATABASE_URL")

# connect to the postgresql by creating an async engine
engine = create_async_engine(SQL_DATABASE, echo = True)

# to interact with the DB, use sessionmaker
AsyncSessionLocal = sessionmaker(autocommit= False, autoflush = False, bind=engine, class_=AsyncSession)

# use the declarative base
Base = declarative_base()


# initialise the tables for communication

async def init_db():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

# function to connect to the postgres database
async def get_db():
    async with AsyncSessionLocal() as session:
        yield session