import { useEffect, useState, useRef } from "react";
import axios from "../api/axios";
import { ChevronDown, Check } from "lucide-react";

export default function MyAds() {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  // State for Editing
  const [editingAd, setEditingAd] = useState(null); 
  
  // State for Custom Dropdown
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [updatingId, setUpdatingId] = useState(null);
  
  const dropdownRef = useRef(null);

  useEffect(() => {
    fetchMyAds();
    // Close dropdown on click outside
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdownId(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const fetchMyAds = async () => {
    try {
      const response = await axios.get("/ads/my");
      setAds(response.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load your ads.");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (adId, newStatus) => {
    setUpdatingId(adId);
    setOpenDropdownId(null);
    try {
      await axios.patch(`/ads/${adId}/status`, { status: newStatus });
      setAds((prevAds) =>
        prevAds.map((ad) =>
          ad._id === adId ? { ...ad, status: newStatus } : ad
        )
      );
    } catch (err) {
      alert("Failed to update status");
    } finally {
      setUpdatingId(null);
    }
  };

  const handleEditClick = (ad) => {
    setEditingAd(ad); 
  };

  const handleEditChange = (e) => {
    setEditingAd({ ...editingAd, [e.target.name]: e.target.value });
  };

  const submitEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/ads/${editingAd._id}`, editingAd);
      setAds((prevAds) =>
        prevAds.map((ad) => (ad._id === editingAd._id ? response.data : ad))
      );
      setEditingAd(null);
      alert("Ad updated successfully!");
    } catch (err) {
      alert("Failed to update ad details.");
    }
  };

  // --- Styles ---
  const getBadgeStyle = (status) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-700 border-green-200";
      case "sold": return "bg-blue-100 text-blue-700 border-blue-200";
      case "expired": return "bg-red-100 text-red-700 border-red-200";
      case "hidden": return "bg-gray-100 text-gray-600 border-gray-200";
      default: return "bg-gray-50 text-gray-600 border-gray-200";
    }
  };

  const getItemHoverStyle = (type) => {
    switch (type) {
      case "active": return "hover:bg-green-50 hover:text-green-700";
      case "sold": return "hover:bg-blue-50 hover:text-blue-700";
      case "expired": return "hover:bg-red-50 hover:text-red-700";
      case "hidden": return "hover:bg-gray-50 hover:text-gray-700";
      default: return "hover:bg-gray-50";
    }
  };

  const statusOptions = [
    { value: "active", label: "Active" },
    { value: "sold", label: "Sold" },
    { value: "expired", label: "Expired" },
    { value: "hidden", label: "Hidden" },
  ];

  const inputClass = "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all";
  const labelClass = "text-sm font-medium text-gray-700";

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-red-500 text-center py-10">{error}</div>;

  // --- VIEW 1: EDIT FORM ---
  if (editingAd) {
    return (
      <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100 animate-in fade-in zoom-in-95 duration-200">
        <div className="px-8 py-6 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Edit Ad Details</h1>
            <p className="text-gray-500 text-sm mt-1">Update product information.</p>
          </div>
          <button onClick={() => setEditingAd(null)} className="text-gray-400 hover:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <form onSubmit={submitEdit} className="p-8 space-y-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-2 space-y-2">
              <label className={labelClass}>Ad Title</label>
              <input name="title" value={editingAd.title} onChange={handleEditChange} className={inputClass} required />
            </div>
            <div className="space-y-2">
              <label className={labelClass}>Price ($)</label>
              <input name="price" type="number" value={editingAd.price} onChange={handleEditChange} className={inputClass} required />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className={labelClass}>Description</label>
            <textarea name="description" rows={5} value={editingAd.description} onChange={handleEditChange} className={`${inputClass} resize-none`} required />
          </div>

          <div className="pt-4 flex gap-4">
            <button type="submit" className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm">Save Changes</button>
            <button type="button" onClick={() => setEditingAd(null)} className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">Cancel</button>
          </div>
        </form>
      </div>
    );
  }

  // --- VIEW 2: AD LIST ---
  return (
    <div className="space-y-4">
      {ads.length === 0 ? (
         <div className="text-center py-12 text-gray-500">
           <p>You haven't posted any ads yet.</p>
         </div>
      ) : (
        ads.map((ad) => (
          <div key={ad._id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200 group">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              
              {/* Image Thumbnail (if exists) */}
              {ad.image && (
                <div className="w-full md:w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 border border-gray-100">
                    <img src={`http://localhost:5000/${ad.image}`} alt={ad.title} className="w-full h-full object-cover" />
                </div>
              )}

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{ad.title}</h3>
                  <button 
                    onClick={() => handleEditClick(ad)}
                    className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all"
                    title="Edit Details"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                </div>
                
                <div className="flex flex-wrap gap-2 text-sm text-gray-500 mb-2">
                  <span className="text-lg font-bold text-gray-900">
                    ${ad.price}
                  </span>
                </div>
                <p className="text-gray-500 text-sm line-clamp-2">{ad.description}</p>
              </div>

              {/* --- CUSTOM STATUS DROPDOWN --- */}
              <div className="flex flex-col items-end gap-3 min-w-[160px]">
                
                <div className="relative" ref={openDropdownId === ad._id ? dropdownRef : null}>
                  {/* Trigger */}
                  <button
                    onClick={() => setOpenDropdownId(openDropdownId === ad._id ? null : ad._id)}
                    disabled={updatingId === ad._id}
                    className={`
                      flex items-center justify-between gap-3 px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-wider transition-all shadow-sm
                      ${getBadgeStyle(ad.status)}
                      ${updatingId === ad._id ? 'opacity-70 cursor-wait' : 'hover:shadow-md cursor-pointer'}
                    `}
                  >
                    {updatingId === ad._id ? (
                      <span className="flex items-center gap-2">
                         <span className="animate-spin h-3 w-3 border-2 border-current border-t-transparent rounded-full"></span>
                         Updating
                      </span>
                    ) : (
                      <>
                        {ad.status}
                        <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${openDropdownId === ad._id ? 'rotate-180' : ''}`} />
                      </>
                    )}
                  </button>

                  {/* Menu */}
                  {openDropdownId === ad._id && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="py-1">
                        {statusOptions.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => handleStatusChange(ad._id, option.value)}
                            className={`
                              w-full text-left px-4 py-2.5 text-sm font-medium transition-colors flex items-center justify-between
                              ${getItemHoverStyle(option.value)}
                              ${ad.status === option.value ? 'bg-gray-50 text-gray-900' : 'text-gray-600'}
                            `}
                          >
                            {option.label}
                            {ad.status === option.value && (
                              <Check className="h-4 w-4" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <span className="text-[10px] text-gray-400 font-medium bg-gray-50 px-2 py-1 rounded-md">
                  Posted: {ad.createdAt ? new Date(ad.createdAt).toLocaleDateString() : 'N/A'}
                </span>
              </div>

            </div>
          </div>
        ))
      )}
    </div>
  );
}