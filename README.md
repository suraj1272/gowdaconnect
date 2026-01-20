# GowdaConnect - Marathi Community Platform

A modern web application connecting Marathi-speaking people with authentication, membership system, and member directory.

## 🚀 Quick Start

### Windows Users
```bash
cd c:\Users\buddo\Downloads\gowdaConnect
setup.bat
```

### Manual Setup
**Terminal 1 - Backend Server:**
```bash
cd backend
npm install
npm run dev
```

**Terminal 2 - Frontend App:**
```bash
cd project
npm install
npm run dev
```

**Terminal 3 - MongoDB (if local):**
```bash
mongod
```

Then open: `http://localhost:5173`

---

## 📋 Technology Stack

### Backend
- **Framework:** Express.js
- **Database:** MongoDB
- **Authentication:** JWT + bcryptjs
- **Runtime:** Node.js

### Frontend
- **Framework:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **Icons:** Lucide React
- **Build:** Vite

---

## 📁 Project Structure

```
gowdaConnect/
├── backend/
│   ├── models/
│   │   └── User.js          (MongoDB schema)
│   ├── routes/
│   │   └── auth.js          (API endpoints)
│   ├── .env                 (Configuration)
│   ├── server.js            (Main server file)
│   └── package.json
│
├── project/
│   ├── src/
│   │   ├── context/
│   │   │   └── AuthContext.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Login.tsx
│   │   │   ├── Register.tsx
│   │   │   └── MemberDirectory.tsx
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   └── ProtectedRoute.tsx
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── package.json
│
├── SETUP_GUIDE.md           (Detailed setup)
└── README.md               (This file)
```

---

## 🔐 Authentication Flow

1. **Register** → User creates account with email/password/membership plan
2. **Login** → User authenticates with email/password
3. **JWT Token** → Server returns JWT token valid for 7 days
4. **Protected Routes** → Member Directory requires login
5. **Logout** → Clears token from localStorage

---

## 🗄️ Database

**MongoDB Collections:**
- `users` - Stores user accounts with hashed passwords

**User Document:**
```javascript
{
  _id: ObjectId,
  fullName: "John Doe",
  email: "john@example.com",
  password: "hashed_password",
  membershipType: "free" | "basic" | "pioneer",
  city: "",
  profileComplete: false,
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

---

## 🔧 API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/auth/register` | ❌ | Create new user |
| POST | `/api/auth/login` | ❌ | Login user |
| GET | `/api/auth/me` | ✅ | Get current user |
| GET | `/api/health` | ❌ | Server health check |

---

## 📊 Membership Plans

1. **FREE** - Rs. 0 / Year
   - Browse directory
   - Limited features

2. **BASIC** - Rs. 1000 / Year
   - Post job listings
   - Post property listings
   - Basic profile

3. **PIONEER** - Rs. 12000 / Year
   - All BASIC features
   - Business profile
   - Customer reviews
   - Telegram group access
   - 52 e-meetups/year

---

## 🎯 Features

✅ User Registration & Login
✅ JWT Authentication
✅ Membership Plans
✅ Protected Routes
✅ MongoDB Integration
✅ Password Hashing
✅ Responsive Design
✅ Token Persistence

---

## 🐛 Troubleshooting

**Backend won't start:**
- Check MongoDB is running
- Verify port 5000 is free
- Check `.env` file configuration

**Frontend won't start:**
- Check port 5173 is free
- Run `npm install` again
- Clear node_modules and reinstall

**Login fails:**
- Check backend is running on port 5000
- Verify email/password are correct
- Check browser DevTools > Network tab

**MongoDB connection error:**
- Local: Run `mongod` first
- Atlas: Check internet connection and URI

---

## 📝 Environment Variables

**.env (Backend)**
```
MONGODB_URI=mongodb://localhost:27017/gowdaconnect
JWT_SECRET=your_secret_key
PORT=5000
NODE_ENV=development
```

---

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd project
npm run build
# Deploy the dist/ folder
```

### Backend (Railway/Render/Heroku)
```bash
cd backend
npm install
# Set environment variables in hosting platform
# Run: npm start
```

---

## 📚 Additional Resources

- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Express Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [JWT.io](https://jwt.io/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 📧 Support

For issues or questions:
1. Check SETUP_GUIDE.md
2. Review error messages in console
3. Check network tab in DevTools
4. Verify all services are running

---

**Version:** 1.0.0  
**Last Updated:** January 20, 2026
