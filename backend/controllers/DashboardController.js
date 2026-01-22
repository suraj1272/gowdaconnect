import DashboardStats from "../models/Dashboard.js";
import Referral from "../models/Refferal.js";

export const getDashboardStats = async (req, res) => {
  try {
    const userId = req.user.id;

    let stats = await DashboardStats.findOne({ userId });

    // Create stats doc if first time
    if (!stats) {
      stats = await DashboardStats.create({ userId });
    }

    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: "Failed to load dashboard" });
  }
};

export const getReferralChartData = async (req, res) => {
  try {
    const userId = req.user.id;

    const referrals = await Referral.find({ fromUser: userId });

    // Simple monthly grouping (can be optimized later)
    const monthlyData = {};

    referrals.forEach((ref) => {
      const month = ref.createdAt.toLocaleString("default", {
        month: "short"
      });
      monthlyData[month] = (monthlyData[month] || 0) + 1;
    });

    res.json(monthlyData);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch chart data" });
  }
};
