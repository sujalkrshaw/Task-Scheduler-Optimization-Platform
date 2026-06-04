from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware

from app.api.routes import router

from app.core.database import Base
from app.core.database import engine

app = FastAPI(
    title="Task Scheduler Optimization System",
    version="1.0.0"
)

Base.metadata.create_all(bind=engine)

app.include_router(router)


@app.get("/")
def root():
    return {
        "message": "Task Scheduler Optimization System Running"
    }


@app.get("/whatif")
def what_if(extra_hours: int = 10):
    return {
        "added_hours": extra_hours,
        "current_utilization": 82,
        "predicted_utilization": 94,
        "resource_gain": "+2 Resources",
        "cost_impact": "+12%"
    }


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)