from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os
from dotenv import load_env

#load the environment variables
load_env()

# get the database url from the env variables
SQL_DATABASE = os.getenv("DATABASE_URL")

# connect to the postgresql by creating an engine
engine = create_engine(SQL_DATABASE)

# to interact with the DB, use sessionmaker
# SessionLocal = sessionmaker(autocommit)