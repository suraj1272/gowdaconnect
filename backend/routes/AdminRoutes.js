import express from "express";
import { protect } from "../middleware/AuthMiddleware.js";
import { adminOnly } from "../middleware/RoleMiddleware.js";
import {
  getAllUsers,
  getAdminStats
} from "../controllers/AdminController.js";

const router = express.Router();

router.get("/users", protect, adminOnly, getAllUsers);
router.get("/stats", protect, adminOnly, getAdminStats);

export default router;
