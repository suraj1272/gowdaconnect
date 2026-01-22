import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    company: {
      type: String,
      required: true,
      trim: true
    },
    location: {
      type: String, // Renamed from 'city' to match frontend
      required: true,
      trim: true
    },
    salary: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: ["Full-time", "Part-time", "Contract", "Freelance", "Internship"],
      required: true
    },
    mode: {
      type: String,
      enum: ["On-site", "Remote", "Hybrid"],
      required: true
    },
    description: {
      type: String,
      required: true
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    status: {
      type: String,
enum: ["active", "stopped", "closed", "not_hiring"],
      default: "active"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Job", jobSchema);