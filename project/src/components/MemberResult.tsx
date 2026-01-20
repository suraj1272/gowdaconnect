import { Link } from "react-router-dom";
import { Star, MapPin, Phone } from "lucide-react";

const members = [
  {
    name: "Aaswad Foods",
    rating: 4.5,
    endorsements: 79,
    description:
      "We at Aaswad Foods provide tasty, hygienic and fresh food. We provide all Maharashtrian food and Maharashtrian Diwali Faral.",
    location: "Bengaluru, Karnataka, 560002, India",
    phone: "+8888126157, 9970262323",
    image: "https://via.placeholder.com/80x80.png?text=A",
  },
  {
    name: "Abhivruddhi Financial Consultancy",
    rating: 5,
    endorsements: 5,
    description:
      "Sheela Alurkar is a financial advisor specialized in Mutual Funds with 40 years of experience.",
    location: "Bengaluru, Karnataka, 560037, India",
    phone: "9820921585",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Adv. Ankeeta Sadekar",
    rating: 5,
    endorsements: 1,
    description:
      "A first-generation lawyer specializing in Civil and Criminal law.",
    location: "Bangalore, Karnataka, 560072, India",
    phone: "+918618060055",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Adv. Pradnya Gadre",
    rating: 4,
    endorsements: 2,
    description:
      "Handles civil, commercial, corporate, real estate and family disputes.",
    location: "Bangalore, Karnataka, India",
    phone: "09611347480",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
  },
  {
    name: "Ajit Rupnawar",
    rating: 5,
    endorsements: 7,
    description:
      "Jiza Enterprises – Premium Home & Hygiene Products Manufacturer & Distributor.",
    location: "Bengaluru, Karnataka, 560017, India",
    phone: "8296555853",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const MemberResults = () => {
  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* LEFT: MEMBER RESULTS */}
        <div className="lg:col-span-3">

          {/* HEADER */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-sm text-gray-600">
                Showing 1 - {members.length} of 80 Results
              </p>
              <h1 className="text-2xl font-semibold mt-1">
                Member Results
              </h1>
            </div>

            <select className="border p-2 rounded text-sm">
              <option>Sort Results</option>
              <option>Rating</option>
              <option>Name</option>
            </select>
          </div>

          {/* LIST */}
          <div className="space-y-6">
            {members.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg flex flex-col md:flex-row gap-6 shadow-sm"
              >
                {/* IMAGE */}
                <img
                  src={member.image}
                  className="w-24 h-24 rounded object-cover"
                />

                {/* INFO */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">
                    {member.name}
                  </h3>

                  {/* RATING */}
                  <div className="flex items-center gap-1 text-yellow-400 text-sm mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill={i < Math.round(member.rating) ? "currentColor" : "none"}
                      />
                    ))}
                    <span className="text-gray-600 ml-2">
                      Rated {member.rating}/5 ({member.endorsements} Endorsements)
                    </span>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="text-sm text-gray-600 mt-3">
                    {member.description}
                  </p>

                  {/* META */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mt-3">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {member.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Phone size={14} />
                      {member.phone}
                    </span>
                  </div>
                </div>

                {/* ACTIONS */}
                <div className="flex flex-col gap-3 justify-center">
                  <Link
                    to="/member/profile"
                    className="bg-orange-500 text-white px-6 py-2 rounded text-sm text-center hover:bg-orange-600"
                  >
                    View Profile
                  </Link>

                  <button className="bg-orange-100 text-orange-600 px-6 py-2 rounded text-sm hover:bg-orange-200">
                    Send Message
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: FIND MEMBERS */}
        <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
          <h3 className="text-lg font-semibold mb-4">
            Find Members
          </h3>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">
                Search by Name or Keyword:
              </label>
              <input
                className="w-full border p-2 rounded mt-1 text-sm"
                placeholder="Name or Keyword"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Search by City:
              </label>
              <input
                className="w-full border p-2 rounded mt-1 text-sm"
                placeholder="City or Post Code"
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

export default MemberResults;
