from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
# from sqlalchemy.orm import Session
from app.database import get_db
from app.schemas import UserCreate, UserResponse
from app.models import User
from app.crud import create_user, get_user_by_email
from typing import List
from passlib.context import CryptContext

router = APIRouter()

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

@router.post("/", response_model = UserResponse)
async def register_user(user: UserCreate, db: AsyncSession = Depends(get_db)):
    existing_user = await get_user_by_email(db, user.email)
    print(f'USER details: {user.model_dump()}')
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    hashed_password = pwd_context.hash(user.password)
    print(f'USER hashed pw: {hashed_password}')
    new_user = await create_user(db, user, hashed_password)
    print("User created here !!!")
    return new_user 