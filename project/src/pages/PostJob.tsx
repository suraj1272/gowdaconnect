import { useState } from "react";
import axios from "../api/axios";
import ProtectedLayout from "../components/ProtectedLayout";
import MyJobs from "../components/MyJobs"; // Import the list component

export default function PostJob() {
  // State to toggle between 'create' form and 'list' view
  const [activeTab, setActiveTab] = useState("create");

  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    type: "Full-time",
    mode: "On-site",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitJob = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await axios.post("/jobs", form);
      setStatus({ type: "success", message: "Job posted successfully!" });

      // Reset form
      setForm({
        title: "",
        company: "",
        location: "",
        salary: "",
        type: "Full-time",
        mode: "On-site",
        description: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.response?.data?.message || "Failed to post job. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedLayout>
      <div className="max-w-2xl mx-auto py-8">
        
        {/* --- Toggle Buttons (Tab System) --- */}
        <div className="flex justify-center mb-6">
          <div className="bg-white p-1 rounded-xl shadow-sm border border-gray-100 inline-flex">
            <button
              onClick={() => setActiveTab("create")}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === "create"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
              }`}
            >
              Post a New Job
            </button>
            <button
              onClick={() => setActiveTab("list")}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === "list"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
              }`}
            >
              View Posted Jobs
            </button>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100 min-h-[500px]">
          
          {/* Header */}
          <div className="px-8 py-6 border-b border-gray-100 bg-gray-50/50">
            <h1 className="text-2xl font-bold text-gray-800">
              {activeTab === "create" ? "Post a New Job" : "My Job Listings"}
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              {activeTab === "create" 
                ? "Fill in the details below to attract top talent." 
                : "Manage and track the jobs you have posted."}
            </p>
          </div>

          <div className="p-8">
            {/* Conditional Rendering based on Tab */}
            {activeTab === "create" ? (
              // --- FORM ---
              <form onSubmit={submitJob} className="space-y-6">
                
                {status && (
                  <div
                    className={`p-4 rounded-lg text-sm font-medium ${
                      status.type === "success"
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-red-50 text-red-700 border border-red-200"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Job Title</label>
                    <input
                      name="title"
                      required
                      placeholder="e.g. Senior React Developer"
                      value={form.title}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Company Name</label>
                    <input
                      name="company"
                      required
                      placeholder="e.g. Acme Corp"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Job Type</label>
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                    >
                      <option>Full-time</option>
                      <option>Part-time</option>
                      <option>Contract</option>
                      <option>Freelance</option>
                      <option>Internship</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Work Mode</label>
                    <select
                      name="mode"
                      value={form.mode}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                    >
                      <option>On-site</option>
                      <option>Remote</option>
                      <option>Hybrid</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Location</label>
                    <input
                      name="location"
                      required
                      placeholder="e.g. San Francisco, CA"
                      value={form.location}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Salary Range</label>
                    <input
                      name="salary"
                      placeholder="e.g. $120k - $150k"
                      value={form.salary}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Job Description</label>
                  <textarea
                    name="description"
                    required
                    rows={6}
                    placeholder="Describe the role, responsibilities, and requirements..."
                    value={form.description}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-3 px-4 rounded-lg text-white font-medium transition-colors flex justify-center items-center gap-2
                      ${loading 
                        ? "bg-blue-400 cursor-not-allowed" 
                        : "bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-sm hover:shadow-md"
                      }`}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Posting...</span>
                      </>
                    ) : (
                      "Post Job Now"
                    )}
                  </button>
                </div>
              </form>
            ) : (
              // --- MY JOBS LIST ---
              <MyJobs />
            )}
          </div>
        </div>
      </div>
    </ProtectedLayout>
  );
}