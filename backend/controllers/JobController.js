import Job from "../models/Job.js";
import DashboardStats from "../models/Dashboard.js"; // <--- Import this

export const createJob = async (req, res) => {
  try {
    // 1. Create the Job
    const job = await Job.create({
      ...req.body,
      postedBy: req.user.id,
    });

    // 2. Increment Dashboard Stats
    // { upsert: true } creates the dashboard doc if it doesn't exist yet
    await DashboardStats.findOneAndUpdate(
      { userId: req.user.id },
      { $inc: { totalJobs: 1 } }, 
      { upsert: true, new: true } 
    );

    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: "Failed to post job" });
  }
};
export const getMyJobs = async (req, res) => {
  try {
    // Find jobs where 'postedBy' matches the logged-in user's ID
    const jobs = await Job.find({ postedBy: req.user.id }).sort({ createdAt: -1 });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch your jobs" });
  }
};

export const updateJobStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const jobId = req.params.id;

    // Find job that belongs to the logged-in user
    const job = await Job.findOne({ _id: jobId, postedBy: req.user.id });

    if (!job) {
      return res.status(404).json({ message: "Job not found or unauthorized" });
    }

    job.status = status;
    await job.save();

    res.json(job);
  } catch (error) {
    res.status(500).json({ message: "Failed to update status" });
  }
};

export const updateJobDetails = async (req, res) => {
  try {
    const jobId = req.params.id;
    
    // Find job by ID and ensure it belongs to the logged-in user
    const job = await Job.findOne({ _id: jobId, postedBy: req.user.id });

    if (!job) {
      return res.status(404).json({ message: "Job not found or unauthorized" });
    }

    // Update fields
    const updatedJob = await Job.findByIdAndUpdate(
      jobId,
      { $set: req.body }, // Updates only the fields sent in the request
      { new: true } // Return the updated document
    );

    res.json(updatedJob);
  } catch (error) {
    res.status(500).json({ message: "Failed to update job details" });
  }
};