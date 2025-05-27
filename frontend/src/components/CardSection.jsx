import { FaRegSmile } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import Vector from "../assets/Vector.png";

function FeatureCard({ icon: Icon, title, text }) {
  return (
    <div className="group bg-blue-800/80 rounded-2xl p-6 w-72 min-h-[250px] relative flex flex-col items-start shadow-xl transition-all duration-300 hover:bg-white hover:scale-105 cursor-pointer">
      <div className="absolute -top-6 left-6 transition-all duration-300 bg-white text-blue-700 group-hover:bg-blue-600 group-hover:text-white rounded-full p-3 shadow">
        <Icon size={24} />
      </div>
      <h3 className="mt-8 mb-2 text-lg font-bold text-white group-hover:text-gray-900">
        {title}
      </h3>
      <p className="text-blue-100 group-hover:text-gray-700 mb-4">
        {text}
      </p>
      <button className="mt-auto px-4 py-2 border border-blue-600 rounded-lg text-blue-600 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-300 bg-white">
        Learn More
      </button>
    </div>
  );
}

export default function Middle() {
  return (
    <div className="min-h-screen bg-blue-600 flex items-center justify-center relative overflow-hidden">
      <img
        src={Vector}
        alt="decorative vector"
        className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 max-w-5xl w-full px-6">
        {/* Header */}
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Lorem Ipsum
        </h2>

        {/* Cards Row */}
        <div className="flex items-center justify-center gap-6">
          <FeatureCard
            icon={FaRegSmile}
            title="Lorem Ipsum"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet."
          />
          <FeatureCard
            icon={IoCheckmarkCircleOutline}
            title="Lorem Ipsum"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet."
          />
          <FeatureCard
            icon={FaRegStar}
            title="Lorem Ipsum"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet."
          />
          <FeatureCard
            icon={MdOutlinePhoneInTalk}
            title="Lorem Ipsum"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet."
          />
        </div>
      </div>
    </div>
  );
}
