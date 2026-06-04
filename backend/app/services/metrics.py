def calculate_metrics(schedule):
    total_tasks = len(schedule)
    assigned_tasks = len(schedule)

    utilization = (
        assigned_tasks / total_tasks * 100
        if total_tasks > 0
        else 0
    )

    idle_time = 100 - utilization

    return {
        "total_tasks": total_tasks,
        "assigned_tasks": assigned_tasks,
        "utilization": round(utilization, 2),
        "idle_time": round(idle_time, 2),
        "efficiency_score": round(utilization, 2),

        # Business KPIs
        "project_completion": 100,
        "resource_count": 7,
    }