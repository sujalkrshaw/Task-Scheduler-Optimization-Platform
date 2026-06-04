from app.services.task_loader import load_tasks
from app.services.resource_loader import load_resources


def generate_schedule():
    tasks = load_tasks()
    resources = load_resources()

    schedule = []

    resource_time = {}

    for resource in resources:
        resource_time[resource["name"]] = 9

    tasks = tasks

    for task in tasks:

        assigned = False

        for resource in resources:

            if resource["skill"] != task["skill"]:
                continue

            start_time = resource_time[resource["name"]]
            end_time = start_time + int(task["duration"])

            schedule.append(
                {
                    "task_id": int(task["id"]),
                    "task_name": task["name"],
                    "resource_name": resource["name"],
                    "start_time": start_time,
                    "end_time": end_time
                }
            )

            resource_time[resource["name"]] = end_time

            assigned = True
            break

        if not assigned:
            schedule.append(
                {
                    "task_id": int(task["id"]),
                    "task_name": task["name"],
                    "resource_name": "UNASSIGNED",
                    "start_time": 0,
                    "end_time": 0
                }
            )

    return schedule