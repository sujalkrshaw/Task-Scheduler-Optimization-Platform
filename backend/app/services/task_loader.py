import pandas as pd


def load_tasks():
    df = pd.read_csv("data/tasks.csv")
    return df.to_dict(orient="records")