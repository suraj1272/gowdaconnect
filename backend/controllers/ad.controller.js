import Ad from "../models/Ad.js";
import DashboardStats from "../models/Dashboard.js"; // <--- Import this

export const createAd = async (req, res) => {
  try {
    const adData = {
      ...req.body,
      postedBy: req.user.id,
      image: req.file ? req.file.path : undefined,
    };

    // 1. Create Ad
    const ad = await Ad.create(adData);

    // 2. Increment Dashboard Stats
    await DashboardStats.findOneAndUpdate(
      { userId: req.user.id },
      { $inc: { totalAds: 1 } },
      { upsert: true, new: true }
    );

    res.status(201).json(ad);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getMyAds = async (req, res) => {
  try {
    const ads = await Ad.find({ postedBy: req.user.id }).sort({ createdAt: -1 });
    res.json(ads);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch your ads" });
  }
};

// 2. Update Ad Status
export const updateAdStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const ad = await Ad.findOne({ _id: req.params.id, postedBy: req.user.id });

    if (!ad) return res.status(404).json({ message: "Ad not found" });

    ad.status = status;
    await ad.save();
    res.json(ad);
  } catch (error) {
    res.status(500).json({ message: "Failed to update status" });
  }
};

// 3. Update Ad Details (Edit)
export const updateAdDetails = async (req, res) => {
  try {
    const ad = await Ad.findOneAndUpdate(
      { _id: req.params.id, postedBy: req.user.id },
      { $set: req.body },
      { new: true }
    );
    if (!ad) return res.status(404).json({ message: "Ad not found" });
    res.json(ad);
  } catch (error) {
    res.status(500).json({ message: "Failed to update details" });
  }
};