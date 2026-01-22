import { useEffect, useState, useRef } from "react";
import axios from "../api/axios";
import { ChevronDown, Check, MoreHorizontal } from "lucide-react";

export default function MyJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  // State for Editing
  const [editingJob, setEditingJob] = useState(null); 
  
  // State for Custom Dropdown (tracking which job's menu is open)
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [updatingId, setUpdatingId] = useState(null);
  
  // Ref to close dropdown when clicking outside
  const dropdownRef = useRef(null);

  useEffect(() => {
    fetchMyJobs();
    
    // Click outside listener
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdownId(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const fetchMyJobs = async () => {
    try {
      const response = await axios.get("/jobs/my");
      setJobs(response.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load your jobs.");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (jobId, newStatus) => {
    setUpdatingId(jobId);
    setOpenDropdownId(null); // Close menu immediately
    try {
      await axios.patch(`/jobs/${jobId}/status`, { status: newStatus });
      setJobs((prevJobs) =>
        prevJobs.map((job) =>
          job._id === jobId ? { ...job, status: newStatus } : job
        )
      );
    } catch (err) {
      alert("Failed to update status");
    } finally {
      setUpdatingId(null);
    }
  };

  const handleEditClick = (job) => {
    setEditingJob(job); 
  };

  const handleEditChange = (e) => {
    setEditingJob({ ...editingJob, [e.target.name]: e.target.value });
  };

  const submitEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/jobs/${editingJob._id}`, editingJob);
      setJobs((prevJobs) =>
        prevJobs.map((job) => (job._id === editingJob._id ? response.data : job))
      );
      setEditingJob(null);
      alert("Job updated successfully!");
    } catch (err) {
      alert("Failed to update job details.");
    }
  };

  // --- Styles ---
  
  // Badge Color for the CLOSED state (what you see on the card)
  const getBadgeStyle = (status) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-700 border-green-200";
      case "stopped": return "bg-orange-100 text-orange-700 border-orange-200";
      case "closed": return "bg-red-100 text-red-700 border-red-200";
      case "not_hiring": return "bg-gray-100 text-gray-600 border-gray-200";
      default: return "bg-gray-50 text-gray-600 border-gray-200";
    }
  };

  // Hover Color for the OPEN menu items
  const getItemHoverStyle = (type) => {
    switch (type) {
      case "active": return "hover:bg-green-50 hover:text-green-700";
      case "stopped": return "hover:bg-orange-50 hover:text-orange-700";
      case "closed": return "hover:bg-red-50 hover:text-red-700";
      case "not_hiring": return "hover:bg-gray-50 hover:text-gray-700";
      default: return "hover:bg-gray-50";
    }
  };

  const statusOptions = [
    { value: "active", label: "Active" },
    { value: "stopped", label: "Stopped" },
    { value: "closed", label: "Closed" },
    { value: "not_hiring", label: "Not Hiring" },
  ];

  const inputClass = "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all";
  const labelClass = "text-sm font-medium text-gray-700";

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-red-500 text-center py-10">{error}</div>;

  // --- VIEW 1: EDIT FORM ---
  if (editingJob) {
    return (
      <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100 animate-in fade-in zoom-in-95 duration-200">
        <div className="px-8 py-6 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Edit Job Details</h1>
            <p className="text-gray-500 text-sm mt-1">Update the information below.</p>
          </div>
          <button onClick={() => setEditingJob(null)} className="text-gray-400 hover:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <form onSubmit={submitEdit} className="p-8 space-y-6">
           {/* ... (Same fields as before) ... */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className={labelClass}>Job Title</label>
              <input name="title" value={editingJob.title} onChange={handleEditChange} className={inputClass} required />
            </div>
            <div className="space-y-2">
              <label className={labelClass}>Company Name</label>
              <input name="company" value={editingJob.company} onChange={handleEditChange} className={inputClass} required />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className={labelClass}>Job Type</label>
              <div className="relative">
                <select name="type" value={editingJob.type} onChange={handleEditChange} className={`${inputClass} bg-white appearance-none`}>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                  <option>Freelance</option>
                  <option>Internship</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
              </div>
            </div>
            <div className="space-y-2">
              <label className={labelClass}>Work Mode</label>
              <div className="relative">
                <select name="mode" value={editingJob.mode} onChange={handleEditChange} className={`${inputClass} bg-white appearance-none`}>
                  <option>On-site</option>
                  <option>Remote</option>
                  <option>Hybrid</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className={labelClass}>Location</label>
              <input name="location" value={editingJob.location} onChange={handleEditChange} className={inputClass} required />
            </div>
            <div className="space-y-2">
              <label className={labelClass}>Salary Range</label>
              <input name="salary" value={editingJob.salary} onChange={handleEditChange} className={inputClass} />
            </div>
          </div>
          <div className="space-y-2">
            <label className={labelClass}>Job Description</label>
            <textarea name="description" rows={6} value={editingJob.description} onChange={handleEditChange} className={`${inputClass} resize-none`} required />
          </div>
          <div className="pt-4 flex gap-4">
            <button type="submit" className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm">Save Changes</button>
            <button type="button" onClick={() => setEditingJob(null)} className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">Cancel</button>
          </div>
        </form>
      </div>
    );
  }

  // --- VIEW 2: JOB LIST ---
  return (
    <div className="space-y-4">
      {jobs.length === 0 ? (
         <div className="text-center py-12 text-gray-500">
           <p>You haven't posted any jobs yet.</p>
         </div>
      ) : (
        jobs.map((job) => (
          <div key={job._id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200 group">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                  <button 
                    onClick={() => handleEditClick(job)}
                    className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all"
                    title="Edit Details"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                </div>
                <p className="text-gray-600 font-medium text-sm mb-3">{job.company}</p>
                
                <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                  <span className="bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100 flex items-center gap-1.5">
                    📍 {job.location}
                  </span>
                  <span className="bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100 flex items-center gap-1.5">
                    💼 {job.type}
                  </span>
                  <span className="bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100 flex items-center gap-1.5">
                    💰 {job.salary}
                  </span>
                </div>
              </div>

              {/* --- CUSTOM STATUS DROPDOWN --- */}
              <div className="flex flex-col items-end gap-3 min-w-[160px]">
                
                <div className="relative" ref={openDropdownId === job._id ? dropdownRef : null}>
                  {/* Trigger Button */}
                  <button
                    onClick={() => setOpenDropdownId(openDropdownId === job._id ? null : job._id)}
                    disabled={updatingId === job._id}
                    className={`
                      flex items-center justify-between gap-3 px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-wider transition-all shadow-sm
                      ${getBadgeStyle(job.status)}
                      ${updatingId === job._id ? 'opacity-70 cursor-wait' : 'hover:shadow-md cursor-pointer'}
                    `}
                  >
                    {updatingId === job._id ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin h-3 w-3 border-2 border-current border-t-transparent rounded-full"></span>
                        Updating
                      </span>
                    ) : (
                      <>
                        {job.status.replace('_', ' ')}
                        <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${openDropdownId === job._id ? 'rotate-180' : ''}`} />
                      </>
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {openDropdownId === job._id && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="py-1">
                        {statusOptions.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => handleStatusChange(job._id, option.value)}
                            className={`
                              w-full text-left px-4 py-2.5 text-sm font-medium transition-colors flex items-center justify-between
                              ${getItemHoverStyle(option.value)}
                              ${job.status === option.value ? 'bg-gray-50 text-gray-900' : 'text-gray-600'}
                            `}
                          >
                            {option.label}
                            {job.status === option.value && (
                              <Check className="h-4 w-4" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <span className="text-[10px] text-gray-400 font-medium bg-gray-50 px-2 py-1 rounded-md">
                  Posted: {job.createdAt ? new Date(job.createdAt).toLocaleDateString() : 'N/A'}
                </span>
              </div>

            </div>
          </div>
        ))
      )}
    </div>
  );
}