import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import schoolHat from '../assets/schoolhat.png';
import bookMarkIcon from '../assets/bookmarkIcon.png';
import { UilBookOpen } from '@iconscout/react-unicons';
import { UilUsersAlt } from '@iconscout/react-unicons';
import { UilLocationPoint } from '@iconscout/react-unicons';
import { UilExternalLinkAlt } from '@iconscout/react-unicons';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";

export default function FilterUniSelection() {
  const [filters, setFilters] = useState({
    sortBy: {
      Saved: false,
      Title: false,
      TuitionPrice: false,
    },
    country: "",
    type: {
      University: false,
      College: false,
      Polytechnic: false,
    },
    level: {
      Bachelor: false,
      Master: false,
      PhD: false,
      DEC: false,
      AEC: false,
    },
    tuitionMax: 120000,
    tuitionMin: 0,
    discipline: [],
    major: [],
    deadline: null,
  });

  // filter states
  const [showSortBy, setShowSortBy] = useState(true);
  const [showSchoolFilter, setShowSchoolFilter] = useState(true);
  const [showProgramFilter, setShowProgramFilter] = useState(true);

  const [appliedFilters, setAppliedFilters] = useState({});
  const [universities, setUniversities] = useState([]);

  // Dynamic fetch for university JSON files from public folder
  useEffect(() => {
    const jsonFiles = [
      '/data/done/canadian_universities.json',
      '/data/done/us_universities.json',
      '/data/done/denmark_universities.json',
      '/data/done/finland_universities.json',
      '/data/done/german_universities.json',
      '/data/done/italian_universities.json',
      '/data/done/norwegian_universities.json'
    ];

    async function fetchUniversities() {
      try {
        // Use Promise.all to fetch and parse all files in parallel
        const results = await Promise.all(
          jsonFiles.map(file => fetch(file).then(res => res.json()))
        );
        const merged = results.flat(); // Merge all universities into one array
        setUniversities(merged);
      } catch (error) {
        console.error("Failed to fetch university data", error);
      }
    }

    fetchUniversities();
  }, []);

  // Filtered results using type, country and tuition range
  const filteredUniversities = universities.filter(uni => {
    const { type = {}, country = '', tuitionMin = 0, tuitionMax = 0, deadline = '' } = appliedFilters;
    const { University, College, Polytechnic } = type;

    const uniType = uni.type?.toLowerCase();
    const uniCountry = uni.country || '';
    const uniTuition = uni.tuition || 0;

    // Checking type filter
    const matchType = (!University && !College && !Polytechnic) || // If no type is selected, allow all types
      (University && uniType === "university") ||
      (College && uniType === "college") ||
      (Polytechnic && uniType === "polytechnic");

    // Checking country filter
    const matchCountry = !country || // If no country is selected, allow all countries
      uniCountry.toLowerCase() === country.toLowerCase();

    // Checking tuition filter
    const matchTuition =
      (!tuitionMin || uniTuition >= tuitionMin) && 
      (!tuitionMax || uniTuition <= tuitionMax);

    // Checking deadline filter
    const deadlineString = deadline
      ? `${deadline.getFullYear()}-${String(deadline.getMonth() + 1).padStart(2, '0')}`
      : "";

    const matchDeadline =
      !deadlineString || (uni.endDate && uni.endDate.startsWith(deadlineString));

    return matchType && matchCountry && matchTuition; // ADD "&& matchDeadline" WHEN DEADLINE VARIABLE IS IMPLEMENTED
  });

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const universitiesPerPage = 21;

  // Pagination logic
  const indexOfLast = currentPage * universitiesPerPage;
  const indexOfFirst = indexOfLast - universitiesPerPage;

  // Sort universities based 'SORT BY' filters
  let sortedUniversities = [...filteredUniversities];

  // Sort alphabetically by Title if selected
  if (appliedFilters.sortBy?.Title) {
    sortedUniversities.sort((firstName, secondName) =>
      (firstName.name || "").toLowerCase().localeCompare((secondName.name || "").toLowerCase())
    );
  }

  // Then by Tuition if selected 
  if (appliedFilters.sortBy?.TuitionPrice) {
    sortedUniversities.sort((firstPrice, secondPrice) => (firstPrice.tuition || 0) - (secondPrice.tuition || 0));
  }

  // Prioritize saved cards if saved is checked
  if (appliedFilters.sortBy?.Saved) {
    sortedUniversities.sort((a, b) => {

      const aIsSaved = a.saved === true;
      const bIsSaved = b.saved === true;

      // Show saved universities first
      if (aIsSaved && !bIsSaved) return -1;
      if (!aIsSaved && bIsSaved) return 1;
      
      // If both are saved or both unsaved, keep their order
      return 0;
    });
  }


  const currentUniversities = sortedUniversities.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredUniversities.length / universitiesPerPage);

  // Pop up modal state
  const [modalUniversity, setModalUniversity] = useState(null);

  // Lock scroll when modal is open
  useEffect(() => {
    if (modalUniversity) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [modalUniversity]);

  // Number formatting helper
  function formatNumber(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  // Format month and year for deadline
  function formatMonthYear(date) {
    return date.toLocaleString('default', { month: 'long', year: 'numeric' });
  }


  function handleClearAll() {
    setFilters({
      sortBy: {
        Saved: false,
        Title: false,
        TuitionPrice: false,
      },
      country: "",
      type: {
        University: false,
        College: false,
        Polytechnic: false,
      },
      level: {
        Bachelor: false,
        Master: false,
        PhD: false,
        DEC: false,
        AEC: false,
      },
      tuitionMax: 120000,
      tuitionMin: 0,
      discipline: [],
      major: [],
      deadline: null,
    });
  }


  return (
    <div className="flex w-full bg-[#F5F5F5] px-6 py-3">
      {/* Filter Section */}
      <div className="max-w-[300px] w-full h-fit bg-[#FFFFFF] p-6 rounded-[30px] mr-6">
        {/* Sort By Filter */}
        <div
          className="flex items-center justify-between text-black cursor-pointer border-none px-3 py-2"
          onClick={() => setShowSortBy(!showSortBy)}
        >
          <span className="font-semibold text-xl">Sort by</span>
          {showSortBy ? (
            <FaMinus size={15}/>
          ) : (
            <FaPlus size={15}/>
          )}
        </div>
        {showSortBy && (
          <div>
            {/* Divider */}
            <hr className="border-gray-300 mt-5 mb-5" />
            <div>
              <input
                type="checkbox"
                id="Saved"
                className="mr-2"
                checked={filters.sortBy.Saved}
                onChange={e =>
                  setFilters(filter => ({
                    ...filter,
                    sortBy: { ...filter.sortBy, Saved: e.target.checked }
                  }))
                }
              />
              <label htmlFor="Saved" className="text-black font-semibold"> Saved </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="Title"
                className="mr-2"
                checked={filters.sortBy.Title}
                onChange={e =>
                  setFilters(filter => ({
                    ...filter,
                    sortBy: { ...filter.sortBy, Title: e.target.checked }
                  }))
                }
              />
              <label htmlFor="Title" className="text-black font-semibold"> Title </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="TuitionPrice"
                className="mr-2"
                checked={filters.sortBy.TuitionPrice}
                onChange={e =>
                  setFilters(filter => ({
                    ...filter,
                    sortBy: { ...filter.sortBy, TuitionPrice: e.target.checked }
                  }))
                }
              />
              <label htmlFor="TuitionPrice" className="text-black font-semibold"> Tuition Price </label>
            </div>
          </div>
        )}

        {/* Divider */}
        <hr className="border-gray-300 mt-5 mb-5" />

        {/* School Filters Filter */}
        <div
          className="flex items-center justify-between text-black cursor-pointer border-none px-3 py-2"
          onClick={() => setShowSchoolFilter(!showSchoolFilter)}
        >
          <span className="font-semibold text-xl">School Filters</span>
          {showSchoolFilter ? (
            <FaMinus size={15}/>
          ) : (
            <FaPlus size={15}/>
          )}
        </div>
        {showSchoolFilter && (
          <div>
            {/* Divider */}
            <hr className="border-gray-300 mt-5 mb-5" />
            <div>
              <p className="text-gray-700">Country</p>
              <select
                className="bg-white text-gray-400 w-full border border-gray-300 rounded-lg h-10 pl-1"
                value={filters.country}
                onChange={e =>
                  setFilters(filter => ({ ...filter, country: e.target.value }))
                }
              >
                <option value="">Choose Country</option>
                <option value="Canada">Canada</option>
                <option value="United States">United States</option>
                <option value="Denmark">Denmark</option>
                <option value="Finland">Finland</option>
                <option value="Germany">Germany</option>
                <option value="Italy">Italy</option>
                <option value="Norway">Norway</option>
              </select>
            </div>
            {filters.country && (
              <div className="flex items-center bg-black rounded-2xl w-fit px-3 mt-2">
                <p className="text-gray-300 text-md">{filters.country}</p>
                <button
                  className="bg-black px-1"
                  onClick={() => setFilters(filter => ({ ...filter, country: "" }))}
                  type="button"
                >
                  &times;
                </button>
              </div>
            )}
            {/* Divider */}
            <hr className="border-gray-300 mt-5 mb-5" />

            {/* School type Filter */}
            <div>
              <p className="text-gray-700">Type</p>
              <input
                type="checkbox"
                id="University"
                className="mr-2"
                checked={filters.type.University}
                onChange={e =>
                  setFilters(filter => ({
                    ...filter,
                    type: { ...filter.type, University: e.target.checked }
                  }))
                }
              />
              <label htmlFor="University" className="text-black font-semibold"> University </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="College"
                className="mr-2"
                checked={filters.type.College}
                onChange={e =>
                  setFilters(filter => ({
                    ...filter,
                    type: { ...filter.type, College: e.target.checked }
                  }))
                }
              />
              <label htmlFor="College" className="text-black font-semibold"> College </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="Polytechnic"
                className="mr-2"
                checked={filters.type.Polytechnic}
                onChange={e =>
                  setFilters(filter => ({
                    ...filter,
                    type: { ...filter.type, Polytechnic: e.target.checked }
                  }))
                }
              />
              <label htmlFor="Polytechnic" className="text-black font-semibold"> Polytechnic </label>
            </div>
          </div>
        )}

        {/* Divider */}
        <hr className="border-gray-300 mt-5 mb-5" />

        {/* Program Filters Filter */}
        <div
          className="flex items-center justify-between text-black cursor-pointer border-none px-3 py-2"
          onClick={() => setShowProgramFilter(!showProgramFilter)}
        >
          <span className="font-semibold text-xl">Program Filters</span>
          {showProgramFilter ? (
            <FaMinus size={15}/>
          ) : (
            <FaPlus size={15}/>
          )}
        </div>
        {showProgramFilter && (
          <div>
            {/* Divider */}
            <hr className="border-gray-300 mt-5 mb-5" />

            {/* Degree level Filter */}
            <div>
              <p className="text-gray-700">Level</p>
              <div>
                <input
                  type="checkbox"
                  id="Bachelor"
                  className="mr-2"
                  checked={filters.level.Bachelor}
                  onChange={e =>
                    setFilters(filter => ({
                      ...filter,
                      level: { ...filter.level, Bachelor: e.target.checked }
                    }))
                  }
                />
                <label htmlFor="Bachelor" className="text-black font-semibold"> Bachelor </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="Master"
                  className="mr-2"
                  checked={filters.level.Master}
                  onChange={e =>
                    setFilters(filter => ({
                      ...filter,
                      level: { ...filter.level, Master: e.target.checked }
                    }))
                  }
                />
                <label htmlFor="Master" className="text-black font-semibold"> Master </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="PhD"
                  className="mr-2"
                  checked={filters.level.PhD}
                  onChange={e =>
                    setFilters(filter => ({
                      ...filter,
                      level: { ...filter.level, PhD: e.target.checked }
                    }))
                  }
                />
                <label htmlFor="PhD" className="text-black font-semibold"> PhD </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="DEC"
                  className="mr-2"
                  checked={filters.level.DEC}
                  onChange={e =>
                    setFilters(filter => ({
                      ...filter,
                      level: { ...filter.level, DEC: e.target.checked }
                    }))
                  }
                />
                <label htmlFor="DEC" className="text-black font-semibold"> DEC </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="AEC"
                  className="mr-2"
                  checked={filters.level.AEC}
                  onChange={e =>
                    setFilters(filter => ({
                      ...filter,
                      level: { ...filter.level, AEC: e.target.checked }
                    }))
                  }
                />
                <label htmlFor="AEC" className="text-black font-semibold"> AEC </label>
              </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-300 mt-5 mb-5" />

            {/* Tuition Fee MAX Range Filter */}
            <div className="w-full mx-auto">
              <p className="text-gray-700">Tuititon Fee Max</p>
              <div className="flex items-center space-x-2">
                <p className="text-sm text-gray-700">0$</p>
                <input
                  type="range"
                  min="0"
                  max="120000"
                  value={filters.tuitionMax}
                  onChange={e =>
                    setFilters(filter => ({ ...filter, tuitionMax: Number(e.target.value) }))
                  }
                  className="w-full outline-none my-slider"
                />
                <p className="text-sm text-gray-700 text-nowrap w-20">120 000$</p>
              </div>
              <div className="text-center text-sm text-gray-700 relative right-4">
                {formatNumber(filters.tuitionMax)}$
              </div>
            </div>

            {/* Divider */}      
            <hr className="border-gray-300 mt-5 mb-5" />

            {/* Tuition Fee MIN Range Filter */}
            <div className="w-full mx-auto">
              <p className="text-gray-700">Tuititon Fee Min</p>
              <div className="flex items-center space-x-2">
                <p className="text-sm text-gray-700">0$</p>
                <input
                  type="range"
                  min="0"
                  max="300"
                  value={filters.tuitionMin}
                  onChange={e =>
                    setFilters(filter => ({ ...filter, tuitionMin: Number(e.target.value) }))
                  }
                  className="w-full outline-none my-slider"
                />
                <p className="text-sm text-gray-700 w-20">300$</p>
              </div>
              <div className="text-center text-sm text-gray-700 relative right-4">
                {filters.tuitionMin}$
              </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-300 mt-5 mb-5" />

            {/* Target Discipline Filter */}
            <div>
              <p className="text-gray-700">Target Discipline</p>
              <Select
                isMulti
                options={[
                  { value: "Interior Design", label: "Interior Design" },
                  { value: "Computer Science", label: "Computer Science" },
                  { value: "Engineering", label: "Engineering" },
                  { value: "Business", label: "Business" },
                ]}
                value={filters.discipline.map(d => ({ value: d, label: d }))}
                onChange={selectedOptions =>
                  setFilters(filter => ({
                    ...filter,
                    discipline: selectedOptions ? selectedOptions.map(option => option.value) : []
                  }))
                }
                className="w-full text-gray-400"
                placeholder="Choose Disciplines"
                styles={{
                  indicatorSeparator: () => ({ display: 'none' })
                }}
              />
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {filters.discipline.map((disc, i) => (
                <div
                  key={i}
                  className="flex items-center bg-black text-white rounded-2xl px-3 py-1"
                >
                  <span className="mr-2">{disc}</span>
                  <button
                    onClick={() =>
                      setFilters(filter => ({
                        ...filter,
                        discipline: filter.discipline.filter(d => d !== disc)
                      }))
                    }
                    className="text-white hover:text-red-400"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
            {/* Divider */}
            <hr className="border-gray-300 mt-5 mb-5" />

            {/* Target Major Filter */}
            <div className="mt-6">
              <p className="text-gray-700">Target Major</p>
              <Select
                isMulti
                options={[
                  { value: "Fashion", label: "Fashion" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                  { value: "Accounting", label: "Accounting" },
                  { value: "AI", label: "AI" },
                ]}
                value={filters.major.map(m => ({ value: m, label: m }))}
                onChange={selectedOptions =>
                  setFilters(filter => ({
                    ...filter,
                    major: selectedOptions ? selectedOptions.map(option => option.value) : []
                  }))
                }
                className="w-full text-gray-400"
                placeholder="Choose Majors"
                styles={{
                  indicatorSeparator: () => ({ display: 'none' })
                }}
              />
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              {filters.major.map((mjr, i) => (
                <div
                  key={i}
                  className="flex items-center bg-black text-white rounded-2xl px-3 py-1"
                >
                  <span className="mr-2">{mjr}</span>
                  <button
                    onClick={() =>
                      setFilters(filter => ({
                        ...filter,
                        major: filter.major.filter(m => m !== mjr)
                      }))
                    }
                    className="text-white hover:text-red-400"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
            {/* Divider */}
            <hr className="border-gray-300 mt-5 mb-5" />

            {/* Deadline Filter */}
            <div>
              <p className="text-gray-700">Deadline</p>
              <DatePicker
                selected={filters.deadline}
                onChange={date => {
                  setFilters(filter => ({ ...filter, deadline: date }));
                }}
                dateFormat="MMMM yyyy"
                showMonthYearPicker
                placeholderText="Choose Deadline Date"
                className="bg-white text-gray-400 w-[253px] border border-gray-300 rounded-lg px-2 cursor-pointer h-10"
                onKeyDown={e => e.preventDefault()}
              />
            </div>
            {filters.deadline && (
              <div className="flex items-center bg-black rounded-2xl w-fit px-3 mt-2">
                <p className="text-gray-300 text-md">{formatMonthYear(filters.deadline)}</p>
                <button
                  className="bg-black px-1"
                  onClick={() => setFilters(filter => ({ ...filter, deadline: null }))}
                  type="button"
                >
                  &times;
                </button>
              </div>
            )}
            {/* Divider */}
            <hr className="border-gray-300 mt-5 mb-5" />
          </div>
        )}

        {/* Clear All and Apply filters Button */}
        <div className="flex justify-between mt-5">
          <button
            className="bg-white text-blue-500 px-4 py-2 rounded-full border border-blue-500 hover:bg-blue-500 hover:text-white"
            onClick={handleClearAll}
            type="button"
          >
            Clear All
          </button>
          <button
            className="bg-white text-blue-500 px-4 py-2 rounded-full border border-blue-500 hover:bg-blue-500 hover:text-white"
            type="button"
            onClick={() => {
              setAppliedFilters(filters)
              setCurrentPage(1)}
            }
          >
            Apply Filters
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex-1 mx-2">
        <div className="bg-[#F5F5F5] w-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 p-4">
          {currentUniversities.map((uni, i) => (
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
                      <p className="text-black font-bold text-lg md:text-xl break-words">{uni.name}</p>
                      <p className="text-black truncate text-lg">On Campus</p>
                    </div>
                  </div>
                  {/* Bookmark Icon */}
                  <div>
                    {uni.saved && (
                      <img
                        src={bookMarkIcon}
                        alt="Bookmark Icon"
                        className="w-7 h-9 absolute top-0 right-14"
                      />
                    )}
                  </div>
                </div>

                <p className="text-2xl text-black mb-4 break-words">
                  {uni.descriptionn || "No description available."}
                </p>

                <div className="flex items-center justify-between mb-4 text-black font-semibold text-lg">
                  <p className="truncate">Location</p>
                  <p className="truncate">{uni.country + ","  || "N/A"} {uni.city || "N/A"}</p>
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
                  { /* TAKE OUT THE CONDITIONAL IF TUITION IS PRESENT IN ALL JSON DATA */ }
                  <p className="truncate"> 
                    {uni.tuition  ? "$" + formatNumber(uni.tuition) + " CAD" : "$30 800 CAD"}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row mt-auto justify-between gap-4 min-w-0 mx-4">
                  <button className="bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-full truncate px-4 py-2">
                    Apply
                  </button>
                  <button
                    className="bg-white text-blue-500 border-blue-500 border-2 rounded-lg hover:bg-blue-600 hover:text-white w-full truncate px-4 py-2"
                    onClick={() => setModalUniversity(uni)}
                  >
                    More Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Page buttons on bottom of screen */}
        <div className="flex mt-4 space-x-2">
          <button
            onClick={() => setCurrentPage(page => page - 1)}
            disabled={currentPage === 1}
            className="text-black px-4 py-2 bg-white border rounded hover:bg-blue-500 hover:text-white"
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`text-black px-4 py-2 border rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-white hover:bg-gray-200'}`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(page => page + 1)}
            disabled={currentPage === totalPages}
            className="text-black px-4 py-2 bg-white border rounded hover:bg-blue-500 hover:text-white"
          >
            Next
          </button>
        </div>
        
      </div>

      {/* Modal Section */}
      {modalUniversity && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative w-full max-w-3xl mx-auto shadow-2xl">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 bg-black-800 hover:bg-black text-white p-2 text-lg "
            onClick={() => setModalUniversity(null)}
            style={{ lineHeight: 1 }}
          > 
            &times;
          </button>

          {/* Modal Card Content */}
          <section className="bg-white">
            {/* Blue top bar */}
            <div className="bg-[#256DB2] w-full py-8 px-12">
              <h1 className="text-white text-4xl font-bold">{modalUniversity.name}</h1>
              <div className="flex items-center gap-2 mt-2">
                <UilLocationPoint className="h-6" color="white" />
                <p className="text-white font-semibold">
                  {modalUniversity.city + ", "} {modalUniversity.province + ", "} {modalUniversity.country}
                </p>
              </div>
            </div>

            {/* University Info */}
            <div className="flex flex-wrap items-center justify-center bg-[#f9fafb] w-full py-8 px-12 gap-24">
              {/* Founded */}
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                  <UilBookOpen className="h-7 w-7" color="#256DB2" />
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-500">Founded</p>
                  <h2 className="text-black font-bold text-[20px]">{modalUniversity.founded || "N/A"}</h2>
                </div>
              </div>
              {/* Students */}
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                  <UilUsersAlt className="h-7 w-7" color="#256DB2" />
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-500">Student Population</p>
                  <h2 className="text-black font-bold text-[20px]">{modalUniversity.students || "N/A"}</h2>
                </div>
              </div>
            </div>

            {/* About School */}
            <div className="bg-white w-full h-fit py-8 px-12">
              <h1 className="text-black text-[25px] font-bold mb-6">
                About {modalUniversity.name}
              </h1>
              <h2 className="text-black leading-relaxed">
                {modalUniversity.description}
              </h2>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-6">
                {modalUniversity.website && (
                  <a
                    href={modalUniversity.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#256DB2] rounded-lg text-white font-semibold"
                    style={{ transition: 'none' }}
                  >
                    <UilExternalLinkAlt className="w-5 h-5" color="white" />
                    <span className="whitespace-nowrap">Visit Website</span>
                  </a>
                )}

                
                <button
                  onClick={() => {
                    const updatedUniversities = universities.map(uni => {

                    const isSameUniversity =
                      uni.name === modalUniversity.name &&
                      uni.country === modalUniversity.country;

                    if (isSameUniversity) {
                      return { ...uni, saved: !uni.saved };
                    }

                    return uni;
                  });
                    setUniversities(updatedUniversities);
                    setModalUniversity(prevState => ({ ...prevState, saved: !prevState.saved }));
                  }}
                  className={`px-4 py-2 rounded-lg font-semibold ${
                    modalUniversity.saved ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
                  }`}
                >
                  {modalUniversity.saved ? 'Unsave' : 'Save'}
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    )}
    </div>
  );
}
