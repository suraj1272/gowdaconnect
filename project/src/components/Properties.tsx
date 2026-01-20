import React from "react";

const properties = [
  { name: "Coorgyanic Villa - 5", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994" },
  { name: "Coorgyanic Villa - 4", image: "https://images.unsplash.com/photo-1576941089067-2de3c901e126" },
  { name: "Coorgyanic Villa - 3", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
  { name: "Coorgyanic Villa - Arunodaya", image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c" },
  { name: "Coorgyanic Villa - Anugraha", image: "https://images.unsplash.com/photo-1576941089060-33b9b4b8c73f" },
  { name: "2BHK Fully Furnished Flat", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511" },
  { name: "2BHK Semi Furnished Flat", image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6" },
  { name: "Sobha Victoria Park", image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be" },
  { name: "Fully Furnished Serviced 1 BHK", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2" },
  { name: "Fully Furnished 3BHK Flat", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914" },
  { name: "2400 SQ.FT Plot for Sale", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef" },
  { name: "SOBHA SENTOSA", image: "" },
];
import { useNavigate } from "react-router-dom";
const Properties = () => {
  const navigate = useNavigate();
  const HandleViewAll = ()=> {
    navigate('/property-listings')
  }
  const ViewMore =() =>{
    navigate('/property-detail')
  }
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">Properties</h2>
          <button onClick={HandleViewAll}className="bg-orange-500 text-white px-4 py-2 text-sm rounded">
            View All
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {properties.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-md h-44 cursor-pointer bg-gray-100"
            >
              {item.image ? (
                <img src={item.image} className="w-full h-full object-cover" />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">🖼️</div>
              )}

              {/* Default title */}
              <div className="absolute bottom-0 w-full bg-orange-500/90 px-3 py-2 transition-opacity duration-300 group-hover:opacity-0">
                <p className="text-white text-sm text-center truncate">{item.name}</p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-orange-500 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <button onClick={ViewMore} className="bg-white text-orange-500 text-xs px-5 py-2 rounded">
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

export default Properties;
