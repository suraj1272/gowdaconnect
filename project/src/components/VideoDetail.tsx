import { Link } from "react-router-dom";
import { MapPin, Printer, Share2, Facebook, Linkedin, Mail } from "lucide-react";

const VideoDetail = () => {
  return (
    <div className="bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-3">

          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-orange-500">Home</Link> /{" "}
            <Link to="/videos" className="hover:text-orange-500">Videos</Link> /{" "}
            <span className="text-gray-700">
              Dr. Shrutika Itkelwar, founder of DentiniX in Bengaluru
            </span>
          </div>

          {/* Post Meta */}
          <div className="flex justify-between items-center bg-white px-4 py-3 rounded shadow-sm mb-6">
            <span className="text-sm text-gray-600">
              Posted 23/03/2025 by{" "}
              <strong>Dr Shrutika Itkelwar (Dentist)</strong>
            </span>

            <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-orange-500">
              <Printer size={16} /> Print
            </button>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-semibold mb-2">
            Dr. Shrutika Itkelwar, founder of DentiniX in Bengaluru
          </h1>

          {/* Location */}
          <p className="flex items-center gap-1 text-sm text-gray-600 mb-6">
            <MapPin size={14} />
            No 3/3, Kamanna Complex, Kasavanahalli, Bengaluru, Karnataka 560035
          </p>

          {/* VIDEO */}
          <div className="aspect-video mb-8 rounded overflow-hidden bg-black">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video"
              allowFullScreen
            />
          </div>

          {/* DESCRIPTION */}
          <div className="bg-white p-6 rounded shadow-sm space-y-4 text-sm text-gray-700">
            <p>
              Dr. Shrutika is a dedicated and skilled dentist committed to providing
              top-quality dental care at DentiniX, her state-of-the-art clinic. With
              a passion for creating healthy and confident smiles, she offers a
              wide range of treatments.
            </p>

            <p>
              From routine check-ups and preventive care to advanced cosmetic and
              restorative dentistry, Dr. Shrutika ensures that every patient feels
              comfortable and well cared for.
            </p>

            <p>
              At DentiniX, she combines the latest technology with compassionate
              care to deliver exceptional dental solutions for all ages.
            </p>

            <hr />

            <p><strong>DentiniX Multispeciality Dental Clinic</strong></p>
            <p>Phone: 9868195295</p>
            <p>
              Location: DentiniX Multispeciality Dental Clinic, Kamanna Complex,
              Kasavanahalli, Bangalore, Karnataka 560035
            </p>

            <p>
              <a
                href="https://g.co/kgs/Dq3zpxw"
                target="_blank"
                rel="noreferrer"
                className="text-orange-500 hover:underline"
              >
                https://g.co/kgs/Dq3zpxw
              </a>
            </p>

            <hr />

            <p className="text-xs text-gray-500">
              #DentiniX #DrShrutikaItkelwar #DentalCare #HealthySmiles
              #CosmeticDentistry #RestorativeDentistry #PreventiveCare
              #SmileTransformation #OralHealth #BangaloreDentist
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["dentist", "doctor", "teeth", "root canal", "dentistry", "dental", "tooth", "cavity"].map(tag => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
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

            <input
              className="w-full border p-2 rounded text-sm mb-3"
              placeholder="Email Address"
            />
            <input
              type="password"
              className="w-full border p-2 rounded text-sm mb-2"
              placeholder="Password"
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

          {/* LOCATION */}
          <div className="bg-gray-700 text-white p-4 rounded text-sm">
            <MapPin size={14} className="inline mr-1" />
            No 3/3, Kamanna Complex, Kasavanahalli, Bengaluru, Karnataka 560035
          </div>

          <button className="w-full bg-orange-500 text-white py-2 rounded text-sm hover:bg-orange-600">
            View Larger Map
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

export default VideoDetail;
