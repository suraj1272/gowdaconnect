import mongoose from "mongoose";

const DashboardSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    totalJobs: { type: Number, default: 0 },
    totalAds: { type: Number, default: 0 },
    totalProperties: { type: Number, default: 0 },
    totalReferrals: { type: Number, default: 0 },
    
    // You might have earnings or other fields here too
  },
  { timestamps: true }
);

export default mongoose.model("DashboardStats", DashboardSchema);