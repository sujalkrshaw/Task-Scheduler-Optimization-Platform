def simulate(extra_hours):
    return {
        "added_hours": extra_hours,
        "current_utilization": 100,
        "predicted_utilization": 90,
        "resource_gain": "2 additional tasks can be scheduled",
        "cost_impact": f"+{extra_hours * 500} INR",
    }