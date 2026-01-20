import React from "react";

const reviews = [
  {
    name: "Nayana Paratwar",
    title: "Great insights",
    review:
      "Nayna has been a great advisor and the practices she has suggested I follow...",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Abhivruddhi Financial Consultancy",
    title: "Very Satisfied with their Service",
    review:
      "I have been working with Sheela Alurkar mam for my mutual fund investments...",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "MH Delicacies",
    title: "",
    review:
      "Masud Bhakri, ani chavishtha pohe. Pandhari Shubhra Masud Jowarchi Bhakri chan hoti...",
    image: "https://via.placeholder.com/80x80.png?text=MH",
  },
  {
    name: "Sandeep Limaye",
    title: "Best Mentor",
    review:
      "Interacting with Sandeep Limaye sir for career counselling was an excellent...",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
  },
  {
    name: "Akash Desale",
    title: "Seamless and Reliable Rentals",
    review:
      "Self Spin, owned by Akash Desale, is a standout in the car and bike rental...",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Pooja Nesarkar",
    title: "Very Delicious and Hygienic Food",
    review:
      "Mutton and Chicken Thali are the special ones to taste. Chops is very memorable...",
    image: "https://via.placeholder.com/80x80.png?text=PN",
  },
];
import { useNavigate } from "react-router-dom";
const Reviews = () => {
  const navigate = useNavigate();
  const HandleViewAll =()=>{
    navigate('/review')
  }
  return (
    <div className="bg-gray-50 py-14 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">
            Reviews
          </h2>

          <button
          onClick={HandleViewAll
          } className="bg-orange-500 hover:bg-orange-600 transition text-white text-sm px-4 py-2 rounded">
            View All
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              {/* Top Row */}
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-md object-cover"
                />

                <div className="flex-1">
                  <h3 className="font-semibold text-sm text-gray-800">
                    {review.name}
                  </h3>

                  {/* Stars */}
                  <div className="flex text-yellow-400 text-sm mt-1">
                    ★★★★★
                  </div>
                </div>
              </div>

              {/* Review Title */}
              {review.title && (
                <p className="font-semibold text-sm text-gray-700 mb-1">
                  {review.title}
                </p>
              )}

              {/* Review Text */}
              <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                {review.review}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Reviews;
