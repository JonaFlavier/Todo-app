# contains all the response/receive models required to interact between FE and BE.

from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional, List


# user schemas
class UserBase(BaseModel):
    email: EmailStr # it is required
    full_name: Optional[str] = None # default is None
    is_active: bool = True # default is True

class UserCreate(UserBase):
    password: str #  requirement

class UserResponse(UserBase):
    id: int
    class Config:
        from_attributes = True

        

