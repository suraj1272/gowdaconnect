import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const classifieds = [
  {
    id: 1,
    title: "Yamaha FZS Bike For Resale | 2012 | +919405138489",
    author: "Marathi Connect",
    postedOn: "07/06/2023",
    condition: "Used",
    type: "For Sale",
    price: "₹40,000.00",
    category: "Bike",
    location: "HSR Layout, Bengaluru, Karnataka, India",
    description:
      "Hey buyers, I am moving to another state and that's why wanted to sell my Yamaha fzs bike. Please find...",
    image: "https://images.unsplash.com/photo-1558981403-c5f9891e8d54",
  },
  {
    id: 2,
    title:
      "Single bed convertible to double bed with storage, 5yrs old, 2.84x6.36ft",
    author: "Dr Tanvi Desai",
    postedOn: "20/04/2023",
    condition: "Used",
    type: "For Sale",
    price: "₹15,000.00",
    category: "Furniture",
    location:
      "AECS Layout, Marathahalli, Bengaluru, Karnataka 560037, India",
    description:
      "Sturdy and sleek convertible bed with storage. Used, 5yrs old but in very good condition...",
    image: "https://images.unsplash.com/photo-1582582494700-7da2c0f9b0a6",
  },
  {
    id: 3,
    title: "Ganesh Chaturthi 2022 - Sthapana Puja Via Zoom",
    author: "BookMyPooja",
    postedOn: "08/08/2022",
    condition: "New",
    type: "For Rent",
    price: "—",
    category: "Others",
    location: "Online / Zoom",
    description:
      "Puja Muhurat – 11:06 AM to 01:34 PM. Pandit Ji from BookMyPooja will guide all participants...",
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c",
  },
];

const ClassifiedAds = () => {
  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* LEFT: CLASSIFIED LIST */}
        <div className="lg:col-span-3">
          <p className="text-sm text-gray-600 mb-1">
            Showing 1 - {classifieds.length} of 5 Results
          </p>

          <h1 className="text-2xl font-semibold mb-8">
            Classified Ads
          </h1>

          <div className="space-y-10">
            {classifieds.map((item) => (
              <div key={item.id} className="flex gap-6 items-start">

                {/* IMAGE */}
                <div className="relative w-48">
                  <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-3 py-1 rounded">
                    {item.condition}
                  </span>

                  <span className="absolute top-2 right-2 bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded">
                    {item.type}
                  </span>

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-36 object-cover rounded bg-gray-200"
                  />

                  {item.price !== "—" && (
                    <div className="absolute bottom-0 w-full bg-black/70 text-white text-center text-sm py-1">
                      {item.price}
                    </div>
                  )}
                </div>

                {/* CONTENT */}
                <div className="flex-1">
                  <p className="text-xs text-gray-500 mb-1">
                    Posted {item.postedOn} by{" "}
                    <span className="font-medium">
                      {item.author}
                    </span>
                  </p>

                  <h3 className="text-lg font-semibold mb-1">
                    {item.title}
                  </h3>

                  <p className="text-sm flex items-center gap-1 text-gray-600 mb-2">
                    <MapPin size={14} />
                    {item.location}
                  </p>

                  <p className="text-sm text-gray-600 mb-3">
                    {item.description}{" "}
                    <Link
                      to={`/classifieds/${item.id}`}
                      className="text-orange-500 hover:underline font-medium"
                    >
                      View More
                    </Link>
                  </p>

                  <Link
                    to={`/classifieds/${item.id}`}
                    className="inline-block bg-orange-500 text-white px-6 py-2 rounded text-sm hover:bg-orange-600"
                  >
                    View More
                  </Link>

                  <p className="text-xs text-gray-500 mt-2">
                    Category <span className="font-medium">{item.category}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: SEARCH */}
        <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
          <h3 className="text-lg font-semibold mb-4">
            Classified Search
          </h3>

          <div className="space-y-4">
            <input
              className="w-full border p-2 rounded text-sm"
              placeholder="Keyword (Optional)"
            />

            <input
              className="w-full border p-2 rounded text-sm"
              placeholder="City or Post Code"
            />

            <select className="w-full border p-2 rounded text-sm">
              <option>Category</option>
              <option>Bike</option>
              <option>Furniture</option>
              <option>Others</option>
            </select>

            {/* PRICE RANGE UI */}
            <div>
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>₹0</span>
                <span>₹100,000</span>
              </div>
              <input
                type="range"
                min="0"
                max="100000"
                className="w-full accent-orange-500"
              />
            </div>

            <button className="w-full bg-orange-500 text-white py-2 rounded text-sm hover:bg-orange-600">
              Search Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ClassifiedAds;
