const cities = [
  { name: "BENGALURU", image: "https://images.unsplash.com/photo-1584118624012-df056829fbd0" },
  { name: "BHOPAL", image: "https://images.unsplash.com/photo-1600352706653-9b1cddad9dc4" },
  { name: "CHENNAI", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
  { name: "DELHI", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5" },
  { name: "GWALIOR", image: "https://images.unsplash.com/photo-1570158268183-d296b2892211" },
  { name: "HYDERABAD", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c" },
  { name: "INDORE", image: "https://images.unsplash.com/photo-1593692909680-61db77cde9f4" },
  { name: "KOLKATA", image: "https://images.unsplash.com/photo-1548013146-72479768bada" },
  { name: "OTHERS", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
  { name: "SURAT", image: "https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8" },
];

const MembersByCity = () => {
  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* LEFT */}
        <div className="lg:col-span-3">
          <h1 className="text-2xl font-semibold mb-8">
            Members by City
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cities.map((city, index) => (
              <div
                key={index}
                className="relative group h-40 rounded overflow-hidden cursor-pointer"
              >
                <img
                  src={city.image}
                  className="w-full h-full object-cover"
                />

                {/* Bottom label */}
                <div className="absolute bottom-0 w-full bg-orange-500/90 text-white text-center py-2 transition-opacity duration-300 group-hover:opacity-0">
                  {city.name}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-orange-500 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white font-semibold">
                    {city.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT FILTER */}
        <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
          <h3 className="font-semibold text-lg mb-4">
            Find Members
          </h3>

          <div className="space-y-4">
            <input
              className="w-full border p-2 rounded text-sm"
              placeholder="Name or Keyword"
            />
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

export default MembersByCity;
