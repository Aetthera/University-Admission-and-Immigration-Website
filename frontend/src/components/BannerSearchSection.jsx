import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import planeBanner from "../assets/Banner-Uni-Search.png";

export default function BannerSearchSection() {
  return (
    <section className="w-full bg-white">
      {/* Image with text & search overlay */}
      <div className="relative w-full max-w-[1440px] mx-auto">
        {/* Plane Image */}
        <img
          src={planeBanner}
          alt="Plane Banner"
          className="w-full h-auto object-cover"
        />
        <div className="rounded-full bg-blue-500 p-4 absolute bottom-[170px] right-0 w-[400px] h-[50px] flex items-center justify-center">
          <div className="flex items-center justify-between w-full">
          <p className="text-sm font-semibold flex-nowrap">X Need some help?</p>
          </div>
          <button className="absolute right-1 w-[200px] h-[44px] bg-blue-950 rounded-full shadow-md hover:bg-gray-100 transition">
            <p className="text-sm font-semibold flex-nowrap text-white">Speak to an Expert</p>
          </button>
        </div>
        {/* Search Box Container */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[85%] bg-white px-6 py-6 rounded-[40px] shadow-lg flex flex-wrap items-center justify-center gap-4">
          <h2 className="w-full text-center font-semibold text-gray-800 text-lg">
            Find What You’re Looking For
          </h2>

          <input
            type="text"
            placeholder="Search..."
            className="bg-white flex-1 min-w-[150px] md:min-w-[200px] border-2 rounded-full px-4 py-2 border-red-500 focus:outline-none"
          />

          <select className="bg-white min-w-[150px] border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-700">
            <option>Applications</option>
            <option>Programs</option>
          </select>

          <select className="bg-white min-w-[150px] border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-500">
            <option>Select region</option>
          </select>

          <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
