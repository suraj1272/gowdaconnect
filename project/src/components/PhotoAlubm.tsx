import React from "react";

const photos = [
  { name: "Jiza Enterprises – Premium", image: "https://images.unsplash.com/photo-1585386959984-a41552231693" },
  { name: "Exclusive Holiday Packages", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
  { name: "The Rising Soul Yoga & Diet", image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74" },
  { name: "Kheema Pav", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950" },
  { name: "BookMyPooja Flyer", image: "https://images.unsplash.com/photo-1602052793312-b99c2a9ee797" },
  { name: "Bangalore Marathi Offline", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" },
  { name: "Embassy Orchid, Bangalore", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2" },
  { name: "Oris Dental Care", image: "https://images.unsplash.com/photo-1606813902919-8f50a05b17f0" },
  { name: "Vinay’s Residence", image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c" },
  { name: "Residential Interior", image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6" },
  { name: "Hand Made Semi Precious", image: "https://images.unsplash.com/photo-1585386959984-a41552231693" },
  { name: "Unique Handmade Gifts", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba" },
];
import { useNavigate } from "react-router-dom";
const PhotoAlbum = () => {
  const navigate = useNavigate();
  const HandleViewAll = ()=> {
    navigate('/photo-albums')
  } 
  const ViewMore =() =>{
    navigate('/photo-album-details')
  }
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">Photo Album</h2>
          <button
          onClick={HandleViewAll}
          className="bg-orange-500 text-white px-4 py-2 text-sm rounded">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {photos.map((item, index) => (
            <div key={index} className="relative group h-44 overflow-hidden rounded-md bg-gray-100">
              <img src={item.image} className="w-full h-full object-cover" />

              <div className="absolute bottom-0 w-full bg-orange-500/90 px-3 py-2 transition-opacity duration-300 group-hover:opacity-0">
                <p className="text-white text-sm text-center truncate">{item.name}</p>
              </div>

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

export default PhotoAlbum;
