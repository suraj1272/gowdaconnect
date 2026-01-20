import { useNavigate } from "react-router-dom";

const blogs = [
  {
    title: "पालकासाठी वेळ...",
    image: "https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8",
  },
  {
    title: "JeevanMeet.com",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a",
  },
  {
    title: "पुस्तक वाचन सवय...",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
  },
  {
    title: "जुन्या वस्तू...",
    image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b",
  },
  {
    title: "Proper Ways to Dispose of Old",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    title: "Love For Mutton...",
    image: "https://images.unsplash.com/photo-1604908177522-04044c6b5b70",
  },
  {
    title: "The Marathi Tadka's Kheema",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
  },
  {
    title: "पालक होणे - एक संघर्ष",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  },
  {
    title: "नैराश्य (Depression)",
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca",
  },
  {
    title: "Six tips for a fresh bedroom",
    image: "https://images.unsplash.com/photo-1582582429416-5c75b0c51e31",
  },
  {
    title: "Building your kids - 2",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
  },
  {
    title: "Building your kids - 1",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
  },
];

const MembersBlogArticles = () => {
  const navigate = useNavigate();
  const handleViewAll = () => {
    navigate('/website-blog')
  };
  const ViewMore = () => {
    navigate('/blog-detail')
  }
  return (
    <div className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            Members Blog Articles
          </h2>

          <button 
          onClick={handleViewAll}
          className="bg-orange-500 hover:bg-orange-600 transition text-white text-sm px-4 py-2 rounded">
            View All
          </button>
        </div>

        {/* Blog Grid */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {blogs.map((blog, index) => (
    <div
      key={index}
      className="relative group overflow-hidden rounded-md cursor-pointer h-48"
    >
      {/* Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-full object-cover"
      />

      {/* DEFAULT STATE – Title at bottom */}
      <div
        className="
          absolute bottom-0 left-0 w-full
          bg-orange-500/90
          px-3 py-2
          transition-opacity duration-300
          group-hover:opacity-0
        "
      >
        <p className="text-white text-sm font-medium truncate text-center">
          {blog.title}
        </p>
      </div>

      {/* HOVER STATE – Bottom → Top overlay */}
      <div
        className="
          absolute inset-0
          bg-orange-500
          flex items-center justify-center
          translate-y-full
          group-hover:translate-y-0
          transition-transform duration-300 ease-in-out
        "
      >
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

export default MembersBlogArticles;
