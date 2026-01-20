
const members = [
  {
    name: "Ajit Rupnawar",
    description:
      "Jija Enterprises – Premium Home & Hygiene Products Manufacturer & Distributor...",
    location: "Bengaluru, KA",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Ravi GH",
    description:
      "I am Ravi GH. Currently working for Akamai Technologies as Principal System Engineer...",
    location: "Bengaluru, KA",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Vivek Yawalkar",
    description:
      "Creative Visionary | Brand Strategist | Industrial Visual Management...",
    location: "Chhatrapati Sambhajinagar",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
  },
  {
    name: "Narayani Holidays and Conferen...",
    description:
      "About Us: Narayani Holidays and Conferences Pvt Ltd is professionally managed...",
    location: "Bengaluru, KA",
    image: "https://via.placeholder.com/80x80.png?text=NH",
  },
  {
    name: "Villasignature Projects private...",
    description: "Luxury villa projects and premium real estate development...",
    location: "Bangalore, KA",
    image: "https://via.placeholder.com/80x80.png?text=VP",
  },
  {
    name: "Marathi katta",
    description:
      "I am Ashwini Giri and I’m an IT Engineer but I have work with my passion...",
    location: "Bengaluru, KA",
    image: "https://via.placeholder.com/80x80.png?text=MK",
  },
  {
    name: "Moneybolism",
    description:
      "In partnership with Mumbai-based Moneybolism, I am looking to offer an array of financial...",
    location: "Bangalore",
    image: "https://via.placeholder.com/80x80.png?text=MB",
  },
  {
    name: "Arati Thaware",
    description: "Business consultant & leadership mentor...",
    location: "Bengaluru, KA",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Alliance International Tours a...",
    description:
      "Alliance International Tours & Travels was established in April 2023...",
    location: "Bengaluru, KA",
    image: "https://via.placeholder.com/80x80.png?text=AT",
  },
  {
    name: "Pustak Pandhari",
    description:
      "Welcome to Pustak Pandhari – a cozy, handpicked library in Bangalore...",
    location: "Bengaluru, KA",
    image: "https://via.placeholder.com/80x80.png?text=PP",
  },
  {
    name: "Janhavi Kulkarni",
    description:
      "Founder | Annapurna Kitchen – your destination for authentic homemade food...",
    location: "Bengaluru, KA",
    image: "https://randomuser.me/api/portraits/women/72.jpg",
  },
  {
    name: "The Rising Soul",
    description:
      "The Rising Soul aims to tailor programs to individual needs, recognizing each...",
    location: "Bengaluru, KA",
    image: "https://randomuser.me/api/portraits/women/41.jpg",
  },
];

import { useNavigate } from 'react-router-dom';

const NewMembers = () => {
  const navigate = useNavigate();

  const handleViewProfile = (member) => {
    navigate('/member-profile', { state: { member } });
  };

  const handleViewAll = () => {
    navigate('/member-result');
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">
            New Members
          </h2>

          <button 
            onClick={handleViewAll}
            className="bg-orange-500 hover:bg-orange-600 transition px-4 py-2 text-sm text-white font-medium rounded"
          >
            View All
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 rounded-full object-cover mb-4"
              />

              <h3 className="font-semibold text-gray-800 text-sm mb-2">
                {member.name}
              </h3>

              <p className="text-xs text-gray-600 mb-3 line-clamp-3">
                {member.description}
              </p>

              <p className="text-xs text-gray-500 mb-4">
                Located in <br />
                <span className="font-medium">{member.location}</span>
              </p>

              <button 
                onClick={() => handleViewProfile(member)}
                className="mt-auto bg-orange-500 hover:bg-orange-600 transition px-4 py-2 text-xs text-white rounded"
              >
                View Profile
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default NewMembers;
