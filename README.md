# 💰 FinanceTracker (MERN)

A personal finance tracker built with the **MERN stack** (MongoDB, Express, React, Node.js).  
It lets you add, view, edit, and delete transactions with fields for title, amount (+/-), date, and category.

## 🌐 Live Demo

Try the app online: [FinanceTracker Live](https://financetracker-svwv.onrender.com)  

---

## 🚀 Tech Stack

- **Frontend:** React (Vite) + Tailwind CSS v3.4.17
- **Backend:** Node.js + Express (ES Modules)
- **Database:** MongoDB (via Mongoose)
- **Deployment Ready:** Works locally & on Render

---

## 📦 Project Structure
```
financetrack/
├── backend/ # Express + MongoDB backend
│ ├── src/
│ │ ├── models/ # Mongoose models
│ │ ├── routes/ # Express routes
│ │ └── server.js # Entry point
│ └── package.json
├── frontend/ # React (Vite + Tailwind) frontend
│ └── package.json
├── package.json # Root scripts (build/start)
└── README.md
```
---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repo
```bash
git clone https://github.com/your-username/financetrack.git
cd financetrack
```
### 2️⃣ Environment Variables
In backend/.env:
```bash
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 3️⃣ Install Dependencies
```bash
# Install backend + frontend deps
npm run install --prefix backend
npm run install --prefix frontend
```

### 4️⃣ Run Locally (Development)
```bash
In two terminals:

# Start backend
cd backend
npm run dev

# Start frontend
cd frontend
npm run dev
```
Frontend will be on http://localhost:5173, backend on http://localhost:5000.

### 5️⃣ Production Build
```bash
# At root
npm run build
npm start


Builds frontend (frontend/dist)

Serves frontend from backend (/)

API available at /api/...
```
---
### 🌐 Deployment (Render)

Push repo to GitHub

Create a Web Service on Render

Connect repo

Set:

Build Command: npm run build

Start Command: npm start

Add environment variable MONGO_URI

Deploy 🚀

---

### 📖 API Endpoints

Base URL:

Local: http://localhost:5000/api/transactions

Production: https://your-app.onrender.com/api/transactions

### ➕ Create Transaction
POST /api/transactions

---

### Body (JSON):
```bash
{
  "title": "Grocery Shopping",
  "amount": -50,
  "date": "2025-09-13",
  "category": "Food"
}
```
---

### 📂 Get All Transactions
```bash
GET /api/transactions
```

### ✏️ Update Transaction
```bash
PUT /api/transactions/:id
```

### Body (JSON):
```bash
{
  "title": "Supermarket",
  "amount": -60,
  "date": "2025-09-14",
  "category": "Food"
}
```

### ❌ Delete Transaction
```bash
DELETE /api/transactions/:id
```

---

### 🖥️ Frontend Routes

/ → View all transactions

/add → Add a new transaction

/:id/edit → Edit transaction

/:id/delete → Delete transaction

---
