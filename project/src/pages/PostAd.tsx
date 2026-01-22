import { useState, useEffect, useRef } from "react";
import axios from "../api/axios";
import ProtectedLayout from "../components/ProtectedLayout";
import MyAds from "../components/Myads.js";

export default function PostAd() {
  // Tab State
  const [activeTab, setActiveTab] = useState("create");

  // Form State
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  const handleTextChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
          alert("File is too large. Max 5MB.");
          return;
      }
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const submitAd = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("price", form.price);
    if (imageFile) formData.append("image", imageFile);

    try {
      await axios.post("/ads", formData);
      setStatus({ type: "success", message: "Ad posted successfully!" });
      setForm({ title: "", description: "", price: "" });
      removeImage();
    } catch (error) {
      setStatus({ type: "error", message: error.response?.data?.message || "Failed to post ad." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedLayout>
      <div className="max-w-2xl mx-auto py-8">
        
        {/* Toggle Buttons (Tab System) */}
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
              Post a New Ad
            </button>
            <button
              onClick={() => setActiveTab("list")}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === "list"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
              }`}
            >
              View Posted Ads
            </button>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100 min-h-[500px]">
          
          <div className="px-8 py-6 border-b border-gray-100 bg-gray-50/50">
            <h1 className="text-2xl font-bold text-gray-800">
               {activeTab === "create" ? "Post an Ad" : "My Ads"}
            </h1>
            <p className="text-gray-500 text-sm mt-1">
               {activeTab === "create" ? "Sell your items quickly." : "Manage your active listings."}
            </p>
          </div>

          <div className="p-8">
            {activeTab === "create" ? (
              // --- FORM ---
              <form onSubmit={submitAd} className="space-y-6">
                {status && (
                  <div className={`p-4 rounded-lg text-sm font-medium ${status.type === "success" ? "bg-green-50 text-green-700 border-green-200" : "bg-red-50 text-red-700 border-red-200"}`}>
                    {status.message}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-2 space-y-2">
                    <label className="text-sm font-medium text-gray-700">Ad Title</label>
                    <input name="title" required placeholder="e.g. Slightly used Macbook Pro" value={form.title} onChange={handleTextChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Price ($)</label>
                    <input name="price" required type="number" placeholder="e.g. 1200" value={form.price} onChange={handleTextChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 block">Product Image</label>
                  <input type="file" accept="image/*" onChange={handleImageChange} ref={fileInputRef} className="hidden" />
                  {!imagePreview ? (
                    <div onClick={() => fileInputRef.current?.click()} className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                       <p className="text-sm text-gray-500">Click to upload image</p>
                    </div>
                  ) : (
                    <div className="relative mt-2 w-full h-48 bg-gray-100 rounded-lg overflow-hidden group">
                      <img src={imagePreview} alt="Preview" className="w-full h-full object-contain" />
                      <button type="button" onClick={removeImage} className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">✕</button>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Description</label>
                  <textarea name="description" required rows={5} placeholder="Tell buyers about the condition..." value={form.description} onChange={handleTextChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none" />
                </div>

                <div className="pt-4">
                  <button type="submit" disabled={loading} className={`w-full py-3 px-4 rounded-lg text-white font-medium transition-colors ${loading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"}`}>
                    {loading ? "Submitting..." : "Post Ad"}
                  </button>
                </div>
              </form>
            ) : (
              // --- LIST ---
              <MyAds />
            )}
          </div>
        </div>
      </div>
    </ProtectedLayout>
  );
}