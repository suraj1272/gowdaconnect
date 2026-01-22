import mongoose from 'mongoose';

const AdSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    image: { type: String },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    // NEW: Status field
    status: {
      type: String,
      enum: ["active", "sold", "expired", "hidden"],
      default: "active"
    }
  },
  { timestamps: true }
);

export default mongoose.model('Ad', AdSchema);