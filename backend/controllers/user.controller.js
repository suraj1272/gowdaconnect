import User from "../models/User.js";

// Get members who joined in the last 10 days
// In controllers/user.controller.js

export const getNewMembers = async (req, res) => {
  try {
    const tenDaysAgo = new Date();
    tenDaysAgo.setDate(tenDaysAgo.getDate() - 10);

    const newMembers = await User.find({
      createdAt: { $gte: tenDaysAgo }
    })
    // UPDATED SELECT TO MATCH YOUR SCHEMA
    .select("fullName businessName city profileImage createdAt") 
    .sort({ createdAt: -1 })
    .limit(8);

    res.json(newMembers);
  } catch (error) {
    // ...
  }
};