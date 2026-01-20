import { Link } from "react-router-dom";
import { MapPin, Printer, Mail } from "lucide-react";

const ProductDetail = () => {
  return (
    <div className="bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* LEFT SECTION */}
        <div className="lg:col-span-3">

          {/* BREADCRUMB */}
          <div className="text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-orange-500">Home</Link> /{" "}
            <Link to="/products" className="hover:text-orange-500">Products</Link> /{" "}
            <span className="text-gray-700">Bhimsemi Camphor</span>
          </div>

          {/* POST INFO */}
          <div className="flex justify-between items-center bg-white px-4 py-3 rounded shadow-sm mb-6">
            <span className="text-sm text-gray-600">
              Posted 09/12/2025 by <strong>Ajit Rupnawar</strong>
            </span>

            <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-orange-500">
              <Printer size={16} /> Print
            </button>
          </div>

          {/* TITLE */}
          <h1 className="text-2xl font-semibold mb-2">Bhimsemi Camphor</h1>

          {/* COMPANY */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <MapPin size={14} />
            Stychem Industries Pvt Ltd
          </div>

          {/* STOCK BAR */}
          <div className="bg-orange-500 text-white px-4 py-3 rounded-t flex justify-between items-center">
            <span className="text-sm"> </span>
            <span className="bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded">
              In Stock
            </span>
          </div>

          {/* IMAGE VIEWER */}
          <div className="bg-black rounded-b overflow-hidden">
            <div className="flex justify-center p-6">
              <img
                src="https://images.unsplash.com/photo-1585386959984-a41552262d7c"
                alt="Bhimsemi Camphor"
                className="max-h-[420px] object-contain"
              />
            </div>

            <div className="absolute bottom-0 left-0 bg-black/70 text-white text-xs px-3 py-2">
              Bhimsemi Camphor Vasundhara <br />
              Pure Ayurvedic Bhimsemi Camphor for pooja, meditation & fragrance.
            </div>
          </div>

          {/* CONTACT BUTTON */}
          <button className="w-full bg-orange-500 text-white py-3 mt-4 rounded text-sm hover:bg-orange-600 flex justify-center items-center gap-2">
            <Mail size={16} /> Contact Member
          </button>

          {/* DESCRIPTION */}
          <div className="bg-white p-6 rounded shadow-sm text-sm text-gray-700 mt-6">
            <p>
              Pure Ayurvedic Bhimsemi Camphor for pooja, meditation & fragrance.
              Relieves stress & purifies air naturally. No chemicals.
            </p>
          </div>

          {/* TAGS */}
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-500">
            <span className="bg-gray-200 px-3 py-1 rounded">Camphor</span>
            <span className="bg-gray-200 px-3 py-1 rounded">Bhimsemi</span>
            <span className="bg-gray-200 px-3 py-1 rounded">Pooja</span>
            <span className="bg-gray-200 px-3 py-1 rounded">Meditation</span>
            <span className="bg-gray-200 px-3 py-1 rounded">Natural Aroma</span>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">

          {/* MEMBER LOGIN */}
          <div className="bg-white p-6 rounded shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Member Login</h3>

            <input
              className="w-full border p-2 rounded text-sm mb-3"
              placeholder="name@yoursite.com"
            />
            <input
              type="password"
              className="w-full border p-2 rounded text-sm mb-2"
              placeholder="Enter Password"
            />

            <div className="text-xs text-gray-500 mb-4">
              Forgot Password? Click to Reset Password
            </div>

            <button className="w-full bg-orange-500 text-white py-2 rounded text-sm hover:bg-orange-600">
              Login Now
            </button>
          </div>

          {/* CONTACT + AVAILABILITY */}
          <div className="bg-white p-6 rounded shadow-sm space-y-4">
            <button className="w-full bg-orange-500 text-white py-2 rounded text-sm hover:bg-orange-600 flex items-center justify-center gap-2">
              <Mail size={16} /> Contact Member
            </button>

            <div className="text-sm border-t pt-4 flex justify-between">
              <span>Availability</span>
              <span className="font-medium">In Stock</span>
            </div>
          </div>

          {/* SHARE */}
          <div className="bg-white p-6 rounded shadow-sm">
            <h3 className="font-semibold mb-3">Share This Page</h3>
            <div className="flex gap-2">
              <button className="bg-blue-600 text-white px-4 py-2 rounded text-xs">
                Facebook
              </button>
              <button className="bg-black text-white px-4 py-2 rounded text-xs">
                X
              </button>
              <button className="bg-blue-700 text-white px-4 py-2 rounded text-xs">
                LinkedIn
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
