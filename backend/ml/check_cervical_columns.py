import pandas as pd

df = pd.read_csv("../datasets/kag_risk_factors_cervical_cancer.csv")

print("Shape:", df.shape)
print("Columns:", df.columns.tolist())
print(df.head())