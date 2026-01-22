import express from "express";
import { getNewMembers } from "../controllers/user.controller.js"; // Import the function
// import { protect } from "../middleware/AuthMiddleware.js"; // Optional: Use if you want only logged-in users to see this

const router = express.Router();

// ... existing routes ...

// GET /api/users/new-members
// Note: I removed 'protect' so visitors can see this on the home page. 
// Add 'protect' back if you want it private.
router.get("/new-members", getNewMembers); 

export default router;