import { Link } from "react-router-dom";

const photoAlbums = [
  {
    id: 1,
    title: "Jiza Enterprises – Premium Cleaning & Hygiene Products",
    postedOn: "09/12/2025",
    postedBy: "Ajit Rupnawar",
    description:
      "Jiza Enterprises manufactures & supplies premium cleaning and hygiene solutions including Liquid Detergent, Toilet Cleaner and more.",
    image: "https://images.unsplash.com/photo-1581579185169-6c70f047d2a2",
  },
  {
    id: 2,
    title: "Products photos",
    postedOn: "08/12/2025",
    postedBy: "Ajit Rupnawar",
    description:
      "Multi-surface floor cleaner with antibacterial protection. Removes dirt & stains, keeps floors shiny and leaves fresh.",
    image: "https://images.unsplash.com/photo-1615484477201-9f4953340fab",
  },
  {
    id: 3,
    title: "Holidays packages",
    postedOn: "11/09/2025",
    postedBy: "Alliance International Tours and Travels",
    description:
      "Fixed Departure Packages (Dubai, Thailand, Sri Lanka, Bali & more). Customized travel packages available.",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764ce7",
  },
  {
    id: 4,
    title: "Yoga & Wellness Session",
    postedOn: "18/07/2025",
    postedBy: "The Rising Soul",
    description:
      "Yoga & wellness sessions focusing on mind-body balance, flexibility and inner peace.",
    image: "https://images.unsplash.com/photo-1554344058-1c7f0c9c0c9c",
  },
];

const PhotoAlbums = () => {
  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* LEFT: ALBUM LIST */}
        <div className="lg:col-span-3">
          <p className="text-sm text-gray-600 mb-1">
            Showing 1 - {photoAlbums.length} of 87 Results
          </p>

          <h1 className="text-2xl font-semibold mb-8">
            Photo Albums
          </h1>

          <div className="space-y-12">
            {photoAlbums.map((album) => (
              <div key={album.id} className="flex gap-6 items-start">

                {/* IMAGE */}
                <div className="w-52">
                  <img
                    src={album.image}
                    alt={album.title}
                    className="w-full h-40 object-cover rounded bg-gray-200"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex-1">
                  <p className="text-xs text-gray-500 mb-1">
                    Posted {album.postedOn} by{" "}
                    <span className="font-medium">
                      {album.postedBy}
                    </span>
                  </p>

                  <h3 className="text-lg font-semibold mb-2">
                    {album.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-4">
                    {album.description}{" "}
                    <Link
                      to={`/photo-albums/${album.id}`}
                      className="text-orange-500 hover:underline font-medium"
                    >
                      View More
                    </Link>
                  </p>

                  <Link
                    to={`/photo-albums/${album.id}`}
                    className="inline-block bg-orange-500 text-white px-6 py-2 rounded text-sm hover:bg-orange-600"
                  >
                    View More
                  </Link>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: SEARCH */}
        <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
          <h3 className="text-lg font-semibold mb-4">
            Photo Album Search
          </h3>

          <input
            className="w-full border p-2 rounded text-sm mb-4"
            placeholder="Keyword (Optional)"
          />

          <button className="w-full bg-orange-500 text-white py-2 rounded text-sm hover:bg-orange-600">
            Search Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default PhotoAlbums;
