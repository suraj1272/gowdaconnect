import express from "express";
import { protect } from "../middleware/AuthMiddleware.js";
import {
  createReferral,
  getMyReferrals
} from "../controllers/ReferralController.js";

const router = express.Router();

router.post("/", protect, createReferral);
router.get("/my", protect, getMyReferrals);

export default router;
