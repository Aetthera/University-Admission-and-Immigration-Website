import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import planeBanner from "../../assets/banner-img-v1.png";

export default function BannerSearchSection() {
  return (
    <section className="w-full bg-white overflow-hidden -mt-24">
      <div className="relative w-full max-w-[1440px] mx-auto overflow-hidden border-none outline-none shadow-none mb-20">
        {/* Plane Image */}
        <img
          src={planeBanner}
          alt="Plane Banner"
          className="w-full max-h-[1200px]  object-contain object-left block border-none outline-none ring-0 shadow-none select-none pointer-events-none -translate-x-15 -translate-y-8 md:-translate-x-16 md:-translate-y-10 "
          draggable={false}
        />

        {/* Search Box */}
         <div className="relative w-full flex justify-center">
                   <div className="relative z-[50] mt-[-230px] bg-white rounded-[3vw] shadow-[0_0_60px_rgba(0,0,0,0.05)] px-6 py-5 pointer-events-auto w-[1200px] h-[170px]  md:translate-x-16   mx-auto">
                        <p className="text-xl font-medium text-black mb-9 text-center">
                            Find What You're Looking For
                        </p>

                        <div className="flex flex-wrap gap-1 items-center justify-center">
                            <div className="p-[2px] rounded-full bg-gradient-to-r from-[#256DB2] to-[#E53E3E] min-w-[300px] max-w-[500px] flex-grow">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full h-[45px] px-5 rounded-full border-none outline-none bg-white text-gray-800"
                                />
                            </div>

                            <select className="h-[45px] w-[160px] px-4 rounded-full border border-gray-200 text-black bg-white font-medium appearance-none">
                                <option>Applications</option>
                                <option>Education</option>
                                <option>Immigration</option>
                            </select>

                            <select className="h-[45px] w-[160px] px-4 rounded-full border border-gray-200 text-gray-400 bg-white font-normal appearance-none">
                                <option disabled selected>Select Region</option>
                                <option>Canada</option>
                                <option>UK</option>
                            </select>


                            <button className="rounded-full bg-gray-100 w-11 h-11 px-2 flex items-center justify-center">
                                <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
                            </button>
                        </div>
                    </div>
                </div>

       
         
        
      </div>
    </section>
  );
}
