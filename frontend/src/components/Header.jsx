// import { MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/solid';


// export default function Header() {
//   return (
//     //background of header
//     <header className="w-full bg-white shadow">
//       <div className="flex items-center max-w-6xl mx-auto py-4 px-4 w-full">
//         {/* logo */}
//         <div className="font-serif text-2xl font-bold flex items-end mr-6">
//           <span className="text-blue-800 font-semibold">Immigration</span>
//           <span className="text-red-600 font-bold ml-1">Door</span>
//         </div>
        
//         {/* search icon */}
//         <button className="rounded-full bg-gray-100 w-13 h-13 px-2 mx-2">
//           <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
//         </button>
        
//         {/* navigation */}
//         <nav className="flex-1 flex items-center">
//           <div className="bg-gray-100 rounded-full px-2 py-1 flex items-center flex-nowrap mx-auto">
//             <a href="#" className="bg-blue-700 text-white font-medium px-5 py-2 rounded-full mx-1 transition">
//               Home</a>

//             <a href="#" className="text-gray-800 px-4 py-2 mx-1 font-normal rounded-full hover:bg-gray-200 transition">
//               Recruitment</a>

//             <a href="#" className="text-gray-800 px-4 py-2 mx-1 font-normal rounded-full hover:bg-gray-200 transition whitespace-nowrap">
//               About Us</a>

//             <a href="#" className="text-gray-800 px-4 py-2 mx-1 font-normal rounded-full hover:bg-gray-200 transition inline-flex items-center">
//               Immigrate 
//             <span className="text-gray-400 ml-1">︙</span></a>

//             <a href="#" className="text-gray-800 px-4 py-2 mx-1 font-normal rounded-full hover:bg-gray-200 transition inline-flex items-center">
//               Study 
//             <span className="text-gray-400 ml-1">︙</span></a>

//             <a href="#" className="text-gray-800 px-4 py-2 mx-1 font-normal rounded-full hover:bg-gray-200 transition inline-flex items-center">
//               Visit 
//             <span className="text-gray-400 ml-1">︙</span></a>

//             <span className="inline-flex items-center text-black font-bold px-3 py-2 mx-1">
//               EN <span className="text-gray-400 ml-1">︙</span>
//             </span>
            
//             <a href="#" className="bg-red-500 text-white font-medium px-6 py-2 rounded-full mx-1 ml-4 transition hover:bg-red-600">
//               Consultation
//             </a>
//           </div>
//         </nav>
        
//         {/* Profile icon */}
//         <button className="rounded-full bg-gray-100 w-13 h-13 px-2 mx-2">
//           <UserCircleIcon className="w-5 h-5 text-gray-400" />
//         </button>
//       </div>
//     </header>
//   );
// }



import { useState } from "react";
import {
  MagnifyingGlassIcon,
  UserCircleIcon,
  Bars3Icon,
  ChevronDownIcon
} from "@heroicons/react/24/solid";

export default function Header() {
  const [searchMode, setSearchMode] = useState(false);

  //regular header
  function RegularHeader() {
    return (
      <div className="flex items-center max-w-6xl mx-auto py-4 px-4 w-full">
        {/* logo */}
        <div className="font-serif text-2xl font-bold flex items-end mr-6">
           <span className="text-blue-800 font-semibold">Immigration</span>
           <span className="text-red-600 font-bold ml-1">Door</span>
         </div>
        {/* search icon */}
        <button
          className="rounded-full bg-gray-100 w-13 h-13 px-2 mx-2"
          onClick={() => setSearchMode(true)}
          aria-label="Open Search"
        >
          <MagnifyingGlassIcon className="w-6 h-6 text-gray-400" />
        </button>

        {/* navigation */}
        <nav className="flex-1 flex items-center justify-center">
          <div className="bg-gray-100 rounded-full px-2 py-1 flex items-center flex-nowrap">
            <a href="#" className="bg-blue-700 text-white font-medium px-5 py-2 rounded-full mx-1 transition">
              Home</a>

            <a href="#" className="text-gray-800 px-4 py-2 mx-1 font-normal rounded-full hover:bg-gray-200 transition">
              Recruitment</a>

            <a href="#" className="text-gray-800 px-4 py-2 mx-1 font-normal rounded-full hover:bg-gray-200 transition whitespace-nowrap">
              About Us</a>

            <a href="#" className="text-gray-800 px-4 py-2 mx-1 font-normal rounded-full hover:bg-gray-200 transition inline-flex items-center">
              Immigrate <span className="text-gray-400 ml-1">︙</span> </a>

            <a href="#" className="text-gray-800 px-4 py-2 mx-1 font-normal rounded-full hover:bg-gray-200 transition inline-flex items-center">
              Study <span className="text-gray-400 ml-1">︙</span> </a>

            <a href="#" className="text-gray-800 px-4 py-2 mx-1 font-normal rounded-full hover:bg-gray-200 transition inline-flex items-center">
              Visit <span className="text-gray-400 ml-1">︙</span> </a>

            <span className="inline-flex items-center text-black font-bold px-3 py-2 mx-1">
              EN <span className="text-gray-400 ml-1">︙</span> </span>

            <a href="#" className="bg-red-500 text-white font-medium px-6 py-2 rounded-full mx-1 ml-4 transition hover:bg-red-600">
              Consultation</a>
          </div>
        </nav>

        {/* profile icon */}
        <button className="rounded-full bg-gray-100 w-13 h-13 px-2 mx-2">
          <UserCircleIcon className="w-6 h-6 text-gray-400" />
        </button>
      </div>
    );
  }

  //search mode header
  function SearchHeader() {
    return (
      <div className="flex items-center max-w-[1120px] mx-auto py-4 px-4">
        {/* logo */}
        <div className="font-serif text-2xl font-bold flex items-end mr-6">
           <span className="text-blue-800 font-semibold">Immigration</span>
           <span className="text-red-600 font-bold ml-1">Door</span>
         </div>
        
        {/* search bar section */}
        <div className="flex-1 flex items-center justify-center">
          <div className="bg-gray-100 rounded-full px-2 py-1 flex items-center flex-nowrap w-full max-w-4xl">
            {/* search input */}
            <input
              className="rounded-full bg-red-100 px-4 py-2 w-full max-w-xs outline-none text-gray-700 mr-2"
              type="text"
              placeholder="type something ..."
            />

            {/* dropdown 1 */}
            <div className="rounded-full bg-red-100 px-6 py-2 mx-1 flex items-center text-gray-400">
              Search Website
              <span><ChevronDownIcon className="w-2 h-2 text-gray-400" /></span>
            </div>

            {/* dropdown 2 */}
            <div className="rounded-full bg-red-100 px-6 py-2 mx-1 flex items-center text-gray-400">
              select region
              <span><ChevronDownIcon className="w-2 h-2 text-gray-400" /></span>
            </div>

            {/* search icon */}
            <button className="rounded-full bg-gray-100 w-13 h-13 px-2 mx-2">
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* menu icon */}
        <button
          className="rounded-full bg-gray-100 w-13 h-13 px-2 mx-2"
          onClick={() => setSearchMode(false)}
          aria-label="Close Search"
        >
          <Bars3Icon className="w-5 h-5 text-gray-400" />
        </button>

        {/* profile icon */}
        <button className="rounded-full bg-gray-100 w-13 h-13 px-2 mx-2">
          <UserCircleIcon className="w-6 h-6 text-gray-400" />
        </button>
      </div>
    );
  }

  return (
    <header className="w-full bg-white shadow">
      {searchMode ? <SearchHeader /> : <RegularHeader />}
    </header>
  );
}

