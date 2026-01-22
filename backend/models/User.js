import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    membershipType: {
      type: String,
      enum: ["free", "premium", "business", "admin"],
      default: "free"
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user"
    },
    city: String,
    businessName: String,
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
