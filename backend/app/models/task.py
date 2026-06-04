from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String

from app.core.database import Base


class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String, nullable=False)

    duration = Column(Integer, nullable=False)

    deadline = Column(Integer, nullable=False)

    priority = Column(Integer, nullable=False)

    skill = Column(String, nullable=False)

    dependencies = Column(String, default="")