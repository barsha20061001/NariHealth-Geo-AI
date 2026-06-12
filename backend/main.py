from fastapi import FastAPI
from fastapi import FastAPI, File, UploadFile
import pandas as pd
from pydantic import BaseModel
import joblib
import numpy as np
from typing import List

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
pcos_model = joblib.load("../ml-models/pcos_model/model.pkl")
breast_model = breast_model_data["model"]
breast_features = breast_model_data["features"]
anemia_model = joblib.load("models/anemia_model/model.pkl")
cervical_model = joblib.load(
    "models/cervical_model/model.pkl"
)

class BreastCancerInput(BaseModel):
    values: list[float]

class PCOSInput(BaseModel):
    values: List[float]

class AnemiaInput(BaseModel):
    values: List[float]    

class CervicalInput(BaseModel):
    values: List[float]

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

@app.post("/predict/pcos")
def predict_pcos(data: PCOSInput):
    input_data = np.array(data.values).reshape(1, -1)

    prediction = pcos_model.predict(input_data)[0]
    probability = pcos_model.predict_proba(input_data)[0]

    confidence = round(float(max(probability)) * 100, 2)

    return {
        "prediction": "PCOS Detected" if prediction == 1 else "No PCOS",
        "risk": "High Risk" if prediction == 1 else "Low Risk",
        "confidence": confidence,
        "message": "This is an AI screening result, not a medical diagnosis."
    }

@app.post("/predict/pcos-csv")
async def predict_pcos_csv(file: UploadFile = File(...)):
    df = pd.read_csv(file.file, header=None)

    values = df.iloc[0].values.reshape(1, -1)

    prediction = pcos_model.predict(values)[0]
    probability = pcos_model.predict_proba(values)[0]
    confidence = round(float(max(probability)) * 100, 2)

    return {
        "prediction": "PCOS Detected" if prediction == 1 else "No PCOS",
        "risk": "High Risk" if prediction == 1 else "Low Risk",
        "confidence": confidence,
        "message": "CSV prediction completed. This is AI screening, not medical diagnosis."
    }

@app.post("/predict/anemia")
def predict_anemia(data: AnemiaInput):
    input_data = np.array(data.values).reshape(1, -1)

    prediction = anemia_model.predict(input_data)[0]
    probability = anemia_model.predict_proba(input_data)[0]

    confidence = round(float(max(probability)) * 100, 2)

    return {
        "prediction": "Anemia Detected" if prediction == 1 else "No Anemia",
        "risk": "High Risk" if prediction == 1 else "Low Risk",
        "confidence": confidence,
        "message": "This is an AI screening result, not a medical diagnosis."
    }   

@app.post("/predict/anemia-csv")
async def predict_anemia_csv(file: UploadFile = File(...)):
    df = pd.read_csv(file.file, header=None)

    values = df.iloc[0].values.reshape(1, -1)

    prediction = anemia_model.predict(values)[0]
    probability = anemia_model.predict_proba(values)[0]

    confidence = round(float(max(probability)) * 100, 2)

    return {
        "prediction": "Anemia Detected" if prediction == 1 else "No Anemia",
        "risk": "High Risk" if prediction == 1 else "Low Risk",
        "confidence": confidence,
        "message": "CSV prediction completed. This is AI screening, not medical diagnosis."
    }   





@app.post("/predict-cervical")
def predict_cervical(data: CervicalInput):
    input_data = np.array(data.values).reshape(1, -1)

    prediction = cervical_model.predict(input_data)[0]
    probability = cervical_model.predict_proba(input_data)[0]

    confidence = round(float(max(probability)) * 100, 2)

    return {
        "prediction": "Cervical Cancer Risk Detected" if prediction == 1 else "Low Cervical Cancer Risk",
        "risk": "High Risk" if prediction == 1 else "Low Risk",
        "confidence": confidence,
        "message": "This is an AI screening result, not a medical diagnosis."
    }

@app.post("/predict-cervical-csv")
async def predict_cervical_csv(file: UploadFile = File(...)):
    df = pd.read_csv(file.file, header=None)

    values = df.iloc[0].values.reshape(1, -1)

    prediction = cervical_model.predict(values)[0]
    probability = cervical_model.predict_proba(values)[0]

    confidence = round(float(max(probability)) * 100, 2)

    return {
        "prediction": "Cervical Cancer Risk Detected" if prediction == 1 else "Low Cervical Cancer Risk",
        "risk": "High Risk" if prediction == 1 else "Low Risk",
        "confidence": confidence,
        "message": "CSV prediction completed. This is AI screening, not medical diagnosis."
    }

@app.post("/predict-period-csv")
async def predict_period_csv(file: UploadFile = File(...)):
    df = pd.read_csv(file.file, header=None)

    row = df.iloc[0].tolist()

    age = float(row[0])
    cycle_length = float(row[1])
    period_duration = float(row[2])
    pain_level = float(row[3])
    heavy_bleeding = int(row[4])
    irregular_cycles = int(row[5])
    fatigue = int(row[6])
    mood_swings = int(row[7])

    score = 0

    if cycle_length < 21 or cycle_length > 35:
        score += 2
    if period_duration > 7:
        score += 2
    if pain_level >= 8:
        score += 2
    if heavy_bleeding == 1:
        score += 2
    if irregular_cycles == 1:
        score += 2
    if fatigue == 1:
        score += 1
    if mood_swings == 1:
        score += 1

    if score >= 7:
        risk = "High Risk"
        message = "Please consult a gynecologist for proper evaluation."
    elif score >= 4:
        risk = "Moderate Risk"
        message = "Monitor symptoms and consider medical consultation."
    else:
        risk = "Low Risk"
        message = "Your symptoms appear low risk, but regular tracking is important."

    return {
        "prediction": "Menstrual Health Risk Assessment",
        "risk": risk,
        "score": score,
        "message": message
    }    









