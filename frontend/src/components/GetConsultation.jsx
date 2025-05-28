import Person from '../assets/person.png';
import Vector1 from '../assets/lineAroundPerson.png';

export default function GetConsultation() {
  return (
    <section className="w-full min-h-[430px] bg-white flex flex-col md:flex-row items-center justify-between px-4 py-10 md:py-0 overflow-hidden relative">

      {/* Left: Text */}
      <div className="w-1/2 flex flex-col justify-start pl-[140px] mt-8 md:mt-0">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Lorem Ipsum</h2>
        <p className="text-gray-600 mb-4 max-w-[40vh]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="text-gray-600 mb-6 max-w-lg">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <div className="flex gap-4">
          <button className="border border-red-700 text-black bg-white px-5 py-2 rounded-full hover:bg-blue-50 transition">More Info</button>
          <button className="bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600 transition">Get Consultation</button>
        </div>
      </div>

      {/* Right: Vector & Person */}
      <div className="w-1/2 relative flex items-end justify-end pr-[80px] min-h-[320px] ">
        <img
          src={Vector1}
          alt="decorative vector"
          className="absolute bottom-0 w-[280px] left-0 right-[100px] h-[760px] z-0  pointer-events-none select-none"
        />
        <img
          src={Person}
          alt="Person"
          className="relative w-[300px] z-10 right-[100px] h-[760px] w-[560px]"
        />
      </div>
    </section>
  );
}