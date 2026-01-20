import { Link } from "react-router-dom";
import { Printer, Mail } from "lucide-react";

const BlogDetail = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-3">

          {/* BREADCRUMB */}
          <div className="text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-orange-500">Home</Link> /{" "}
            <Link to="/blog" className="hover:text-orange-500">Blog</Link> /{" "}
            <span className="text-gray-700">JeevanMeet.com</span>
          </div>

          {/* POST META */}
          <div className="flex justify-between items-center bg-white px-4 py-3 rounded shadow-sm mb-6">
            <span className="text-sm text-gray-600">
              Posted 18/03/2025 by <strong>JeevanMeet.com</strong>
            </span>

            <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-orange-500">
              <Printer size={16} /> Print
            </button>
          </div>

          {/* TITLE */}
          <h1 className="text-2xl font-semibold mb-6">JeevanMeet.com</h1>

          {/* BLOG IMAGE */}
          <div className="bg-white rounded shadow-sm p-6 mb-6">
            <div className="bg-gray-300 flex justify-center items-center p-4 rounded">
              <img
                src="https://images.unsplash.com/photo-1521337581447-8c7f7c1e3bfa"
                alt="JeevanMeet"
                className="max-h-[450px] object-contain"
              />
            </div>

            {/* DESCRIPTION */}
            <p className="text-sm text-gray-700 mt-6 leading-relaxed">
              Most trusted and leading Matrimony for our Marathi community now
              in Bangalore with personal touch and guidance for finding your
              perfect life partner.
            </p>
          </div>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2 text-xs text-gray-500">
            <span className="bg-gray-200 px-3 py-1 rounded">Matrimony</span>
            <span className="bg-gray-200 px-3 py-1 rounded">marriage</span>
            <span className="bg-gray-200 px-3 py-1 rounded">shaadi</span>
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

          {/* CONTACT MEMBER */}
          <div className="bg-white p-6 rounded shadow-sm">
            <button className="w-full bg-orange-500 text-white py-2 rounded text-sm hover:bg-orange-600 flex justify-center items-center gap-2">
              <Mail size={16} /> Contact Member
            </button>
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

export default BlogDetail;
