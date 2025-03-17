# contains all the response/receive models required to interact between FE and BE.
# validates request/response data
# converts database models into JSON-friendly formats

from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional, List

# Base model -> ensures request body validation


# user schemas
class UserBase(BaseModel):
    email: EmailStr # it is required
    username: Optional[str] = None # default is None but allows optional fields
    is_active: bool = True # default is True

class UserCreate(UserBase):
    password: str #  requirement

class UserResponse(UserBase):
    id: int
    class Config:
        from_attributes = True # Converts DB models to JSON


# task schemas
class TaskBase(BaseModel):
    title: str
    description: Optional[str] = None # default is None
    is_completed: bool = False # default is false

class TaskCreate(TaskBase):
    owner_id: int

class TaskResponse(TaskBase):
    id: int
    created_at: datetime
    modified_at: datetime
    class Config:
        from_attribute: True

        

