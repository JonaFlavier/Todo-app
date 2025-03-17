from sqlalchemy.ext.declarative import declarative_base 
from sqlalchemy import Integer, Column, String, ForeignKey, Boolean, DateTime, Text
from sqlalchemy.orm import relationship
from datetime import datetime,timezone

Base = declarative_base()

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key = True, index = True)
    # makes the email unique
    email = Column(String, unique=True, index=True, nullable=False)
    username = Column(String, nullable=True)
    hashed_password = Column(String, nullable=True)
    is_active = Column(Boolean, default=True)

    #relationship to connect the users to taasks
    tasks = relationship("Task", back_populates = "owner")



class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key = True, index=True)
    title = Column(String, index=True)
    description = Column(String, nullable=True)
    is_completed = Column(Boolean, default=False)
    created_at = Column(DateTime, default = datetime.now(timezone.utc))
    modified_at = Column(DateTime, default= datetime.now(timezone.utc) , onupdate=datetime.now(timezone.utc))

    # relationships
    owner_id = Column(Integer, ForeignKey("users.id"))
    owner = relationship("User", back_populates="tasks")