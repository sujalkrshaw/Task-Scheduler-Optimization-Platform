from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String

from app.core.database import Base


class Resource(Base):
    __tablename__ = "resources"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String, nullable=False)

    skill = Column(String, nullable=False)

    shift_start = Column(Integer, nullable=False)

    shift_end = Column(Integer, nullable=False)

    max_hours = Column(Integer, nullable=False)