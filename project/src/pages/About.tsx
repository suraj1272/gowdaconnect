import React from "react";
import {Link }from "react-router-dom";

export default function About() {
  return (
    <div className="bg-gray-50">
      {/* HERO SECTION */}
      <div className="relative h-[300px] w-full">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="About Gowda Connect"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold">About Gowda Connect</h1>
            <p className="mt-2 text-lg">
              Connecting Gowda Families Across the Globe
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 bg-white p-8 rounded shadow">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 mb-4">
            Gowda Connect is a community-driven platform built to connect
            Gowda-speaking individuals and families across cities and
            countries. Our mission is to make relocation, networking, and
            community support simple and accessible for everyone.
          </p>

          <p className="text-gray-600 mb-6">
            Whether you are looking for trusted Gowda professionals,
            entrepreneurs, doctors, job opportunities, rental properties, or
            simply a sense of belonging in a new city, Gowda Connect brings
            everything together under one roof.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 mb-6">
            Our mission is to empower the Gowda community by enabling
            meaningful connections, promoting local businesses, and creating a
            trusted digital ecosystem for collaboration, growth, and support.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            What We Offer
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Member Directory with city-based search</li>
            <li>Business listings and product showcases</li>
            <li>Job postings and career opportunities</li>
            <li>Property rentals and classified ads</li>
            <li>Blogs, events, photos, and video libraries</li>
          </ul>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="bg-white p-6 rounded shadow h-fit">
          <h3 className="text-xl font-semibold mb-4">Why Gowda Connect?</h3>
          <ul className="space-y-3 text-gray-600">
            <li>✅ Trusted Gowda community</li>
            <li>✅ Easy city-based discovery</li>
            <li>✅ Support for businesses & professionals</li>
            <li>✅ Secure and verified members</li>
          </ul>
<Link to="/register">
          <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded font-semibold">
            Become a Member
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
