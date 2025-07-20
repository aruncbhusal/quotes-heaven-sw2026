# Quote Heaven – Mini Fullstack Assignment

A tiny fullstack web app to demonstrate how frontend and backend connect. You’ll build the missing piece: the JavaScript logic that glues it all together using Axios.

---

## 📦 What's Inside?

-   ✅ `index.html` – Prebuilt frontend
-   ✅ `styles.css` – Basic styling
-   ✅ `main.py` – FastAPI backend that reads/writes quotes to `quotes.json`
-   ✅ `quotes.json` – Preloaded with 10 quotes
-   ❌ `script.js` – Your assignment
-   💡 `hint.js` – Only for comparison or debugging, contains the solution code

---

## 🧪 Your Task

> Write the JavaScript (in `script.js`) that connects the frontend to the FastAPI backend using **Axios**.

### ✍️ You need to:

1. Take the quote and author input from the form
2. Send a **POST** request to the backend (`/api/quotes`)
3. On clicking “Load All Quotes”:
    - Send a **GET** request to the backend
    - Display the quotes as cards (already styled)

---

## 🛠️ Tech Stack

-   **Frontend**: HTML, CSS, Axios
-   **Backend**: Python, FastAPI
-   **Storage**: `quotes.json` file (local JSON as fake DB)

---

## 🚀 How to Run

### 🔧 1. Create Virtual Environment and Install dependencies

```bash
python -m venv .venv
source ./.venv/bin/activate # Remove 'source' if on Windows
pip install fastapi[standard] uvicorn[standard]
```

### 🚀 2. Start Backend

```bash
cd backend
uvicorn main:app --reload
```

### 💻 2. Start Frontend

Using VSCode Live Server or directly click on index.html
