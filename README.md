# 🌲🔥 GreenGuard FireWatch

**GreenGuard FireWatch** is a production-ready, hackathon-grade web application for **real-time forest fire risk detection, monitoring, and prevention**.  
Built for **Hack For Green Bharat**, this platform simulates **IoT sensor data ingestion** and **AI-based fire risk prediction** to support early intervention and environmental protection.

The system combines **live dashboards, intelligent risk prediction, interactive maps, alerts, and analytics** into a single unified platform designed for forest authorities, disaster management teams, and environmental agencies.

---

## 🎯 Project Objective

To design and demonstrate a **scalable, real-time forest fire monitoring system** that:
- Predicts fire risk using environmental and location-based data
- Provides early warnings through intelligent alerts
- Visualizes risk across regions using interactive maps
- Enables data-driven decision making for fire prevention

> ⚠️ This is a **fully working prototype** built to look and behave like a real-world industry system.

---

## 🚀 Core Features

### 🔥 1. AI-Based Fire Risk Prediction
Multi-class fire risk classification with intelligent explanations.

**Risk Levels:**
- 🟢 Low Risk  
- 🟡 Moderate Risk  
- 🟠 High Risk  
- 🔴 Critical Risk  

Each prediction includes:
- Risk level
- Probability score (%)
- AI-generated explanation describing contributing factors

---

### 🌡️ 2. Sensor & Environmental Inputs
Supports **manual input** and **simulated IoT data ingestion**.

**Environmental Sensors:**
- Temperature (°C)
- Humidity (%)
- Soil Moisture (%)
- Wind Speed & Direction
- Atmospheric Pressure
- Rainfall (last 24 hours)
- CO / CO₂ Levels
- Smoke Concentration
- Light / IR Sensor Values

**Location Data:**
- Latitude & Longitude
- Forest / Region Name
- Vegetation Type (optional)

---

## 📊 Application Modules

### 📈 A. Live Monitoring Dashboard
- Real-time sensor values
- Large, color-coded fire risk indicator
- 24-hour trend line charts
- Auto-refresh data simulation
- Clean, green-themed card layout

---

### 🗺️ B. Interactive Map View
- Google Maps / Leaflet integration
- Sensor markers with risk-based color coding
- Clickable markers showing:
  - Sensor details
  - Current risk level
  - Probability & explanation

---

### 🚨 C. Intelligent Alert System
Triggers when risk reaches **High or Critical**:
- On-dashboard alert notifications
- Simulated Email alerts
- Simulated SMS alerts
- Alert history and logs

---

### 📊 D. Historical Data & Analytics
- Stored prediction history
- Tabular analytics:
  - Date & time
  - Location
  - Sensor readings
  - Predicted risk
- Simulated model accuracy tracking
- Fire incident vs prediction comparison

---

### 📡 E. IoT Sensor Management
- Sensor connectivity status (Online / Offline)
- Last update timestamp
- Battery level indicator
- Add new sensors dynamically

---

## 🔐 Admin Panel
Secure admin interface for system management:
- Add / remove sensors
- View full prediction history
- Monitor model performance metrics
- Simulated AI model retraining
- Controlled access layout

---

## 🤖 Bonus: AI Assistant (RAG-style)
An intelligent assistant to guide preventive actions:
- “What to do in critical fire risk?”
- “Best containment strategy during dry winds?”
- Answers generated using indexed fire safety guidelines

---

## 🧠 AI Logic Overview
- Rule-based + ML-inspired classification logic
- Probabilistic output generation
- Explainable AI reasoning
- Designed for real-time decision support

---

## 🛠️ Technology Stack

### Frontend
- React / Next.js
- TypeScript
- Tailwind CSS
- Charting libraries
- Map integration (Google Maps / Leaflet)

### Backend
- RESTful APIs
- Sensor data simulation engine
- Prediction services

### Database
- Sensor metadata
- Prediction history
- Alert logs

### AI Layer
- Risk classification logic
- Probability scoring
- Explanation engine

---

## 🎨 Design & UX Principles
- Green, eco-friendly visual theme
- Clean and modern UI
- Clear iconography for alerts, fire, sensors
- Fully responsive for all devices
- Designed for hackathon demos & real-world dashboards

---

## ⚙️ Installation & Setup

```bash
git clone https://github.com/your-username/greenguard-firewatch.git
cd greenguard-firewatch
npm install
npm run dev