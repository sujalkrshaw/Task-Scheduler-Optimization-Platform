import pandas as pd


def load_resources():
    df = pd.read_csv("data/resources.csv")
    return df.to_dict(orient="records")