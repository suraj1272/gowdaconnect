import { Link } from "react-router-dom";
import {
  MapPin,
  BedDouble,
  Bath,
  Printer,
  Mail,
} from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  "https://images.unsplash.com/photo-1576941089067-2de3c901e126",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
  "https://images.unsplash.com/photo-1599423300746-b62533397364",
];

const PropertyDetail = () => {
  return (
    <div className="bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-3">

          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-orange-500">Home</Link> /{" "}
            <Link to="/properties" className="hover:text-orange-500">Properties</Link> /{" "}
            <span className="text-gray-700">Coorgyanic Villa-5</span>
          </div>

          {/* POST INFO */}
          <div className="flex justify-between items-center bg-white px-4 py-3 rounded shadow-sm mb-6">
            <span className="text-sm text-gray-600">
              Posted 10/11/2025 by{" "}
              <strong>Villasanature Projects private limited</strong>
            </span>

            <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-orange-500">
              <Printer size={16} /> Print
            </button>
          </div>

          {/* TITLE */}
          <h1 className="text-2xl font-semibold mb-2">
            Coorgyanic Villa-5
          </h1>

          {/* LOCATION + META */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-4">
            <span className="flex items-center gap-1">
              <MapPin size={14} /> Gonikoppa, Karnataka 571213
            </span>
            <span className="flex items-center gap-1">
              <BedDouble size={16} /> Beds: 3
            </span>
            <span className="flex items-center gap-1">
              <Bath size={16} /> Baths: 3
            </span>
            <span>Square Foot 40,000</span>
          </div>

          {/* PRICE BAR */}
          <div className="bg-orange-500 text-white px-4 py-3 rounded-t flex justify-between items-center">
            <span className="text-lg font-semibold">
              ₹22,750,000.00
            </span>
            <span className="bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded">
              Other For Sale
            </span>
          </div>

          {/* IMAGE GALLERY */}
          <div className="bg-black rounded-b overflow-hidden mb-6">
            <div className="flex justify-center p-6">
              <img
                src={images[0]}
                alt="Main"
                className="max-h-[420px] object-contain"
              />
            </div>

            {/* Thumbnails */}
            <div className="bg-black/90 px-4 py-2 flex gap-3 overflow-x-auto">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Thumb ${idx + 1}`}
                  className="h-16 w-16 object-cover rounded cursor-pointer border border-gray-700 hover:border-orange-500"
                />
              ))}
            </div>
          </div>

          {/* CONTACT BUTTON */}
          <button className="w-full flex items-center justify-center gap-2 bg-orange-500 text-white py-3 rounded text-sm hover:bg-orange-600 mb-6">
            <Mail size={16} /> Contact Member
          </button>

          {/* DESCRIPTION */}
          <div className="bg-white p-6 rounded shadow-sm text-sm text-gray-700 space-y-4">
            <p>
              Based in the tranquil landscape of Coorg, we specialize in the
              development of premium farmhouses and estate properties that
              harmonize nature, design, and functionality.
            </p>

            <p>
              Our current project in Gonikoppa features a thoughtfully designed
              3BHK (approx. 2.5k sqft) farmhouse with servant quarters, a gazebo,
              landscaped gardens, and dedicated entryway with paved access.
            </p>

            <p>
              Set amidst a 40,000 sq. ft. coffee & pepper estate enriched with
              fruit and jungle wood trees. The villa is eligible for bank loans
              and reflects sustainable development with aesthetic detailing.
            </p>

            <p>
              Features include 24/7 water access, electricity connection, full
              power backup, proximity to Coorg’s major attractions including
              waterfalls and national parks—offering the ideal balance between
              comfort, convenience, and natural beauty.
            </p>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
          <h3 className="text-lg font-semibold mb-4">
            Property Search
          </h3>

          <input
            className="w-full border p-2 rounded text-sm mb-3"
            placeholder="Keyword (Optional)"
          />

          <input
            className="w-full border p-2 rounded text-sm mb-3"
            placeholder="City or Post Code"
          />

          <select className="w-full border p-2 rounded text-sm mb-3">
            <option>All Statuses</option>
            <option>For Sale</option>
            <option>For Rent</option>
          </select>

          <select className="w-full border p-2 rounded text-sm mb-3">
            <option>Property Type</option>
            <option>Villa</option>
            <option>Apartment</option>
            <option>Plot</option>
          </select>

          <select className="w-full border p-2 rounded text-sm mb-3">
            <option>Beds</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4+</option>
          </select>

          <select className="w-full border p-2 rounded text-sm mb-4">
            <option>Baths</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4+</option>
          </select>

          {/* PRICE RANGE */}
          <div className="mb-4">
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
  );
};

export default PropertyDetail;
