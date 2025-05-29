import React from "react";
import redHalo from "../../assets/VectorRed.png";
import blueHalo from "../../assets/VectorBlue.png";
import mailIllustration from "../../assets/illustration-mail.png";

export default function NewsletterSection() {
  return (
 <section className="relative w-full bg-white pt-0 pb-16 px-6 overflow-hidden">

      {/* Background halos */}
       <img
              src={blueHalo}
              className="absolute left-[1%] top-[5%] w-[30vw] max-w-[600px] opacity-30 z-0"
              alt="blue halo"
            />
            <img
              src={redHalo}
              className="absolute left-[5%] bottom-[5%] w-[30vw] max-w-[500px] opacity-30 z-0"
              alt="red halo"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text + Input */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Join Our Newsletter!
          </h2>
          <p className="text-sm text-gray-700">
            Just send us your email in the box below!
          </p>
          <div className="flex items-center rounded-full bg-white shadow-lg w-full max-w-lg mx-auto md:mx-0 overflow-hidden">
            <input
              type="email"
              placeholder="Your email"
              className="flex-grow px-4 py-3 text-sm focus:outline-none"
            />
           <button className="px-8 py-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full hover:bg-gray-300 transition-all shadow-none border-none outline-none focus:outline-none">
              
              Send
            </button>
          </div>
        </div>

        {/* Illustration */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={mailIllustration}
            alt="Newsletter Illustration"
            className="w-[260px] md:w-[400px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}