# NariHealth GeoAI

<p align="center">
  <h3 align="center">AI-Powered Women's Health Intelligence Platform</h3>
  <p align="center">
    Early Risk Detection • GeoAI Hotspot Mapping • Public Health Intelligence
  </p>
</p>

---

## Overview

NariHealth GeoAI is an AI-driven women's healthcare platform designed to improve early disease detection, health awareness, and public health decision-making. The platform combines machine learning-powered disease risk prediction with geographic intelligence, enabling healthcare professionals, ASHA workers, doctors, and government agencies to identify health risks, monitor disease hotspots, and plan interventions more effectively.

NariHealth transforms healthcare from reactive treatment to proactive prevention.

---

## Problem Statement

Millions of women face delayed diagnosis and inadequate access to preventive healthcare due to:

* Limited awareness and screening opportunities
* Late detection of chronic and life-threatening conditions
* Lack of centralized healthcare intelligence systems
* Difficulty identifying regional health risk patterns
* Limited decision-support tools for healthcare workers

These challenges lead to preventable complications, higher healthcare costs, and reduced quality of life.

---

## Solution

NariHealth GeoAI provides an integrated ecosystem that combines:

* AI-powered disease risk prediction
* GeoAI hotspot detection and visualization
* Government healthcare analytics dashboards
* ASHA worker field support tools
* Doctor review and patient management workflows
* Health report upload and management

The platform enables proactive healthcare interventions by identifying high-risk populations before conditions become severe.

---

## Key Features

### AI Risk Engine

A centralized screening platform that provides:

* PCOS Risk Assessment
* Anemia Risk Prediction
* Breast Cancer Risk Assessment
* Cervical Cancer Risk Assessment
* Menstrual Health Analysis

The system uses machine learning models to assist with early risk detection and preventive screening.

---

### GeoAI Hotspot Mapping

Interactive health intelligence mapping system featuring:

* National and regional health risk visualization
* High-risk hotspot identification
* State-wise risk ranking
* Screening prioritization recommendations
* Resource allocation insights

This enables healthcare agencies to identify regions requiring immediate intervention.

---

### Government Dashboard

Public health intelligence dashboard providing:

* Women screened
* High-risk cases detected
* Disease distribution analytics
* Hotspot statistics
* Health trend visualization
* Strategic recommendations

Designed for data-driven healthcare planning and policy-making.

---

### ASHA Worker Portal

Field-level healthcare management platform enabling:

* Community survey collection
* Patient screening support
* Risk reporting
* Follow-up tracking

---

### Doctor Review Portal

Clinical workflow platform providing:

* Patient assessment review
* Risk evaluation
* Follow-up management
* Medical recommendations

---

### Health Report Upload

Users can upload medical reports for centralized management and future AI-assisted analysis.

---

## System Architecture

```text
                    ┌─────────────────┐
                    │     Patients    │
                    └────────┬────────┘
                             │
                             ▼
                ┌─────────────────────────┐
                │      NariHealth AI      │
                │       Risk Engine       │
                └────────┬────────────────┘
                         │
         ┌───────────────┼───────────────┐
         ▼               ▼               ▼

  Disease Risk      GeoAI Engine    Health Reports
   Prediction       Hotspot Maps       Upload

         ▼               ▼               ▼

    Doctors        Government       ASHA Workers
                   Dashboard
```

---

## Technology Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* React Router
* Framer Motion
* Recharts
* React Leaflet

### Backend

* FastAPI
* Python

### Machine Learning

* Scikit-Learn
* Pandas
* NumPy
* Joblib

### Data Visualization

* Recharts
* Leaflet Maps

---

## Project Structure

```text
NariHealth
│
├── frontend
│   ├── src
│   │   ├── pages
│   │   ├── components
│   │   ├── assets
│   │   └── data
│   │
│   └── public
│
├── backend
│   ├── main.py
│   ├── models
│   └── routes
│
├── datasets
│
└── README.md
```

---

## Screenshots

### Home Page

Add homepage screenshot here.

```md
![Home](screenshots/home.png)
```

### AI Risk Engine

```md
![AI Risk Engine](screenshots/airiskengine.png)
```

### GeoAI Hotspots

```md
![Geo Hotspots](screenshots/hotspots.png)
```

### Government Dashboard

```md
![Dashboard](screenshots/dashboard.png)
```

### Doctor Portal

```md
![Doctor Portal](screenshots/doctor.png)
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/NariHealth.git
cd NariHealth
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend will run at:

```text
http://localhost:5173
```

### Backend Setup

```bash
cd backend

pip install -r requirements.txt

uvicorn main:app --reload
```

Backend will run at:

```text
http://localhost:8000
```

---

## Future Scope

* Real-time healthcare monitoring
* Integration with wearable devices
* Multilingual AI healthcare assistant
* Advanced GeoAI clustering
* District-level disease forecasting
* Government resource optimization
* Mobile application support
* Healthcare camp planning engine

---

## Impact

NariHealth GeoAI aims to:

* Improve early disease detection
* Increase healthcare accessibility
* Support frontline healthcare workers
* Enable data-driven public health decisions
* Reduce preventable health complications

By combining AI-powered diagnostics with geographic intelligence, NariHealth creates a scalable framework for preventive women's healthcare.

---

## Team

Add your team details here.

```text
Team Name:

Members:
• Member 1
• Member 2
• Member 3
```

---

## License

This project is developed for educational, research, and healthcare innovation purposes.

---

<p align="center">
Built with ❤️ for improving women's healthcare through AI and Geo Intelligence
</p>
