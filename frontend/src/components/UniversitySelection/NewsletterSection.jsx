import React from "react";
import redHalo from "../../assets/VectorRed.png";
import blueHalo from "../../assets/VectorBlue.png";
import mailIllustration from "../../assets/illustration-mail.png";

export default function NewsletterSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 px-4">
      {/* Background halos */}
      <img
        src={blueHalo}
        className="absolute left-0 top-0 w-64 md:w-[350px] opacity-30 z-0"
        alt="blue halo"
      />
      <img
        src={redHalo}
        className="absolute left-0 bottom-0 w-64 md:w-[350px] opacity-30 z-0"
        alt="red halo"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Text + Input */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Join Our Newsletter!
          </h2>
          <p className="text-sm text-gray-700">
            Just send us your email in the box below!
          </p>
          <div className="flex items-center rounded-full bg-white shadow-lg w-full max-w-lg overflow-hidden">
            <input
              type="email"
              placeholder="Your email"
              className="flex-grow px-4 py-3 text-sm focus:outline-none"
            />
            <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-300 transition text-sm font-medium">
              Send
            </button>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={mailIllustration}
            alt="Newsletter Illustration"
            className="w-[300px] md:w-[400px]"
          />
        </div>
      </div>
    </section>
  );
}
