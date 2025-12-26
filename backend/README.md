# Backend – ApniSec Security Issue Tracker

This folder contains the backend service for the ApniSec Security Issue Tracker.

The backend is built using Next.js API Routes and strictly follows a class-based Object-Oriented Programming (OOP) architecture.

---

## 🧠 Architecture

backend/
├── app/api/
├── core/
│   ├── auth.ts
│   ├── repo.ts
│   ├── guard.ts
│   └── err.ts
├── prisma/
│   └── schema.prisma
└── README.md

---

## 🔐 Authentication

- Custom JWT-based authentication
- Password hashing
- Token generation
- Protected routes

---

## 🗄 Database

- PostgreSQL (Supabase)
- Prisma ORM

Models:
- User
- Issue
- Token

---

## ⚙️ Environment Variables

Create a .env file inside backend/

DATABASE_URL=your_postgres_connection_string  
JWT_SECRET=your_jwt_secret  

---

## ▶️ Run Backend Locally

cd backend  
npm install  
npx prisma generate  
npx prisma migrate dev  
npm run dev  

Backend runs on http://localhost:3000

---

## 🧪 API Test Example

curl -X POST http://localhost:3000/api/auth/register \
-H "Content-Type: application/json" \
-d '{"email":"test@test.com","pass":"123456"}'

---

## 📌 Notes

- Entire backend logic is class-based
- Clean separation of concerns
- Production-ready structure
