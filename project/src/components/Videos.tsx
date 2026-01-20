import React from "react";

const videos = [
  { name: "Dr. Shrutika Itkelwar, Founder", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" },
  { name: "Meet Sulakshana, Founder", image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12" },
  { name: "Dr. Vrjesh Dhomne", image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39" },
  { name: "Udayan Speaking on Topics", image: "https://images.unsplash.com/photo-1544717305-996b815c338c" },
  { name: "Why Griha Pravesh Puja?", image: "https://images.unsplash.com/photo-1600352706653-9b1cddad9dc4" },
  { name: "Maharashtrian Food", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950" },
  { name: "Chess for Beginners", image: "" },
  { name: "AHAMASMI ARCHITECT", image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12" },
  { name: "World Sight Day 2021", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" },
  { name: "Restart To Entrepreneur", image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39" },
];
import { useNavigate } from "react-router-dom";
const Videos = () => {
  const navigate = useNavigate();
  const HandleViewAll = ()=> {
    navigate('/video-library')
  }
  const ViewMore =() =>{
    navigate('/videodetails')
  }
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">Videos</h2>
          <button onClick={HandleViewAll} className="bg-orange-500 text-white px-4 py-2 text-sm rounded">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {videos.map((item, index) => (
            <div key={index} className="relative group h-44 overflow-hidden rounded-md bg-gray-100">
              {item.image ? (
                <img src={item.image} className="w-full h-full object-cover" />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">🖼️</div>
              )}

              <div className="absolute bottom-0 w-full bg-orange-500/90 px-3 py-2 transition-opacity duration-300 group-hover:opacity-0">
                <p className="text-white text-sm text-center truncate">{item.name}</p>
              </div>

              <div className="absolute inset-0 bg-orange-500 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <button onClick={ViewMore}className="bg-white text-orange-500 text-xs px-5 py-2 rounded">
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Videos;
