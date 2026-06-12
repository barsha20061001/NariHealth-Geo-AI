import pandas as pd
import joblib

from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

df = pd.read_csv("../datasets/kag_risk_factors_cervical_cancer.csv")

df = df.replace("?", pd.NA)
df = df.apply(pd.to_numeric, errors="coerce")

df = df.fillna(df.median())

X = df.drop(
    ["Biopsy", "Citology", "Schiller", "Hinselmann"],
    axis=1
)

y = df["Biopsy"]

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

model = RandomForestClassifier(
    n_estimators=200,
    random_state=42
)

model.fit(X_train, y_train)

pred = model.predict(X_test)

acc = accuracy_score(y_test, pred)

print("Accuracy:", acc)

joblib.dump(
    model,
    "models/cervical_model/model.pkl"
)

print("Model saved successfully")