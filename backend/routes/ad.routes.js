import express from "express";
import multer from "multer";
import path from "path";
import { protect } from "../middleware/AuthMiddleware.js";
import { 
  createAd, 
  getMyAds, 
  updateAdStatus, 
  updateAdDetails 
} from "../controllers/ad.controller.js";

const router = express.Router();

// ... existing multer config ...
// (Keep your existing storage and upload configuration here)
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => cb(null, `ad-${Date.now()}${path.extname(file.originalname)}`)
});
const upload = multer({ storage });


router.post("/", protect, upload.single("image"), createAd);

// NEW ROUTES
router.get("/my", protect, getMyAds);
router.patch("/:id/status", protect, updateAdStatus);
router.put("/:id", protect, updateAdDetails);

export default router;