import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import planeBanner from "../../assets/Banner-Uni-Search 1.png";

export default function BannerSearchSection() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="relative w-full max-w-[1440px] mx-auto overflow-hidden border-none outline-none shadow-none">
        {/* Plane Image */}
        <img
          src={planeBanner}
          alt="Plane Banner"
          className="w-full h-auto object-cover block border-none outline-none ring-0 shadow-none select-none pointer-events-none"
          draggable={false}
        />

        {/* Search Box */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[85%] bg-white px-6 py-6 rounded-[40px] shadow-lg flex flex-wrap items-center justify-center gap-4">
          <h2 className="w-full text-center font-semibold text-gray-800 text-lg">
            Find What You’re Looking For
          </h2>

          {/* Animated Search Input */}
          <motion.input
            whileHover={{ borderColor: "#ef4444", scale: 1.02 }}
            transition={{ duration: 0.3 }}
            type="text"
            placeholder="Search..."
            className="flex-1 min-w-[150px] md:min-w-[200px] border-2 border-red-500 rounded-full px-4 py-2 focus:outline-none"
          />

          <select className="min-w-[150px] border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-700">
            <option>Applications</option>
            <option>Programs</option>
          </select>

          <select className="min-w-[150px] border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-500">
            <option>Select region</option>
          </select>

          {/* Animated Icon Button */}
          <motion.button
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition"
          >
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-600" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
