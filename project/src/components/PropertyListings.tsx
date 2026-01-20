import { Link } from "react-router-dom";
import { MapPin, BedDouble, Bath } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Coorgyanic Villa-5",
    postedBy: "Villasanature Projects private limited",
    postedOn: "10/11/2025",
    tag: "Other",
    status: "For Sale",
    price: "₹22,750,000.00",
    location: "Gonikoppa, Karnataka 571213",
    beds: 3,
    baths: 3,
    sqft: "40,000",
    description:
      "Based in the tranquil landscape of coorg, we specialize in the development of premium farmhouses and estate properties.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  },
  {
    id: 2,
    title: "Coorgyanic Villa-4",
    postedBy: "Villasanature Projects private limited",
    postedOn: "10/11/2025",
    tag: "Other",
    status: "For Sale",
    price: "₹22,750,000.00",
    location: "Gonikoppa, Karnataka 571213",
    beds: 3,
    baths: 3,
    sqft: "40,000",
    description:
      "Based in the tranquil landscape of coorg, we specialize in the development of premium farmhouses and estate properties.",
    image: "https://images.unsplash.com/photo-1576941089067-2de3c901e126",
  },
  {
    id: 3,
    title: "Coorgyanic Villa 3",
    postedBy: "Villasanature Projects private limited",
    postedOn: "10/11/2025",
    tag: "Other",
    status: "For Sale",
    price: "₹22,750,000.00",
    location: "Gonikoppa, Karnataka 571213 South Coorg",
    beds: 3,
    baths: 3,
    sqft: "40,000",
    description:
      "Based in the tranquil landscape of coorg, we specialize in the development of premium farmhouses and estate properties.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
];

const PropertyListings = () => {
  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* LEFT: PROPERTY LIST */}
        <div className="lg:col-span-3">
          <p className="text-sm text-gray-600 mb-1">
            Showing 1 - {properties.length} of 20 Results
          </p>

          <h1 className="text-2xl font-semibold mb-8">
            Property Listings
          </h1>

          <div className="space-y-12">
            {properties.map((property) => (
              <div key={property.id} className="flex gap-6 items-start">

                {/* IMAGE */}
                <div className="relative w-52">
                  <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-3 py-1 rounded">
                    {property.tag}
                  </span>

                  <span className="absolute top-2 right-2 bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded">
                    {property.status}
                  </span>

                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-40 object-cover rounded bg-gray-200"
                  />

                  <div className="absolute bottom-0 w-full bg-black/70 text-white text-center text-sm py-1">
                    {property.price}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex-1">
                  <p className="text-xs text-gray-500 mb-1">
                    Posted {property.postedOn} by{" "}
                    <span className="font-medium">
                      {property.postedBy}
                    </span>
                  </p>

                  <h3 className="text-lg font-semibold mb-1">
                    {property.title}
                  </h3>

                  <p className="text-sm flex items-center gap-1 text-gray-600 mb-2">
                    <MapPin size={14} />
                    {property.location}
                  </p>

                  <p className="text-sm text-gray-600 mb-3">
                    {property.description}{" "}
                    <Link
                      to={`/properties/${property.id}`}
                      className="text-orange-500 hover:underline font-medium"
                    >
                      View More
                    </Link>
                  </p>

                  <Link
                    to={`/properties/${property.id}`}
                    className="inline-block bg-orange-500 text-white px-6 py-2 rounded text-sm hover:bg-orange-600"
                  >
                    View More
                  </Link>

                  {/* META */}
                  <div className="flex gap-6 text-sm text-gray-600 mt-4">
                    <span className="flex items-center gap-1">
                      <BedDouble size={16} /> Beds: {property.beds}
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath size={16} /> Baths: {property.baths}
                    </span>
                    <span>Square Foot {property.sqft}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: PROPERTY SEARCH */}
        <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
          <h3 className="text-lg font-semibold mb-4">
            Property Search
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
              <option>All Statuses</option>
              <option>For Sale</option>
              <option>For Rent</option>
            </select>

            <select className="w-full border p-2 rounded text-sm">
              <option>Property Type</option>
              <option>Villa</option>
              <option>Apartment</option>
              <option>Plot</option>
            </select>

            <select className="w-full border p-2 rounded text-sm">
              <option>Beds</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4+</option>
            </select>

            <select className="w-full border p-2 rounded text-sm">
              <option>Baths</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4+</option>
            </select>

            {/* PRICE RANGE */}
            <div>
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>₹0</span>
                <span>₹5,000,000</span>
              </div>
              <input
                type="range"
                min="0"
                max="5000000"
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

export default PropertyListings;
