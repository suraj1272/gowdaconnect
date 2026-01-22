import { useState, useRef, useEffect } from "react";
import axios from "../api/axios";
import ProtectedLayout from "../components/ProtectedLayout";

export default function PostProperty() {
  const [form, setForm] = useState({
    title: "",
    type: "Rent", // Rent or Sale
    category: "Apartment", // New field: Apartment, House, etc.
    location: "",
    price: "",
    description: "",
  });

  // Image State
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  // Cleanup preview to avoid memory leaks
  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const submitProperty = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("type", form.type);
    formData.append("category", form.category);
    formData.append("location", form.location);
    formData.append("price", form.price);
    formData.append("description", form.description);
    
    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      await axios.post("/properties", formData); // Axios handles multipart/form-data automatically
      setStatus({ type: "success", message: "Property posted successfully!" });
      
      // Reset Form
      setForm({
        title: "",
        type: "Rent",
        category: "Apartment",
        location: "",
        price: "",
        description: "",
      });
      removeImage();
    } catch (error) {
      setStatus({
        type: "error",
        message: error.response?.data?.message || "Failed to post property",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedLayout>
      <div className="max-w-3xl mx-auto py-8">
        <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
          
          <div className="px-8 py-6 border-b border-gray-100 bg-gray-50/50">
            <h1 className="text-2xl font-bold text-gray-800">Post a Property</h1>
            <p className="text-gray-500 text-sm mt-1">
              List your apartment, house, or land for Rent or Sale.
            </p>
          </div>

          <form onSubmit={submitProperty} className="p-8 space-y-6">
            
            {status && (
              <div className={`p-4 rounded-lg text-sm font-medium ${status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {status.message}
              </div>
            )}

            {/* Title */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Property Title</label>
              <input
                name="title"
                required
                placeholder="e.g. Modern 2BHK in Downtown"
                value={form.title}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Grid for Selects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Listing Type</label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                >
                  <option value="Rent">For Rent</option>
                  <option value="Sale">For Sale</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Property Category</label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                >
                  <option value="Apartment">Apartment</option>
                  <option value="House">House / Villa</option>
                  <option value="Commercial">Commercial / Office</option>
                  <option value="Land">Plot / Land</option>
                </select>
              </div>
            </div>

            {/* Grid for Price & Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Price {form.type === 'Rent' ? '(per month)' : ''}</label>
                <input
                  name="price"
                  type="number"
                  required
                  placeholder={form.type === 'Rent' ? "e.g. 15000" : "e.g. 5000000"}
                  value={form.price}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Location</label>
                <input
                  name="location"
                  required
                  placeholder="e.g. Indiranagar, Bangalore"
                  value={form.location}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            {/* Image Upload */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Property Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={fileInputRef}
                className="hidden"
              />
              
              {!imagePreview ? (
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <p className="text-gray-500">Click to upload property photo</p>
                </div>
              ) : (
                <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden group">
                  <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full shadow-md hover:bg-red-700"
                  >
                    ✕
                  </button>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                rows={4}
                required
                placeholder="Describe features, amenities, bedrooms, etc."
                value={form.description}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 px-4 rounded-lg text-white font-bold transition-all ${
                loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg"
              }`}
            >
              {loading ? "Posting..." : "Submit Property"}
            </button>

          </form>
        </div>
      </div>
    </ProtectedLayout>
  );
}