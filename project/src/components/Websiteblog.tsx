import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "Its okay to not know.",
    author: "Shamlaee Admane",
    date: "14/12/2021",
    excerpt:
      "It's okay to not know. It's okay to not know something but it may not be the best thing to keep...",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
  },
  {
    id: 2,
    title: "Reading is fun!",
    author: "Shamlaee Admane",
    date: "15/04/2022",
    excerpt:
      "Hello Dear Parents, Today I would like to speak about some of the challenges that some kids face while they...",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  },
  {
    id: 3,
    title: "USE OF COPPER ON FACADE FOR REDUCE OF COVID SPREAD",
    author: "Architect Niket Sunil Upase",
    date: "15/08/2020",
    excerpt:
      "Page 02 - Article: USE OF COPPER ON FACADE FOR REDUCE OF COVID SPREAD. So basically...",
    image: "https://images.unsplash.com/photo-1584036561584-b03c19da874c",
  },
  {
    id: 4,
    title: "Importance of networking in our Community - Gowda Connect",
    author: "Udayan Deshpande",
    date: "03/11/2020",
    excerpt:
      "आपण सर्वांनी एकत्र येणे आवश्यक आहे. “Your network is your net worth”...",
    image: "https://images.unsplash.com/photo-1556761175-129418cb2dfe",
  },
];

const WebsiteBlog = () => {
  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* LEFT: BLOG LIST */}
        <div className="lg:col-span-3">

          {/* HEADER */}
          <div className="mb-8">
            <p className="text-sm text-gray-600">
              Showing 1 - {blogs.length} of 42 Results
            </p>
            <h1 className="text-2xl font-semibold mt-1">
              Website Blog
            </h1>
          </div>

          {/* BLOG ITEMS */}
          <div className="space-y-10">
            {blogs.map((blog) => (
              <div key={blog.id} className="flex gap-6">

                {/* IMAGE */}
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-40 h-28 object-cover rounded"
                />

                {/* CONTENT */}
                <div className="flex-1">
                  <p className="text-xs text-gray-500 mb-1">
                    Posted {blog.date} by <span className="font-medium">{blog.author}</span>
                  </p>

                  <h3 className="text-lg font-semibold mb-2">
                    {blog.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-2">
                    {blog.excerpt}{" "}
                    <Link
                      to={`/blog/${blog.id}`}
                      className="text-orange-500 hover:underline font-medium"
                    >
                      View More
                    </Link>
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: SEARCH */}
        <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
          <h3 className="text-lg font-semibold mb-4">
            Website Blog Article Search
          </h3>

          <div className="relative mb-4">
            <Search className="absolute left-3 top-3 text-gray-400" size={16} />
            <input
              className="w-full border pl-9 p-2 rounded text-sm"
              placeholder="Keyword (Optional)"
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

export default WebsiteBlog;
