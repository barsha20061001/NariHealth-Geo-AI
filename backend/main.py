from fastapi import FastAPI
from fastapi import FastAPI, File, UploadFile
import pandas as pd
from pydantic import BaseModel
import joblib
import numpy as np
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

breast_model_data = joblib.load("models/breast_cancer_model.pkl")
breast_model = breast_model_data["model"]
breast_features = breast_model_data["features"]

class BreastCancerInput(BaseModel):
    values: list[float]

@app.get("/")
def home():
    return {"message": "NariHealth GeoAI Backend is running"}

@app.get("/health")
def health():
    return {"status": "OK"}

@app.get("/breast-cancer/features")
def get_breast_features():
    return {
        "features": breast_features,
        "total_features": len(breast_features)
    }

@app.post("/predict/breast-cancer")
def predict_breast_cancer(data: BreastCancerInput):
    input_data = np.array(data.values).reshape(1, -1)

    prediction = breast_model.predict(input_data)[0]
    probability = breast_model.predict_proba(input_data)[0]

    result = breast_model_data["target_names"][prediction]
    confidence = round(float(max(probability)) * 100, 2)

    risk = "Low Risk" if result == "benign" else "High Risk"

    return {
        "prediction": result,
        "risk": risk,
        "confidence": confidence,
        "message": "This is an AI screening result, not a medical diagnosis. Please consult a doctor."
    }

@app.post("/predict/breast-cancer-csv")
async def predict_breast_cancer_csv(file: UploadFile = File(...)):
    df = pd.read_csv(file.file, header=None)

    if df.shape[1] != 30:
        return {
            "error": "CSV must contain exactly 30 feature columns."
        }

    values = df.iloc[0].values.reshape(1, -1)

    prediction = breast_model.predict(values)[0]
    probability = breast_model.predict_proba(values)[0]

    result = breast_model_data["target_names"][prediction]
    confidence = round(float(max(probability)) * 100, 2)

    risk = "Low Risk" if result == "benign" else "High Risk"

    return {
        "prediction": result,
        "risk": risk,
        "confidence": confidence,
        "message": "CSV prediction completed. This is AI screening, not medical diagnosis."
    }