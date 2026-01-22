import Referral from "../models/Refferal.js";
import DashboardStats from "../models/Dashboard.js";

export const createReferral = async (req, res) => {
  try {
    const { toUser, amount } = req.body;

    const referral = await Referral.create({
      fromUser: req.user.id,
      toUser,
      amount
    });

    // Update dashboard stats
    await DashboardStats.findOneAndUpdate(
      { userId: req.user.id },
      { $inc: { referralsGiven: 1 } }
    );

    await DashboardStats.findOneAndUpdate(
      { userId: toUser },
      { $inc: { referralsReceived: 1 } }
    );

    res.status(201).json(referral);
  } catch (error) {
    res.status(500).json({ message: "Referral creation failed" });
  }
};

export const getMyReferrals = async (req, res) => {
  try {
    const referrals = await Referral.find({
      fromUser: req.user.id
    }).populate("toUser", "fullName email");

    res.json(referrals);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch referrals" });
  }
};
