from pydantic import BaseModel
from typing import List


class ScheduledTask(BaseModel):
    task_id: int
    task_name: str
    resource_name: str
    start_time: int
    end_time: int


class ScheduleResponse(BaseModel):
    engine: str
    total_tasks: int
    schedule: List[ScheduledTask]