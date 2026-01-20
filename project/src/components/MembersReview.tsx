import { Star } from "lucide-react";

const reviews = [
  {
    name: "Nayana Paratwar",
    title: "Great insights",
    rating: 5,
    review:
      "Nayana has been a great advisor and the practices she has suggested I follow have brought a lot of peace.",
    date: "Submitted by R A on Tuesday, Oct 07, 2025",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Nayana Paratwar",
    title: "Therapy sessions with Nayana",
    rating: 5,
    review:
      "Nayana aunty’s sessions were very helpful. She is calm, patient and her advice is easily applicable in daily life.",
    date: "Submitted by Vridhi on Wednesday, Oct 01, 2025",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Nayana Paratwar",
    title: "A friend and counsellor",
    rating: 5,
    review:
      "She has deep listening capabilities and a balanced approach. I truly felt the improvement after her sessions.",
    date: "Submitted by Rahul on Monday, Sep 29, 2025",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const MemberReviews = () => {
  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* LEFT */}
        <div className="lg:col-span-3">
          <p className="text-sm text-gray-600 mb-1">
            Showing 1 - {reviews.length} of 379 Results
          </p>
          <h1 className="text-2xl font-semibold mb-6">
            Recent Member Reviews
          </h1>

          <div className="space-y-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 flex gap-6 shadow-sm"
              >
                <img
                  src={review.image}
                  className="w-24 h-24 rounded object-cover"
                />

                <div className="flex-1">
                  <h3 className="font-semibold text-lg">
                    {review.name}
                  </h3>

                  <p className="font-medium text-gray-800 mb-1">
                    {review.title}
                  </p>

                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="text-yellow-400"
                        fill={i < review.rating ? "currentColor" : "none"}
                      />
                    ))}
                  </div>

                  <p className="text-sm text-gray-600 mb-3">
                    {review.review}
                  </p>

                  <p className="text-xs text-gray-500">
                    {review.date}
                  </p>
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

            <select className="w-full border p-2 rounded text-sm">
              <option>Any Rating</option>
              <option>5 Stars</option>
              <option>4 Stars</option>
              <option>3 Stars</option>
            </select>

            <button className="w-full bg-orange-500 text-white py-2 rounded text-sm hover:bg-orange-600">
              Search Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MemberReviews;
