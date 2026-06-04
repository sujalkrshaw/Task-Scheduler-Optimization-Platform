from pydantic import BaseModel


class ScheduleRequest(BaseModel):
    engine: str