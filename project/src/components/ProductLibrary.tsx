import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Bhimsenni Camphor",
    company: "Stychem Industries Pvt Ltd",
    author: "Ajit Rupnawar",
    date: "09/12/2025",
    description:
      "Pure Ayurvedic Bhimsenni Camphor for pooja, meditation & fragrance. Relieves stress & purifies air naturally.",
    image: "https://images.unsplash.com/photo-1585386959984-a41552231693",
    inStock: true,
  },
  {
    id: 2,
    name: "Detergent Powder",
    company: "Stychem Industries Pvt Ltd",
    author: "Ajit Rupnawar",
    date: "09/12/2025",
    description:
      "High-foam detergent powder for powerful cleaning & brightness. Removes stains & dirt easily. Best for bucket wash.",
    image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25",
    inStock: true,
  },
  {
    id: 3,
    name: "Green Phenyl",
    company: "Stychem Industries Pvt Ltd",
    author: "Ajit Rupnawar",
    date: "09/12/2025",
    description:
      "Premium disinfectant phenyl for hospitals, schools & apartments. Removes germs, foul smell & keeps floor fresh.",
    image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
    inStock: true,
  },
];

const ProductLibrary = () => {
  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* LEFT: PRODUCT LIST */}
        <div className="lg:col-span-3">
          <p className="text-sm text-gray-600 mb-1">
            Showing 1 - {products.length} of 111 Results
          </p>
          <h1 className="text-2xl font-semibold mb-8">
            Product Library
          </h1>

          <div className="space-y-10">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex gap-6 items-start"
              >
                {/* IMAGE */}
                <div className="relative">
                  {product.inStock && (
                    <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-3 py-1 rounded">
                      In Stock
                    </span>
                  )}

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-40 h-40 object-cover rounded bg-gray-200"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex-1">
                  <p className="text-xs text-gray-500 mb-1">
                    Posted {product.date} by{" "}
                    <span className="font-medium">
                      {product.author}
                    </span>
                  </p>

                  <h3 className="text-lg font-semibold mb-1">
                    {product.name}
                  </h3>

                  <p className="text-sm flex items-center gap-1 text-gray-600 mb-2">
                    <MapPin size={14} />
                    {product.company}
                  </p>

                  <p className="text-sm text-gray-600 mb-3">
                    {product.description}{" "}
                    <Link
                      to={`/products/${product.id}`}
                      className="text-orange-500 hover:underline font-medium"
                    >
                      View More
                    </Link>
                  </p>

                  <Link
                    to={`/products/${product.id}`}
                    className="inline-block bg-orange-500 text-white px-6 py-2 rounded text-sm hover:bg-orange-600"
                  >
                    View More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: PRODUCT SEARCH */}
        <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
          <h3 className="text-lg font-semibold mb-4">
            Product Search
          </h3>

          <div className="space-y-4">
            <input
              className="w-full border p-2 rounded text-sm"
              placeholder="Keyword (Optional)"
            />

            {/* PRICE SLIDER (UI ONLY) */}
            <div>
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>₹0</span>
                <span>₹5,000</span>
              </div>
              <input
                type="range"
                min="0"
                max="5000"
                className="w-full accent-orange-500"
              />
            </div>

            <input
              className="w-full border p-2 rounded text-sm"
              placeholder="City or Post Code"
            />

            <button className="w-full bg-orange-500 text-white py-2 rounded text-sm hover:bg-orange-600">
              Search Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductLibrary;
