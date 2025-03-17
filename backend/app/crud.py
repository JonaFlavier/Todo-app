# Database Operations (CRUD)
# handles all DB queries using SQLAlchemy
# SOC: business logic stays out of API routes

# creates users#

from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy.orm import joinedload
from app.models import User, Task
from app.schemas import UserCreate, TaskCreate
from typing import Optional, List


# user functions
async def create_user(db: AsyncSession, user: UserCreate, hashed_password: str):
    print(f'user in create user:{user}')
    new_user = User(email=user.email, username=user.username, hashed_password=hashed_password)
    db.add(new_user)
    await db.commit()
    await db.refresh(new_user)
    return new_user


async def get_user_by_email(db: AsyncSession, email:str):
    result = await db.execute(select(User).where(User.email==email))
    return result.scalars().first()



# task functions

async def create_task(db: AsyncSession, task: TaskCreate):
    print(f'Task Details in creation_task function: {task}')
    new_task = Task(**task.model_dump())
    db.add(new_task)
    await db.commit()
    await db.refresh(new_task)
    return new_task

async def get_user_tasks(db: AsyncSession, user_id: int) -> List[Task]:
    result = await db.execute(select(Task).where(Task.owner_id == user_id))
    return result.scalars().all()