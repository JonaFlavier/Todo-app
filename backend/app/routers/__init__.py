# python treats the folder as a package

from fastapi import APIRouter
from .users import router as users_router
from .tasks import router as tasks_router

api_router = APIRouter()
api_router.include_router(users_router, prefix="/users", tags=["Users"])
api_router.include_router(tasks_router, prefix="/tasks", tags=["Tasks"])

 