import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs"; 

// Routes
import authRoutes from "./routes/AuthRoutes.js";
// import contactRoutes from "./routes/contact.js";
import dashboardRoutes from "./routes/DashboardRoutes.js";
import referralRoutes from "./routes/RefferalRoutes.js";
import adminRoutes from "./routes/AdminRoutes.js";
import jobRoutes from './routes/job.routes.js';
import adRoutes from './routes/ad.routes.js';
import propertyRoutes from './routes/property.routes.js';
import userRoutes from './routes/user.routes.js'; // <--- 1. Import Completed

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve Static Uploads
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
    console.log(`Created directory: ${uploadDir}`);
}
app.use('/uploads', express.static('uploads')); 

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/auth", authRoutes);
// app.use("/api/contact", contactRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/referrals", referralRoutes);
app.use("/api/admin", adminRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/ads', adRoutes);
app.use('/api/properties', propertyRoutes);
app.use('/api/users', userRoutes); // <--- 2. Route Added Here

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "Server running", timestamp: new Date() });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message || "Internal server error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});