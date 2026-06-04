from fastapi import APIRouter

from app.services.greedy_scheduler import generate_schedule
from app.services.cpsat_scheduler import generate_optimal_schedule
from app.services.metrics import calculate_metrics
from app.services.whatif import simulate

router = APIRouter()


@router.get("/solve")
def solve():
    schedule = generate_schedule()

    return {
        "engine": "greedy",
        "schedule": schedule,
        "metrics": calculate_metrics(schedule)
    }


@router.get("/optimize")
def optimize():
    schedule = generate_optimal_schedule()

    return {
        "engine": "cp-sat",
        "schedule": schedule,
        "metrics": calculate_metrics(schedule)
    }


@router.get("/whatif")
def what_if(extra_hours: int = 0):
    return simulate(extra_hours)