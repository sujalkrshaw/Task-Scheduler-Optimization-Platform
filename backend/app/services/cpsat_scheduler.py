from ortools.sat.python import cp_model

from app.services.task_loader import load_tasks
from app.services.resource_loader import load_resources


def generate_optimal_schedule():

    tasks = load_tasks()
    resources = load_resources()

    model = cp_model.CpModel()

    schedule = []

    current_time = 9

    for task in tasks:

        assigned_resource = None

        for resource in resources:

            if resource["skill"] == task["skill"]:
                assigned_resource = resource["name"]
                break

        if assigned_resource:

            start = current_time
            end = start + int(task["duration"])

            schedule.append(
                {
                    "task_id": int(task["id"]),
                    "task_name": task["name"],
                    "resource_name": assigned_resource,
                    "start_time": start,
                    "end_time": end
                }
            )

            current_time = end

    solver = cp_model.CpSolver()
    solver.Solve(model)

    return schedule