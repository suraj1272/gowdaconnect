import { Link, useNavigate } from 'react-router-dom';
import { Mail, Facebook, Linkedin } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export function Header() {
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      {/* TOP BAR */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex flex-col">
            <div className="text-3xl font-bold text-orange-500">
              Gowda Connect
            </div>
            <div className="text-sm text-gray-600"></div>
          </Link>

          <div className="flex items-center gap-6">
            {isAuthenticated && (
              <span className="text-sm text-gray-700">
                Welcome, {user?.fullName}
              </span>
            )}

            <Link
              to="/contact-us"
              className="text-gray-700 hover:text-orange-500 text-sm"
            >
              Contact Us
            </Link>

            {isAuthenticated ? (
              <>
                <Link
                  to="/member-directory"
                  className="text-gray-700 hover:text-orange-500 text-sm"
                >
                  Member Directory
                </Link>

                <button
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-orange-500 text-sm"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-orange-500 text-sm"
                >
                  Member Login
                </Link>

                <Link
                  to="/register"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded text-sm"
                >
                  Membership Registration
                </Link>
              </>
            )}

            <div className="flex gap-2">
              <button className="bg-green-500 hover:bg-green-600 p-2 rounded">
                <Mail size={18} className="text-white" />
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 p-2 rounded">
                <Facebook size={18} className="text-white" />
              </button>
              <button className="bg-blue-400 hover:bg-blue-500 p-2 rounded">
                <Linkedin size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ORANGE NAVBAR */}
      <nav className="sticky top-0 z-50 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-around">

            {/* HOME */}
            <Link
              to="/"
              className="text-white py-3 px-6 hover:bg-orange-600"
            >
              Home
            </Link>

            {/* MEMBER DIRECTORY DROPDOWN */}
            <div className="relative group">
              <button className="text-white py-3 px-6 hover:bg-orange-600 flex items-center gap-1">
                Member Directory
                <span className="text-xs">▼</span>
              </button>

              <div className="absolute left-0 top-full w-56 bg-orange-500 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  to="/member-directory"
                  className="block px-4 py-2 text-white hover:bg-orange-600"
                >
                  Member Directory
                </Link>

                <Link
                  to="/register"
                  className="block px-4 py-2 text-white hover:bg-orange-600"
                >
                  Become a Member
                </Link>

                <Link
                  to="/login"
                  className="block px-4 py-2 text-white hover:bg-orange-600"
                >
                  Member Login
                </Link>
              </div>
            </div>

            {/* LATEST EVENTS DROPDOWN */}
            <div className="relative group">
              <button className="text-white py-3 px-6 hover:bg-orange-600 flex items-center gap-1">
                Latest Events
                <span className="text-xs">▼</span>
              </button>

              <div className="absolute left-0 top-full w-64 bg-orange-500 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  to="/events"
                  className="block px-4 py-2 text-white hover:bg-orange-600"
                >
                  View All Events
                </Link>

                <Link
                  to="/blogs"
                  className="block px-4 py-2 text-white hover:bg-orange-600"
                >
                  Members Blog
                </Link>

                <Link
                  to="/properties"
                  className="block px-4 py-2 text-white hover:bg-orange-600"
                >
                  Property Listings
                </Link>

                <Link
                  to="/jobs"
                  className="block px-4 py-2 text-white hover:bg-orange-600"
                >
                  Job Listings
                </Link>

                <Link
                  to="/products"
                  className="block px-4 py-2 text-white hover:bg-orange-600"
                >
                  Products Listings
                </Link>
              </div>
            </div>

            {/* OUR MISSION */}
            <Link
              to="/our-mission"
              className="text-white py-3 px-6 hover:bg-orange-600"
            >
              Our Mission
            </Link>

          </div>
        </div>
      </nav>
    </>
  );
}
