import { useState } from "react";
import SectionWrapper from './SectionWrapper';
import companyLogo from '../assets/company_logo.png';

import {
    MagnifyingGlassIcon,
    UserCircleIcon,
    Bars3Icon,
    ChevronDownIcon
} from "@heroicons/react/24/solid";

export default function Header() {
    const [searchMode, setSearchMode] = useState(false);

    function RegularHeader() {
        return (
            <SectionWrapper className="flex justify-between pt-6">
                {/* logo */}
                <div className="flex items-center h-12">
                    <img
                        src={companyLogo}
                        alt="Immigration Door Logo"
                        className="max-h-7 w-auto object-contain"
                    />
                </div>

                {/* Nav Menu Div */}
                <div className="flex justify-end items-center gap-1">

                    {/* search icon */}
                    <button
                        className="flex justify-center items-center rounded-full bg-gray-100 w-12 h-12 px-2"
                        onClick={() => setSearchMode(true)}
                        aria-label="Open Search"
                    >
                        <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
                    </button>


                    {/* navigation */}
                    <nav className="flex justify-center items-center">
                        <div className="flex justify-center items-center flex-nowrap bg-gray-100 rounded-full  py-1">
                            <a href="#" className="bg-[#256DB2] text-white font-medium px-5 py-2 rounded-full mx-1 transition">Home</a>
                            <a href="#" className="text-gray-800 px-4 py-2 mx-1 font-normal rounded-full hover:bg-gray-200 transition">Recruitment</a>
                            <a href="#" className="text-gray-800 px-4 py-2 mx-1 font-normal rounded-full hover:bg-gray-200 transition whitespace-nowrap">About Us</a>
                            <a href="#" className="text-gray-800 px-4 py-2 mx-1 font-normal rounded-full hover:bg-gray-200 transition inline-flex items-center">Immigrate <span className="text-gray-400 ml-1">︙</span></a>
                            <a href="#" className="text-gray-800 px-4 py-2 mx-1 font-normal rounded-full hover:bg-gray-200 transition inline-flex items-center">Study <span className="text-gray-400 ml-1">︙</span></a>
                            <a href="#" className="text-gray-800 px-4 py-2 mx-1 font-normal rounded-full hover:bg-gray-200 transition inline-flex items-center">Visit <span className="text-gray-400 ml-1">︙</span></a>
                            <span className="inline-flex items-center text-black font-bold px-3 py-2 mx-1">EN <span className="text-gray-400 ml-1">︙</span></span>
                            <a href="#" className="bg-[#DE3F2E] text-white font-medium px-6 py-2 rounded-full mx-1 ml-4 transition hover:bg-red-600">Consultation</a>
                        </div>
                    </nav>

                    {/* profile icon */}
                    <button className="flex justify-center items-center rounded-full bg-gray-100 w-12 h-12 px-2">
                        <UserCircleIcon className="w-6 h-6 text-gray-400" />
                    </button>

                </div>



            </SectionWrapper>
        );
    }

    function SearchHeader() {
        return (
            <SectionWrapper className="flex justify-between pt-6">
                {/* logo */}
                <div className="flex items-center h-12">
                    <img
                        src={companyLogo}
                        alt="Immigration Door Logo"
                        className="max-h-7 w-auto object-contain"
                    />
                </div>

                {/* Search Bar Menu */}
                <div className="flex-1 flex items-center justify-end gap-1 ">

                    <div className="bg-gray-100 rounded-full px-1 flex items-center flex-nowrap gap-1 w-[895px] h-[48px] max-w-4xl">

                        {/* Type */}
                        <input
                            className="rounded-full bg-white px-4 py-2 w-[40%] max-w-xs outline-none text-gray-700"
                            type="text"
                            placeholder="type something ..."
                        />

                        {/* Search Options */}
                        <div className="rounded-full bg-white w-[30%] px-6 py-2 flex items-center justify-between text-gray-400">
                            Search Website <ChevronDownIcon className="w-2 h-2 text-gray-400 ml-2" />
                        </div>

                        {/* Select Region */}
                        <div className="rounded-full bg-white w-[30%] px-6 py-2 flex items-center justify-between text-gray-400">
                            select region <ChevronDownIcon className="w-2 h-2 text-gray-400 ml-2" />
                        </div>

                        {/* Search Button */}
                        <button className="rounded-full bg-gray-100 w-10 h-10 px-2.5 py-2.5 flex items-center">
                            <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
                        </button>

                    </div>



                    {/* Menu Icon */}
                    <button
                        className="flex justify-center items-center rounded-full bg-gray-100 w-12 h-12 px-2"
                        onClick={() => setSearchMode(false)}
                        aria-label="Close Search"
                    >
                        <Bars3Icon className="w-5 h-5 text-gray-400" />
                    </button>

                    {/* Profile Icon */}
                    <button className="flex justify-center items-center rounded-full bg-gray-100 w-12 h-12 px-2">
                        <UserCircleIcon className="w-6 h-6 text-gray-400" />
                    </button>

                </div>
            </SectionWrapper>
        );
    }

    return (
        <header className="fixed top-0 left-0 w-full bg-transparent z-50">
            {searchMode ? <SearchHeader /> : <RegularHeader />}
        </header>
    );
}
