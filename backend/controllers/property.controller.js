import Property from "../models/Property.js";
import DashboardStats from "../models/Dashboard.js"; // <--- Import this

export const createProperty = async (req, res) => {
  try {
    const { title, type, category, location, price, description } = req.body;

    // 1. Create Property
    const newProperty = await Property.create({
      title,
      type,
      category,
      location,
      price,
      description,
      image: req.file ? req.file.path : null,
      postedBy: req.user.id,
    });

    // 2. Increment Dashboard Stats
    await DashboardStats.findOneAndUpdate(
      { userId: req.user.id },
      { $inc: { totalProperties: 1 } },
      { upsert: true, new: true }
    );

    res.status(201).json(newProperty);
  } catch (error) {
    res.status(500).json({ message: error.message || "Server Error" });
  }
};