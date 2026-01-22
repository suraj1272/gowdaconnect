import express from "express";
import { protect } from "../middleware/AuthMiddleware.js";
import {
  getDashboardStats,
  getReferralChartData
} from "../controllers/DashboardController.js";

const router = express.Router();

router.get("/stats", protect, getDashboardStats);
router.get("/chart/referrals", protect, getReferralChartData);

export default router;
