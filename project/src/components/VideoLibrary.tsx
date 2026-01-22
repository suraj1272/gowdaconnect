import { Link } from "react-router-dom";
import { MapPin, Play } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Dr. Shrutika Itkelwar, founder of DentiniX in Bengaluru",
    postedOn: "23/03/2025",
    postedBy: "Dr Shrutika Itkelwar (Dentist)",
    location:
      "No 3/3, Kamanna Complex, Kasavanahalli, Bengaluru, Karnataka 560035",
    description:
      "Dr. Shrutika is a dedicated and skilled dentist committed to providing top-quality dental care at DentiniX, her state-of-the-art clinic.",
  },
  {
    id: 2,
    title:
      "Meet Sulakshana, founder of GoSwasthya at the Gowda Connect's Entrepreneurs Conference - Bengaluru",
    postedOn: "23/03/2025",
    postedBy: "Sulakshana Pundle",
    location:
      "GoSwasthya basement shop, park small gate, near modak sweet, opposite to iblue, Iblur, Bellandur, Bengaluru, Karnataka 560103",
    description:
      "Meet Sulakshana, the visionary behind GoSwasthya, a brand on a mission to bring purity back to your kitchen.",
  },
  {
    id: 3,
    title:
      "Dr. Vrajesh Dhomne, Founder of Corsure Health Clinic & Diagnostics, Bengaluru",
    postedOn: "23/03/2025",
    postedBy: "Corsure Health The Clinic & Diagnostics",
    location:
      "Shop no. 04, Ground Floor, Aishwarya Complex Nagondanahalli, Vijayanagar Main Rd, near AH sports academy, Whitefield, Bengaluru, Karnataka 560066",
    description:
      "Join us for an engaging and informative conversation with Dr Vrajesh Dhomne, a distinguished cardiologist and diabetologist.",
  },
];

const VideoLibrary = () => {
  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* LEFT: VIDEO LIST */}
        <div className="lg:col-span-3">
          <p className="text-sm text-gray-600 mb-1">
            Showing 1 - {videos.length} of 27 Results
          </p>

          <h1 className="text-2xl font-semibold mb-8">
            Video Library
          </h1>

          <div className="space-y-14">
            {videos.map((video) => (
              <div key={video.id} className="flex gap-6 items-start">

                {/* VIDEO THUMB */}
                <div className="w-40 h-28 bg-gray-300 rounded flex items-center justify-center">
                  <Play className="text-gray-700" size={36} />
                </div>

                {/* CONTENT */}
                <div className="flex-1">
                  <p className="text-xs text-gray-500 mb-1">
                    Posted {video.postedOn} by{" "}
                    <span className="font-medium">
                      {video.postedBy}
                    </span>
                  </p>

                  <h3 className="text-lg font-semibold mb-2">
                    {video.title}
                  </h3>

                  <p className="text-sm flex items-center gap-1 text-gray-600 mb-2">
                    <MapPin size={14} />
                    {video.location}
                  </p>

                  <p className="text-sm text-gray-600 mb-4">
                    {video.description}{" "}
                    <Link
                      to={`/videos/${video.id}`}
                      className="text-orange-500 hover:underline font-medium"
                    >
                      View More
                    </Link>
                  </p>

                  <Link
                    to={`/videos/${video.id}`}
                    className="inline-block bg-orange-500 text-white px-6 py-2 rounded text-sm hover:bg-orange-600"
                  >
                    View More
                  </Link>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: VIDEO SEARCH */}
        <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
          <h3 className="text-lg font-semibold mb-4">
            Video Search
          </h3>

          <input
            className="w-full border p-2 rounded text-sm mb-4"
            placeholder="Keyword (Optional)"
          />

          <input
            className="w-full border p-2 rounded text-sm mb-4"
            placeholder="City or Post Code"
          />

          <button className="w-full bg-orange-500 text-white py-2 rounded text-sm hover:bg-orange-600">
            Search Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default VideoLibrary;
