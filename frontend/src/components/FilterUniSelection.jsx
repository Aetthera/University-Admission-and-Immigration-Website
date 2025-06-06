import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import schoolHat from '../assets/schoolhat.png';
import bookMarkIcon from '../assets/bookmarkIcon.png';
import deleteSymbol from '../assets/deleteSymbol.png';
import universities from '../data/quebec_universities_detailed.json'; 

export default function FilterUniSelection() {
  const [showSortBy, setShowSortBy] = useState(true);
  const [showSchoolFilter, setShowSchoolFilter] = useState(true);
  const [showProgramFilter, setShowProgramFilter] = useState(true);

  return (
    <div className="flex w-full bg-[#F5F5F5] px-6 py-3">
      {/* Filter Section */}
      <div className="max-w-[300px] w-full h-fit bg-[#FFFFFF] p-6 rounded-[30px] mr-6">

        {/* First group of checkmark buttons */}
        <div>
          <input type="checkbox" id="ShowSaved" className="mr-2" />
          <label htmlFor="ShowSaved" className="text-black font-semibold"> Show Saved </label>
        </div>
        <div>
          <input type="checkbox" id="ShowUnsaved" className="mr-2" />
          <label htmlFor="ShowUnsaved" className="text-black font-semibold"> Show Unsaved </label>
        </div>
        <div>
          <input type="checkbox" id="ShowAll" className="mr-2" />
          <label htmlFor="ShowAll" className="text-black font-semibold"> Show All </label>
        </div>

        {/* Divider */}
        <hr className="border-gray-300 mt-5 mb-5" />

        {/* Sort By Filter */}
        <div
          className="flex items-center justify-between text-black cursor-pointer border-none rounded-lg px-3 py-2"
          onClick={() => setShowSortBy(!showSortBy)}
        >
          <span className="font-semibold text-xl">Sort by</span>
          <MdOutlineKeyboardArrowDown
            size={24}
            className={`transition-transform duration-300 ${showSortBy ? 'rotate-180' : ''}`}
          />
        </div>
        {showSortBy && (
          <div>
            <hr className="border-gray-300 mt-5 mb-5" />
            <div>
              <input type="checkbox" id="Saved" className="mr-2" />
              <label htmlFor="Saved" className="text-black font-semibold"> Saved </label>
            </div>
            <div>
              <input type="checkbox" id="Title" className="mr-2" />
              <label htmlFor="Title" className="text-black font-semibold"> Title </label>
            </div>
            <div>
              <input type="checkbox" id="TuitionPrice" className="mr-2" />
              <label htmlFor="TuitionPrice" className="text-black font-semibold"> Tuition Price </label>
            </div>
          </div>
        )}

        {/* Divider */}
        <hr className="border-gray-300 mt-5 mb-5" />

        {/* School Filters Filter */}
        <div
          className="flex items-center justify-between text-black cursor-pointer border-none rounded-lg px-3 py-2"
          onClick={() => setShowSchoolFilter(!showSchoolFilter)}
        >
          <span className="font-semibold text-xl">School Filters</span>
          <MdOutlineKeyboardArrowDown
            size={24}
            className={`transition-transform duration-300 ${showSchoolFilter ? 'rotate-180' : ''}`}
          />
        </div>
        {showSchoolFilter && (
          <div>
            <hr className="border-gray-300 mt-5 mb-5" />

            {/* Country Filter */}
            <div>
              <p className="text-gray-700">Country</p>
              <select className="bg-white text-gray-400 w-full border border-gray-300 rounded-lg">
                <option value="">Choose Country</option>
                <option value="Canada">Canada</option>
                <option value="USA">USA</option>
              </select>
            </div>
            {/* Blueprint of added country */}
            <div className="flex items-center bg-black rounded-2xl w-fit px-3 mt-2">
              <p className="text-gray-300 text-xl">Canada</p>
              <button className="bg-black px-1">
                <img src={deleteSymbol} className="w-5 h-5" />
              </button>
            </div>

            <hr className="border-gray-300 mt-5 mb-5" />

            <div>
              <p className="text-gray-700">Type</p>
              <input type="checkbox" id="University" className="mr-2" />
              <label htmlFor="University" className="text-black font-semibold"> University </label>
            </div>
            <div>
              <input type="checkbox" id="College" className="mr-2" />
              <label htmlFor="College" className="text-black font-semibold"> College </label>
            </div>
          </div>
        )}

        {/* Divider */}
        <hr className="border-gray-300 mt-5 mb-5" />

        {/* Program Filters Filter */}
        <div
          className="flex items-center justify-between text-black cursor-pointer border-none rounded-lg px-3 py-2"
          onClick={() => setShowProgramFilter(!showProgramFilter)}
        >
          <span className="font-semibold text-xl">Program Filters</span>
          <MdOutlineKeyboardArrowDown
            size={24}
            className={`transition-transform duration-300 ${showProgramFilter ? 'rotate-180' : ''}`}
          />
        </div>
        {showProgramFilter && (
          <div>
            <hr className="border-gray-300 mt-5 mb-5" />

            <div>
              <p className="text-gray-700">Level</p>
              <input type="checkbox" id="Bachelor" className="mr-2" />
              <label htmlFor="Bachelor" className="text-black font-semibold"> Bachelor </label>
            </div>
            <div>
              <input type="checkbox" id="Master" className="mr-2" />
              <label htmlFor="Master" className="text-black font-semibold"> Master </label>
            </div>
            <div>
              <input type="checkbox" id="PhD" className="mr-2" />
              <label htmlFor="PhD" className="text-black font-semibold"> PhD </label>
            </div>
            <div>
              <input type="checkbox" id="DEC" className="mr-2" />
              <label htmlFor="DEC" className="text-black font-semibold"> DEC </label>
            </div>
            <div>
              <input type="checkbox" id="AEC" className="mr-2" />
              <label htmlFor="AEC" className="text-black font-semibold"> AEC </label>
            </div>

            <hr className="border-gray-300 mt-5 mb-5" />

            {/* Tuition Fee Range Filter */}
            <div className="w-full max-w-md mx-auto">
              <p className="text-gray-700">Tuititon Fee</p>
              <div className="flex items-center space-x-4">
                <p className="text-sm text-gray-700">0$</p>
                <input type="range" min="0" max="120000" className="w-full outline-none my-slider" />
                <p className="text-sm text-gray-700">120 000$</p>
              </div>
            </div>

            <hr className="border-gray-300 mt-5 mb-5" />

            {/* Target Discipline Filter */}
            <div>
              <p className="text-gray-700">Target Discipline</p>
              <select className="bg-white text-gray-400 w-full border border-gray-300 rounded-lg">
                <option value="">Choose Discipline</option>
                <option value="Interior Design">Interior Design</option>
              </select>
            </div>

            <hr className="border-gray-300 mt-5 mb-5" />

            {/* Target Major Filter */}
            <div>
              <p className="text-gray-700">Target Major</p>
              <select className="bg-white text-gray-400 w-full border border-gray-300 rounded-lg">
                <option value="">Choose Major</option>
                <option value="Fashion">Fashion</option>
                <option value="Digital Marketing">Digital Marketing</option>
              </select>
            </div>

            <hr className="border-gray-300 mt-5 mb-5" />

            {/* Deadline Filter */}
            <div>
              <p className="text-gray-700">Deadline</p>
              <select className="bg-white text-gray-400 w-full border border-gray-300 rounded-lg">
                <option value="">Choose Deadline Date</option>
              </select>
            </div>
            <hr className="border-gray-300 mt-5 mb-5" />
          </div>
        )}

        {/* Clear All and Apply filters Button */}
        <div className="flex justify-between mt-5">
          <button className="bg-white text-blue-500 px-4 py-2 rounded-full border border-blue-500 hover:bg-blue-500 hover:text-white">
            Clear All
          </button>
          <button className="bg-white text-blue-500 px-4 py-2 rounded-full border border-blue-500 hover:bg-blue-500 hover:text-white">
            Apply Filters
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex-1 bg-red-100 mx-2">
        <div className="bg-[#F5F5F5] w-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 p-4">
          {universities.map((uni, i) => (
            <div key={i}>
              <div className="bg-[#FFFFFF] rounded-[50px] shadow-md p-6 flex flex-col h-full w-full relative">
                {/* University Logo and Title */}
                <div className="flex mb-2 justify-between">
                  <div className="flex">
                    <img
                      src={schoolHat}
                      alt="University Logo"
                      className="w-16 h-16 mb-4 border border-gray-300 rounded-full"
                    />
                    <div className="ml-4 mt-2">
                      <p className="text-black font-bold text-lg md:text-xl break-words">{uni["University Name"]}</p>
                      <p className="text-black truncate text-lg">On Campus</p>
                    </div>
                  </div>
                  {/* Bookmark Icon */}
                  <div>
                    <img
                      src={bookMarkIcon}
                      alt="Bookmark Icon"
                      className="w-7 h-9 absolute top-0 right-14"
                    />
                  </div>
                </div>

                <p className="text-2xl text-black mb-4 break-words">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                </p>

                <div className="flex items-center justify-between mb-4 text-black font-semibold text-lg">
                  <p className="truncate">Location</p>
                  <p className="truncate">{uni["Address"]}</p>
                </div>
                <div className="flex items-center justify-between mb-4 text-black font-semibold text-lg">
                  <p className="truncate">Duration</p>
                  <p className="truncate">48 months</p>
                </div>
                <div className="flex items-center justify-between mb-4 text-black font-semibold text-lg">
                  <p className="truncate">Start Date</p>
                  <p className="truncate">Jan 2025</p>
                </div>
                <div className="flex items-center justify-between mb-4 text-black font-semibold text-lg">
                  <p className="truncate">End date</p>
                  <p className="truncate">May 2027</p>
                </div>
                <div className="flex items-center justify-between mb-10 text-black font-semibold text-lg">
                  <p className="truncate">Tuition Fee</p>
                  <p className="truncate">$30,830 CAN</p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row mt-auto justify-between gap-4 min-w-0 mx-4">
                  <button className="bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-full truncate px-4 py-2">
                    Apply
                  </button>
                  <button className="bg-white text-blue-500 border-blue-500 border-2 rounded-lg hover:bg-blue-600 hover:text-white w-full truncate px-4 py-2">
                    More Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
