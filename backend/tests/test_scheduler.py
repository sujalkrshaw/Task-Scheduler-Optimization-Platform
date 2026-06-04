from app.services.greedy_scheduler import generate_schedule


def test_schedule_generation():

    schedule = generate_schedule()

    assert len(schedule) > 0