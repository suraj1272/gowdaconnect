import { Link } from "react-router-dom";
import {
  Printer,
  Mail,
  Share2,
  Facebook,
  Linkedin,
} from "lucide-react";

const thumbnails = [
  "https://images.unsplash.com/photo-1581579185169-6c70f047d2a2",
  "https://images.unsplash.com/photo-1615484477201-9f4953340fab",
  "https://images.unsplash.com/photo-1598515213692-4b8a2c0c2a8b",
  "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
  "https://images.unsplash.com/photo-1598514982205-860c5c587c5f",
];

const PhotoAlbumDetail = () => {
  return (
    <div className="bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-3">

          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-orange-500">Home</Link> /{" "}
            <Link to="/photo-albums" className="hover:text-orange-500">Photo Albums</Link> /{" "}
            <span className="text-gray-700">
              Jiza Enterprises – Premium Cleaning & Hygiene Products
            </span>
          </div>

          {/* Post Info */}
          <div className="flex justify-between items-center bg-white px-4 py-3 rounded shadow-sm mb-6">
            <span className="text-sm text-gray-600">
              Posted 09/12/2025 by{" "}
              <strong>Ajit Rupnawar</strong>
            </span>

            <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-orange-500">
              <Printer size={16} /> Print
            </button>
          </div>

          {/* TITLE */}
          <h1 className="text-2xl font-semibold mb-4">
            Jiza Enterprises – Premium Cleaning & Hygiene Products
          </h1>

          {/* IMAGE GALLERY */}
          <div className="bg-black rounded overflow-hidden mb-6">
            <div className="flex justify-center p-6">
              <img
                src={thumbnails[0]}
                alt="Main"
                className="max-h-[420px] object-contain"
              />
            </div>

            {/* Thumbnails */}
            <div className="bg-black/90 px-4 py-2 flex gap-3 overflow-x-auto">
              {thumbnails.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Thumb ${idx + 1}`}
                  className="h-16 w-16 object-cover rounded cursor-pointer border border-gray-700 hover:border-orange-500"
                />
              ))}
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="bg-white p-6 rounded shadow-sm text-sm text-gray-700 space-y-4">
            <p>
              Jiza Enterprises manufactures & supplies premium cleaning and hygiene
              solutions including Liquid Detergent, Toilet Cleaner, Floor Cleaner,
              Dishwash Gel, Handwash, Bhimseni Camphor, Green Phenyl & more.
            </p>

            <p>
              Lab-tested quality at factory prices. Bulk supply for apartments,
              offices, hotels, restaurants, schools, clinics, hospitals & industries.
              Dealers & distributors welcome.
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "Cleaning",
                "Detergent",
                "Floor Cleaner",
                "Toilet Cleaner",
                "Dishwash",
                "Handwash",
                "Camphor",
                "Phenyl",
              ].map(tag => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">

          {/* MEMBER LOGIN */}
          <div className="bg-white p-6 rounded shadow-sm">
            <h3 className="font-semibold mb-4">Member Login</h3>

            <label className="text-sm">
              <span className="text-red-500">*</span> Email Address
            </label>
            <input
              className="w-full border p-2 rounded text-sm mb-3"
              placeholder="name@yoursite.com"
            />

            <label className="text-sm">
              <span className="text-red-500">*</span> Password
            </label>
            <input
              type="password"
              className="w-full border p-2 rounded text-sm mb-2"
              placeholder="Enter Password"
            />

            <p className="text-xs text-gray-500 mb-3">
              Forgot Password? Click to Reset Password
            </p>

            <button className="w-full bg-orange-500 text-white py-2 rounded text-sm hover:bg-orange-600">
              Login Now
            </button>
          </div>

          {/* CONTACT MEMBER */}
          <button className="w-full flex items-center justify-center gap-2 bg-orange-500 text-white py-3 rounded text-sm hover:bg-orange-600">
            <Mail size={16} /> Contact Member
          </button>

          {/* SHARE */}
          <div className="bg-white p-6 rounded shadow-sm">
            <h3 className="font-semibold mb-3 flex items-center gap-1">
              <Share2 size={16} /> Share This Page
            </h3>

            <div className="flex gap-2">
              <button className="flex-1 bg-blue-600 text-white py-2 rounded text-xs flex items-center justify-center gap-1">
                <Facebook size={14} /> Share
              </button>
              <button className="flex-1 bg-black text-white py-2 rounded text-xs">
                X Post
              </button>
              <button className="flex-1 bg-blue-500 text-white py-2 rounded text-xs flex items-center justify-center gap-1">
                <Linkedin size={14} /> Share
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PhotoAlbumDetail;
