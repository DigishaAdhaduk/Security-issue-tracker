# Backend – ApniSec Security Issue Tracker

This folder contains the backend service for the ApniSec Security Issue Tracker.

The backend is built using Next.js API Routes and strictly follows a class-based Object-Oriented Programming (OOP) architecture.

---

## 🔐 Authentication

- Custom JWT-based authentication
- Password hashing
- Token generation
- Protected routes

---

# 🧠 Backend Architecture

backend/
├── 📂 app/
│   └── 📂 api/
│       ├── 🔐 auth/
│       │   └── route.ts        🠖 Auth APIs (login, register)
│       ├── 👤 users/
│       │   └── route.ts        🠖 User-related APIs
│       └── ❤️ health/
│           └── route.ts        🠖 Health check endpoint
│
├── 📂 core/
│   ├── 🔑 auth.ts              🠖 JWT, password, auth helpers
│   ├── 🗄️ repo.ts              🠖 Database abstraction layer
│   ├── 🛡️ guard.ts             🠖 Route protection & middleware
│   └── ⚠️ err.ts               🠖 Centralized error handling
│
├── 📂 prisma/
│   └── 🧬 schema.prisma        🠖 Database schema & models
│
├── 📦 package.json             🠖 Dependencies & scripts
├── ⚙️ tsconfig.json            🠖 TypeScript configuration
└── 📘 README.md                🠖 Project documentation

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
