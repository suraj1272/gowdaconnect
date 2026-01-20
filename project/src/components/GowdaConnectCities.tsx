import React from "react";

const cities = [
  {
    name: "BENGALURU",
    image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6",
  },
  {
    name: "BHOPAL",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2",
  },
  {
    name: "CHENNAI",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220",
  },
  {
    name: "DELHI",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada",
  },
];
import { useNavigate } from 'react-router-dom';
const GowdaConnectCities = () => {
  const navigate = useNavigate();
  
  const HandleViewAll = () => {
    navigate('/members-by-city')
  };

  const handleCityClick = (city) => {
    navigate('/member-result', { state: { city } });
  };

  return (
    <div className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            Gowda Connect Cities
          </h2>

          <button onClick={HandleViewAll}
           className="bg-orange-500 hover:bg-orange-600 transition text-white text-sm px-4 py-2 rounded">
            View All
          </button>
        </div>

        {/* Cities Grid */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
  {cities.map((city, index) => (
    <div
      key={index}
      onClick={() => handleCityClick(city)}
      className="relative group overflow-hidden rounded-md cursor-pointer h-44"
    >
      {/* City Image */}
      <img
        src={city.image}
        alt={city.name}
        className="w-full h-full object-cover"
      />

      {/* DEFAULT STATE – City name at bottom */}
      <div
        className="
          absolute bottom-0 left-0 w-full
          bg-orange-500/90
          px-3 py-2
          transition-opacity duration-300
          group-hover:opacity-0
        "
      >
        <p className="text-white text-sm font-semibold text-center truncate">
          {city.name}
        </p>
      </div>

      {/* HOVER STATE – Bottom → Top overlay */}
      <div
        className="
          absolute inset-0
          bg-orange-500
          flex items-center justify-center
          translate-y-full
          group-hover:translate-y-0
          transition-transform duration-300 ease-in-out
        "
      >
        <span className="text-white font-semibold tracking-wide text-sm">
          {city.name}
        </span>
      </div>
    </div>
  ))}
</div>


      </div>
    </div>
  );
};

export default GowdaConnectCities;
