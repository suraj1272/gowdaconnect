import express from "express";
import multer from "multer";
import path from "path";
import { protect } from "../middleware/AuthMiddleware.js";
import { createProperty } from "../controllers/property.controller.js"; // You need to create this

const router = express.Router();

// Multer Config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    cb(null, `property-${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ 
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) cb(null, true);
    else cb(new Error("Images only!"), false);
  }
});

router.post("/", protect, upload.single("image"), createProperty);

export default router;