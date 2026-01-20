import React from "react";

const products = [
  { name: "Bhimsenni Camphor", image: "https://images.unsplash.com/photo-1585386959984-a41552231693" },
  { name: "Detergent Powder", image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887" },
  { name: "Green Phenyl", image: "https://images.unsplash.com/photo-1615485737457-f07082c77813" },
  { name: "Handwash – Snow", image: "https://images.unsplash.com/photo-1583947582886-fd69c1b07b0c" },
  { name: "Dishwash Gel / Liquid", image: "https://images.unsplash.com/photo-1622445272461-c6580cab8755" },
  { name: "Premium Floor Cleaner", image: "https://images.unsplash.com/photo-1581579185169-1c4f8f93bb01" },
  { name: "Liquid Detergent – Top &", image: "https://images.unsplash.com/photo-1622560480754-8b3c651e003a" },
  { name: "Misal", image: "" },
  { name: "Batata Vada", image: "" },
  { name: "Thalipith", image: "" },
  { name: "Masale Bhat", image: "" },
  { name: "Akkha Masoor Amti", image: "" },
];
import { useNavigate } from "react-router-dom";
const Products = () => {
  const navigate = useNavigate()
  const HandleViewAll = ()=> {
    navigate('/product-liberary')
  }
  const ViewMore =() =>{
    navigate('/product-detail')
  }
    return (
    <div className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Products</h2>
          <button
          onClick={HandleViewAll} className="bg-orange-500 text-white text-sm px-4 py-2 rounded">
            View All
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-md cursor-pointer h-44 bg-gray-100"
            >
              {/* Image / Placeholder */}
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
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
                  {product.name}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-orange-500 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                <button onClick={ViewMore}className="bg-white text-orange-500 text-xs font-semibold px-5 py-2 rounded">
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

export default Products;
