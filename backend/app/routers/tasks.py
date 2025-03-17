from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.database import get_db
from app.schemas import TaskCreate, TaskResponse
from app.models import Task
from app.crud import create_task, get_user_tasks
from typing import List

router = APIRouter()

@router.post("/", response_model=TaskResponse)
async def add_task(task: TaskCreate, db: AsyncSession=Depends(get_db)):
    print(f'############### inside task route: {task}')
    return await create_task(db, task) # temporary user 1

@router.get("/", response_model=List[TaskResponse])
async def list_tasks(db: AsyncSession = Depends(get_db)):
    return await get_user_tasks(db, user_id=1) # temporary user 1 