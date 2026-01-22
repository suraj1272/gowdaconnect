import { Link } from "react-router-dom";
import {
  MapPin,
  Printer,
  Mail,
  ExternalLink,
} from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1558981403-c5f9891b6b2f",
  "https://images.unsplash.com/photo-1605559424843-9e4c195b29e4",
  "https://images.unsplash.com/photo-1614161711022-2b8a3bcf774d",
  "https://images.unsplash.com/photo-1605559424843-9e4c195b29e4",
];

const ClassifiedDetail = () => {
  return (
    <div className="bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-3">

          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-orange-500">Home</Link> /{" "}
            <Link to="/classifieds" className="hover:text-orange-500">Classified Ads</Link> /{" "}
            <span className="text-gray-700">Yamaha FZS Bike</span>
          </div>

          {/* POST INFO */}
          <div className="flex justify-between items-center bg-white px-4 py-3 rounded shadow-sm mb-6">
            <span className="text-sm text-gray-600">
              Posted 07/06/2023 in <strong>Bike</strong> by{" "}
              <strong>Gowda Connect</strong>
            </span>

            <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-orange-500">
              <Printer size={16} /> Print
            </button>
          </div>

          {/* TITLE */}
          <h1 className="text-2xl font-semibold mb-2">
            Yamaha FZS Bike For Resale | 2012 | +919405138489
          </h1>

          {/* LOCATION */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <MapPin size={14} />
            HSR Layout, Bengaluru, Karnataka, India
          </div>

          {/* PRICE BAR */}
          <div className="bg-orange-500 text-white px-4 py-3 rounded-t flex justify-between items-center">
            <span className="text-lg font-semibold">₹40,000.00</span>
            <span className="bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded">
              Used / For Sale
            </span>
          </div>

          {/* IMAGE GALLERY */}
          <div className="bg-black rounded-b overflow-hidden mb-6">
            <div className="flex justify-center p-6">
              <img
                src={images[0]}
                alt="Main"
                className="max-h-[420px] object-contain"
              />
            </div>

            <div className="bg-black/90 px-4 py-2 flex gap-3 overflow-x-auto">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Thumb ${idx + 1}`}
                  className="h-16 w-16 object-cover rounded cursor-pointer border border-gray-700 hover:border-orange-500"
                />
              ))}
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap gap-4 mb-6">
            <button className="flex-1 bg-orange-500 text-white py-3 rounded text-sm hover:bg-orange-600 flex justify-center items-center gap-2">
              <Mail size={16} /> Contact Member
            </button>

            <button className="flex-1 bg-orange-500 text-white py-3 rounded text-sm hover:bg-orange-600 flex justify-center items-center gap-2">
              More Details <ExternalLink size={16} />
            </button>
          </div>

          {/* DESCRIPTION */}
          <div className="bg-white p-6 rounded shadow-sm text-sm text-gray-700 space-y-3">
            <p className="font-semibold">Hey buyers,</p>
            <p>
              I am moving to another state and that’s why wanted to sell my
              Yamaha FZS bike. Please find details below.
            </p>

            <p><strong>Year:</strong> 2012</p>
            <p><strong>Condition:</strong> Well maintained</p>
            <p><strong>Battery:</strong> New</p>
            <p><strong>Insurance:</strong> 3rd party</p>
            <p><strong>Price:</strong> 40k</p>

            <p className="font-semibold pt-2">
              Contact At: +919405138489 (Sachin Karale)
            </p>
          </div>

          {/* TAGS */}
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-500">
            <span className="bg-gray-200 px-3 py-1 rounded">bike</span>
            <span className="bg-gray-200 px-3 py-1 rounded">yamaha</span>
            <span className="bg-gray-200 px-3 py-1 rounded">resale</span>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">

          {/* LOGIN */}
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

          {/* CONTACT + DETAILS */}
          <div className="bg-white p-6 rounded shadow-sm space-y-4">
            <button className="w-full bg-orange-500 text-white py-2 rounded text-sm hover:bg-orange-600 flex items-center justify-center gap-2">
              <Mail size={16} /> Contact Member
            </button>

            <div className="text-sm border-t pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Status</span>
                <span>For Sale</span>
              </div>
              <div className="flex justify-between">
                <span>Category</span>
                <span>Bike</span>
              </div>
              <div className="flex justify-between">
                <span>Price</span>
                <span>₹40,000.00</span>
              </div>
              <div className="flex justify-between">
                <span>Availability</span>
                <span>Used</span>
              </div>
            </div>

            <button className="w-full bg-orange-500 text-white py-2 rounded text-sm hover:bg-orange-600 flex items-center justify-center gap-2">
              View More Details <ExternalLink size={16} />
            </button>
          </div>

          {/* MAP */}
          <div className="bg-white rounded shadow-sm overflow-hidden">
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=HSR%20Layout%20Bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-56"
            />
            <div className="bg-orange-500 text-white text-center py-2 text-sm cursor-pointer">
              View Larger Map
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

export default ClassifiedDetail;
