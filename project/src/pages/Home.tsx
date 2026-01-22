import React from 'react';
import { Users, Calendar, ShoppingBag, Search, MapPin } from 'lucide-react';
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack.jsx'; // Adjust path if needed

// Component Imports
import NewMembers from '../components/NewMembers';
import MembersBlogArticles from '../components/NewBlog';
import Reviews from '../components/Review';
import GowdaConnectCities from '../components/GowdaConnectCities';
import Product from '../components/Products';
import Classifieds from '../components/Classsfied';
import Properties from '../components/Properties';
import PhotoAlbum from '../components/PhotoAlubm';
import Videos from '../components/Videos';

export function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <ScrollStack 
        useWindowScroll={true} 
        itemStackDistance={50} // Distance between stacked cards at top
        itemDistance={50} // Margin between cards before they stack
        itemScale={0.05} // How much the cards shrink
      >
        
        {/* --- CARD 1: HERO & SEARCH --- */}
        <ScrollStackItem itemClassName="bg-white h-auto min-h-[600px] flex flex-col justify-center items-center rounded-[40px] border border-gray-200 shadow-xl overflow-hidden">
          <div className="w-full max-w-4xl px-8 py-12 text-center">
            {/* Logo Section */}
            <div className="inline-block mb-8">
              <svg className="w-40 h-40 mx-auto" viewBox="0 0 200 200" fill="none">
                <text x="100" y="120" fontSize="60" fontWeight="bold" textAnchor="middle" fill="black">Gowda</text>
                <circle cx="160" cy="60" r="30" fill="none" stroke="#f97316" strokeWidth="3"/>
              </svg>
              <h1 className="text-4xl font-bold text-gray-800 mt-4">Connect. Grow. Thrive.</h1>
            </div>

            {/* Search Box */}
            <div className="bg-yellow-50 rounded-2xl p-8 shadow-sm border border-yellow-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-left">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Search by Name or Keyword:</label>
                  <div className="relative">
                    <Search className="text-gray-400 absolute top-3 left-3" size={20} />
                    <input
                      type="text"
                      placeholder="Name or Keyword"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Search by City:</label>
                  <div className="relative">
                    <MapPin className="text-gray-400 absolute top-3 left-3" size={20} />
                    <input
                      type="text"
                      placeholder="City or Post Code"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    />
                  </div>
                </div>
              </div>
              <button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3.5 rounded-xl font-bold text-lg shadow-lg shadow-orange-500/30 transition-all">
                Search Now
              </button>
            </div>
          </div>
        </ScrollStackItem>

        {/* --- CARD 2: QUICK ACTIONS (Dark Card) --- */}
        <ScrollStackItem itemClassName="bg-[#667783] h-auto min-h-[500px] flex items-center justify-center rounded-[40px] shadow-2xl overflow-hidden">
          <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-12 px-8 py-12">
            
            {/* Action 1 */}
            <div className="text-center text-white group cursor-pointer">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#6f818c] group-hover:bg-orange-500 transition-all duration-300 flex items-center justify-center shadow-lg">
                <Users size={40} className="text-[#e8e6dc]" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Member Directory</h3>
              <p className="text-gray-300 mb-6">Find & Connect with Members</p>
              <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 transition px-8 py-2.5 rounded-full text-sm font-medium">
                Search Members
              </button>
            </div>

            {/* Action 2 */}
            <div className="text-center text-white group cursor-pointer">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#6f818c] group-hover:bg-orange-500 transition-all duration-300 flex items-center justify-center shadow-lg">
                <Calendar size={40} className="text-[#e8e6dc]" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Upcoming Events</h3>
              <p className="text-gray-300 mb-6">Check Out Upcoming Events</p>
              <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 transition px-8 py-2.5 rounded-full text-sm font-medium">
                View Events
              </button>
            </div>

            {/* Action 3 */}
            <div className="text-center text-white group cursor-pointer">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#6f818c] group-hover:bg-orange-500 transition-all duration-300 flex items-center justify-center shadow-lg">
                <ShoppingBag size={40} className="text-[#e8e6dc]" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Latest Products</h3>
              <p className="text-gray-300 mb-6">View Products From Members</p>
              <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 transition px-8 py-2.5 rounded-full text-sm font-medium">
                View Products
              </button>
            </div>
          </div>
        </ScrollStackItem>

        {/* --- CARD 3: NEW MEMBERS --- */}
        <ScrollStackItem itemClassName="bg-white h-auto rounded-[40px] shadow-xl border border-gray-100 overflow-hidden p-4 md:p-8">
          <NewMembers />
        </ScrollStackItem>

        {/* --- CARD 4: BLOGS & REVIEWS --- */}
        <ScrollStackItem itemClassName="bg-gray-50 h-auto rounded-[40px] shadow-xl border border-gray-200 overflow-hidden p-4 md:p-8">
          <div className="space-y-12">
            <MembersBlogArticles />
            <div className="border-t border-gray-200 pt-12">
               <Reviews />
            </div>
          </div>
        </ScrollStackItem>

        {/* --- CARD 5: MARKETPLACE (Products & Classifieds) --- */}
        <ScrollStackItem itemClassName="bg-white h-auto rounded-[40px] shadow-xl border border-gray-100 overflow-hidden p-4 md:p-8">
           <div className="grid gap-12">
             <Product />
             <Classifieds />
           </div>
        </ScrollStackItem>

        {/* --- CARD 6: LOCATIONS & PROPERTIES --- */}
        <ScrollStackItem itemClassName="bg-[#fffbf0] h-auto rounded-[40px] shadow-xl border border-orange-100 overflow-hidden p-4 md:p-8">
          <GowdaConnectCities />
          <div className="mt-12">
            <Properties />
          </div>
        </ScrollStackItem>

        {/* --- CARD 7: MEDIA (Photos & Videos) --- */}
        <ScrollStackItem itemClassName="bg-black text-white h-auto min-h-[600px] rounded-[40px] shadow-2xl overflow-hidden p-4 md:p-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-orange-500">Community Gallery</h2>
          <PhotoAlbum />
          <div className="mt-12">
            <Videos />
          </div>
        </ScrollStackItem>

      </ScrollStack>
    </div>
  );
}