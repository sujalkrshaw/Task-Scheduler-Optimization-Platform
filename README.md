# 🚀 Task Scheduler Optimization Platform

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-green?logo=fastapi)
![Python](https://img.shields.io/badge/Python-3.11-yellow?logo=python)
![OR-Tools](https://img.shields.io/badge/Google-OR--Tools-orange)
![Recharts](https://img.shields.io/badge/Recharts-Analytics-red)
![License](https://img.shields.io/badge/License-MIT-brightgreen)

## 📌 Overview

Task Scheduler Optimization Platform is an AI-powered workforce planning and resource allocation system designed to optimize task assignments, improve resource utilization, and generate intelligent scheduling recommendations.

The platform combines optimization algorithms, analytics dashboards, and modern SaaS-style UI to simulate real-world enterprise scheduling systems used in project management and operations planning.

---

## ✨ Features

### 📅 Intelligent Scheduling

* Greedy Scheduling Algorithm
* CP-SAT Optimization Engine
* Resource Allocation Management
* Task Assignment Optimization

### 📊 Analytics Dashboard

* KPI Cards
* Resource Utilization Tracking
* Efficiency Monitoring
* Project Completion Metrics
* Task Distribution Visualization

### 📈 Data Visualization

* Interactive Charts using Recharts
* Pie Chart Analytics
* Schedule Visualization
* Resource Analytics Dashboard

### 🔍 Smart Search

* Task Search & Filtering
* Quick Schedule Lookup
* Dynamic Dashboard Updates

### 📄 Reporting

* CSV Export
* PDF Report Generation
* Schedule Reporting

### 🧠 What-If Analysis

* Scenario Simulation
* Cost Impact Analysis
* Resource Impact Analysis

---

## 🖼️ Application Preview

### Dashboard Overview

Add your screenshot here:

```md
![Dashboard](docs/dashboard.png)
```

### Analytics Dashboard

```md
![Analytics](docs/analytics.png)
```

### Optimization Results

```md
![Optimization](docs/optimization.png)
```

---

## 🏗️ System Architecture

```text
Frontend (React + Vite)
        │
        ▼
REST API (FastAPI)
        │
        ▼
Optimization Engine
(Greedy + CP-SAT)
        │
        ▼
Analytics & Reporting
```

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* Recharts
* JavaScript
* CSS

### Backend

* FastAPI
* Python

### Optimization

* Google OR-Tools
* CP-SAT Solver
* Greedy Scheduling

### Reporting

* jsPDF
* AutoTable
* CSV Export

---

## 📂 Project Structure

```text
Task-Scheduler-Optimization-System
│
├── backend
│   ├── app
│   ├── optimization
│   └── requirements.txt
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── services
│   │   └── App.jsx
│   │
│   └── package.json
│
├── outputs
│   ├── reports
│   └── schedules
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/sujalkrshaw/Task-Scheduler-Optimization-Platform.git
```

### Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

Backend runs on:

```text
http://localhost:8000
```

---

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## 🚀 Usage

1. Enter project details
2. Select scheduling engine
3. Generate optimized schedule
4. Analyze KPIs and charts
5. Export reports in CSV/PDF format
6. Perform What-If Analysis

---

## 📊 Key Metrics

The dashboard tracks:

* Total Tasks
* Assigned Tasks
* Resources
* Utilization %
* Efficiency Score
* Project Completion %

---

## 🎯 Learning Outcomes

This project demonstrates:

* Full Stack Development
* Optimization Algorithms
* Operations Research Concepts
* Data Visualization
* REST API Integration
* Enterprise Dashboard Design
* Reporting & Analytics Systems

---

## 🔮 Future Enhancements

* Authentication System
* Multi-Project Support
* AI Recommendation Engine
* Cloud Deployment
* Team Collaboration Features
* Advanced Scheduling Constraints

---

## 👨‍💻 Author

### Sujal Shaw

B.Tech Student | Full Stack Developer | Optimization & Analytics Enthusiast

GitHub:
https://github.com/sujalkrshaw

LinkedIn:
https://www.linkedin.com

---

## ⭐ Support

If you found this project useful, consider giving it a star ⭐ on GitHub.

It helps support future development and showcases the project to a wider audience.
