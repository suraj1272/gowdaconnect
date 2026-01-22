import express from "express";
import { protect } from "../middleware/AuthMiddleware.js";
import { 
  createJob, 
  getMyJobs, 
  updateJobStatus, 
  updateJobDetails // Import new function
} from "../controllers/JobController.js"; 

const router = express.Router();

router.post("/", protect, createJob);
router.get("/my", protect, getMyJobs);
router.patch("/:id/status", protect, updateJobStatus);

// NEW ROUTE for editing details
router.put("/:id", protect, updateJobDetails); 

export default router;