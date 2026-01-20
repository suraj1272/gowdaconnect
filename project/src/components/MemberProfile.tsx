import React, { useState } from "react";

const MemberProfile = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "albums" | "products">(
    "overview"
  );

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 bg-white rounded-lg p-6">

          {/* HEADER */}
          <div className="flex gap-6 mb-6">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              className="w-32 h-40 object-cover rounded"
            />

            <div className="flex-1">
              <h1 className="text-2xl font-semibold mb-1">Ajit Rupnawar</h1>
              <p className="text-sm text-gray-600 mb-1">BENGALURU</p>
              <p className="text-sm">Stychem Industries Pvt Ltd</p>
              <p className="text-sm text-gray-600">
                Bengaluru, Karnataka, 560017
              </p>

              <div className="flex gap-3 mt-4">
                <button className="bg-orange-500 text-white px-4 py-2 rounded text-sm">
                  Send Message
                </button>
                <button className="bg-gray-600 text-white px-4 py-2 rounded text-sm">
                  Review This Member
                </button>
                <button className="border px-4 py-2 rounded text-sm">
                  📞 8296555853
                </button>
              </div>
            </div>
          </div>

          {/* INFO STRIP */}
          <div className="bg-gray-100 p-3 rounded text-sm mb-6">
            MAKE A CONNECTION Ajit Rupnawar is accepting messages:{" "}
            <span className="text-orange-500 font-medium">Send Message</span>
          </div>

          {/* TABS */}
          <div className="flex gap-6 border-b mb-6">
            {["overview", "albums", "products"].map((tab) => (
              <button
                key={tab}
                className={`pb-2 text-sm font-medium ${
                  activeTab === tab
                    ? "border-b-2 border-orange-500 text-orange-500"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab(tab as any)}
              >
                {tab === "overview"
                  ? "Overview"
                  : tab === "albums"
                  ? "Photo Albums (2)"
                  : "Products (7)"}
              </button>
            ))}
          </div>

          {/* OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-6">

              <div className="bg-gray-100 p-6 rounded italic text-lg text-gray-600">
                “We care for you”
              </div>

              {/* ABOUT */}
              <div>
                <h3 className="font-semibold mb-2">About</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Jiza Enterprises – Premium Home & Hygiene Products Manufacturer
                  & Distributor.
                </p>

                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li>Liquid Detergent (Top & Front Load)</li>
                  <li>Premium Floor & Surface Cleaner</li>
                  <li>Dishwash Gel</li>
                  <li>Green Phenyl</li>
                  <li>Detergent Powder</li>
                </ul>
              </div>

              {/* SUPPLY */}
              <div>
                <h3 className="font-semibold mb-2">Where We Supply</h3>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li>Apartments & Housing Societies</li>
                  <li>Corporate Offices</li>
                  <li>Hotels & Restaurants</li>
                  <li>Hospitals & Clinics</li>
                  <li>Retail & Wholesale Stores</li>
                </ul>
              </div>

              {/* CONTACT INFO */}
              <div>
                <h3 className="font-semibold mb-2">Contact Information</h3>
                <div className="text-sm space-y-1">
                  <p><b>Company:</b> Stychem Industries Pvt Ltd</p>
                  <p><b>Website:</b> https://www.stychem.com</p>
                  <p><b>Phone:</b> 8296555853</p>
                  <p><b>Location:</b> 5th Cross, Bengaluru, KA</p>
                </div>
              </div>

              {/* COMPANY DETAILS */}
              <div>
                <h3 className="font-semibold mb-2">Company Details</h3>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li>Year Established: 2024</li>
                  <li>Hours: Monday – Sunday, 6:00 AM – 10:00 PM</li>
                  <li>Payments: UPI, Bank Transfer, Cash</li>
                  <li>MSME Registered</li>
                </ul>
              </div>

              {/* MAP */}
              <div className="rounded overflow-hidden border">
                <iframe
                  className="w-full h-64"
                  src="https://maps.google.com/maps?q=bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed"
                ></iframe>
              </div>

            </div>
          )}

          {/* PHOTO ALBUMS */}
          {activeTab === "albums" && (
            <div className="space-y-6">
              {[1, 2].map((_, i) => (
                <div key={i} className="flex gap-6 border-b pb-6">
                  <img
                    src="https://images.unsplash.com/photo-1585386959984-a41552231693"
                    className="w-40 h-40 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold mb-2">
                      Jiza Enterprises – Premium Cleaning Products
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Premium cleaning and hygiene solutions for homes and
                      industries.
                    </p>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded text-sm">
                      View More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* PRODUCTS */}
          {activeTab === "products" && (
            <div className="space-y-6">
              {[1, 2].map((_, i) => (
                <div key={i} className="flex gap-6 border-b pb-6">
                  <img
                    src="https://images.unsplash.com/photo-1585386959984-a41552231693"
                    className="w-40 h-40 object-cover rounded"
                  />
                  <div className="flex-1">
                    <span className="inline-block bg-orange-500 text-white text-xs px-2 py-1 rounded mb-2">
                      In Stock
                    </span>
                    <h3 className="font-semibold mb-1">Bhimsenni Camphor</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Pure ayurvedic camphor for pooja & meditation.
                    </p>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded text-sm">
                      View More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="bg-white rounded-lg p-6 h-fit">
          <h3 className="font-semibold mb-4">Contact Ajit Rupnawar</h3>

          <form className="space-y-3">
            <input className="w-full border p-2 rounded text-sm" placeholder="Enter Name" />
            <input className="w-full border p-2 rounded text-sm" placeholder="Enter Email (Required)" />
            <input className="w-full border p-2 rounded text-sm" placeholder="Enter Phone" />
            <input className="w-full border p-2 rounded text-sm" placeholder="City or Post Code" />
            <textarea className="w-full border p-2 rounded text-sm h-24" placeholder="Write a message here..." />
            <button className="w-full bg-orange-500 text-white py-2 rounded text-sm">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default MemberProfile;
