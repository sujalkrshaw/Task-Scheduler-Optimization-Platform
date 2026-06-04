from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import Float
from sqlalchemy import String

from app.core.database import Base


class ScheduleRun(Base):
    __tablename__ = "schedule_runs"

    id = Column(Integer, primary_key=True, index=True)

    engine = Column(String, nullable=False)

    total_tasks = Column(Integer, nullable=False)

    total_lateness = Column(Float, nullable=False)

    utilization = Column(Float, nullable=False)