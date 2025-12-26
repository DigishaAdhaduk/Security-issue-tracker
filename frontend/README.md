# Frontend – ApniSec Security Issue Tracker

This folder contains the frontend application for the ApniSec Security Issue Tracker.

The UI is intentionally simple, readable, and focused on functionality.

---

## 🖥 Pages

- Home (Landing page)
- Register
- Dashboard
  - Create issues
  - View issues
  - Filter and search issues

---

## 🎨 UI Design

- Plain CSS
- Responsive layout
- Clean structure
- No heavy UI frameworks

---

## ⚙️ Environment Variables

Create a .env.local file inside frontend/

NEXT_PUBLIC_API=http://localhost:3000

(Update this URL after backend deployment)

---

## ▶️ Run Frontend Locally

cd frontend  
npm install  
npm run dev  

Frontend runs on http://localhost:3001

---

## 🔗 Backend Integration

- REST API communication using fetch
- JWT token handled on client side
- Dashboard accessible after registration

---

## 📌 Notes

- Login page is optional
- Registration directly grants access
- Easy to extend and improve
