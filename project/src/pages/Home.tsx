import { Users, Calendar, ShoppingBag, Search, MapPin } from 'lucide-react';
import NewMembers from '../components/NewMembers';
import MembersBlogArticles from '../components/NewBlog';
import Reviews from '../components/Review';
import GowdaConnectCities from '../components/GowdaConnectCities';
import Product from '../components/Products';
import Classifieds from '../components/Classsfied';
import Properties from '../components/Properties';
import PhotoAlbum from '../components/PhotoAlubm';
import Videos from '../components/Videos';
import Footer from '../components/Footer';
export function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
         <div className="text-center mb-12">
  <div className="inline-block mb-6">
    <svg className="w-32 h-32" viewBox="0 0 200 200" fill="none">
      <text x="100" y="120" fontSize="60" fontWeight="bold" textAnchor="middle" fill="black">Gowda</text>
      <circle cx="160" cy="60" r="30" fill="none" stroke="red" strokeWidth="3"/>
    </svg>
  </div>
</div>

          <div className="bg-yellow-100 rounded-lg p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Search by Name or Keyword:</label>
                <div className="flex gap-2">
                  <Search className="text-gray-500 absolute mt-3 ml-3" size={20} />
                  <input
                    type="text"
                    placeholder="Name or Keyword"
                    className="flex-1 pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Search by City:</label>
                <div className="flex gap-2">
                  <MapPin className="text-gray-500 absolute mt-3 ml-3" size={20} />
                  <input
                    type="text"
                    placeholder="City or Post Code"
                    className="flex-1 pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>
            </div>
            <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded font-semibold">
              Search Now
            </button>
          </div>

          <div className="bg-[#667783] py-12 rounded-lg mb-12">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">

    {/* Card 1 */}
    <div className="text-center text-white">
      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#6f818c] flex items-center justify-center">
        <Users size={36} className="text-[#e8e6dc]" />
      </div>

      <h3 className="text-xl font-semibold mb-2">Member Directory</h3>
      <p className="text-sm text-[#d6d6d6] mb-6">
        Find & Connect with Members
      </p>

      <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-2 text-sm font-medium rounded top-2">
        Search Members
      </button>
    </div>

    {/* Card 2 */}
    <div className="text-center text-white">
      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#6f818c] flex items-center justify-center">
        <Calendar size={36} className="text-[#e8e6dc]" />
      </div>

      <h3 className="text-xl font-semibold mb-2">Upcoming Events</h3>
      <p className="text-sm text-[#d6d6d6] mb-6">
        Check Out Upcoming Events
      </p>

      <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-2 text-sm font-medium rounded top-2">
        View Events
      </button>
    </div>

    {/* Card 3 */}
    <div className="text-center text-white">
      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#6f818c] flex items-center justify-center">
        <ShoppingBag size={36} className="text-[#e8e6dc]" />
      </div>

      <h3 className="text-xl font-semibold mb-2">Latest Products</h3>
      <p className="text-sm text-[#d6d6d6] mb-6">
        View Latest Products From Our Members
      </p>

      <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-2 text-sm font-medium rounded">
        View Products
      </button>
    </div>

  </div>
</div>
<NewMembers />
<MembersBlogArticles />
<Reviews />
<GowdaConnectCities />
<Product />
<Classifieds />
<Properties />
<PhotoAlbum />
<Videos />
<Footer />
        </div>
      </div>
    </div>
  );
}
