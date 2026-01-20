import React from "react";

const classifieds = [
  {
    title: "Yamaha FZS Bike For Resale",
    image: "https://images.unsplash.com/photo-1558981403-c5f9891db46a",
  },
  {
    title: "Single bed convertible to sofa",
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
  },
  {
    title: "Ganesh Chaturthi 2022 – Puja",
    image: "https://images.unsplash.com/photo-1600352706653-9b1cddad9dc4",
  },
  {
    title: "Mee Mee premium pram",
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1",
  },
  {
    title: "Philips avent steamer",
    image: "",
  },
];
import { useNavigate } from "react-router-dom";
const Classifieds = () => {
  const navigate = useNavigate()
  const HandleViewAll = ()=> {
    navigate('/classified-ads')
  }
  const ViewMore =() =>{
    navigate('/classified-detail') 
  }
  return (
    <div className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Classifieds</h2>
          <button onClick={HandleViewAll} className="bg-orange-500 text-white text-sm px-4 py-2 rounded">
            View All
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {classifieds.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-md cursor-pointer h-44 bg-gray-100"
            >
              {/* Image / Placeholder */}
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                  🖼️
                </div>
              )}

              {/* Default Title */}
              <div className="absolute bottom-0 left-0 w-full bg-orange-500/90 px-3 py-2 transition-opacity duration-300 group-hover:opacity-0">
                <p className="text-white text-sm text-center truncate">
                  {item.title}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-orange-500 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                <button onClick={ViewMore} className="bg-white text-orange-500 text-xs font-semibold px-5 py-2 rounded">
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Classifieds;
