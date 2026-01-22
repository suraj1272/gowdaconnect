import User from "../models/User.js";
import Referral from "../models/Refferal.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users" });
  }
};

export const getAdminStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalReferrals = await Referral.countDocuments();

    res.json({
      totalUsers,
      totalReferrals
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to load admin stats" });
  }
};
