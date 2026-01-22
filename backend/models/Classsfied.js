import mongoose from "mongoose";

const classifiedSchema = new mongoose.Schema(
  {
    title: String,
    price: Number,
    category: String,
    city: String,
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Classified", classifiedSchema);
