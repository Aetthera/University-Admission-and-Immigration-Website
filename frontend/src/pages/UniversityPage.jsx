import { UilLocationPoint, UilGlobe, UilGraduationCap, UilClipboardNotes } from '@iconscout/react-unicons';
import { UilUsdCircle } from '@iconscout/react-unicons'
import { UilCalendarAlt } from '@iconscout/react-unicons'
import { UilMoneyInsert } from '@iconscout/react-unicons'

import Header from '../components/Header';
import Image1 from '../assets/Image for LaSalle College - Montreal.png';
import Image2 from '../assets/Image for LaSalle College - Montreal2.png';
import Image3 from '../assets/Image for LaSalle College - Montreal3.png';

function UniversityPage() {
    const lasallecollege = [
        {
            School: "Lasalle College",
            AboutText: `Founded in 1959 in the LaSalle borough of Montreal, LaSalle College offers professional training, as well as college and pre-university programs. Located in the heart of Montreal's downtown district, it is the largest bilingual college in North America. LaSalle College has 5 specialty schools with over 60 programs based on creativity, entrepreneurship, innovation and openness to the world at the heart of its educational plan. In 2019, LaSalle College expanded its program offerings by integrating all of Inter-Dec College's programs under its banner. A member of the LCI Education network, LaSalle College is proud of its direct connection between the work environment and the field of education, not only in Canada but throughout the world. Since 1959, LaSalle College has continually positioned itself at the forefront of education, training the generation that will shape tomorrow's world by enabling it to be successful while respecting human values.`,

            Facilities: `Students have access to specialist equipment and facilities (photo studio, Techno-Espace, 3D printer, collaborative classes, etc.) to produce creative projects.`,

            Location: `Each season, Montreal is host to an array of events, exhibitions and gatherings for the thousands of culture, nature and thrill seekers who come to enjoy its diverse offerings. Getting around the city on a day-to-day basis is hassle-free. Its streets, vast parks, underground pedestrian network, and metro system are safe and easy to navigate.`,

            Campus: `The campus is located in downtown Montreal and offers convenient access to all amenities including the metro, bus, shops, sports centres, cinemas, pharmacies hospitals and 24 hour supermarkets. Many activities, clubs, competitions and conferences are available to help students to reach their full potential and brilliantly overcome the challenges of today's world.`,

            Culture: `LaSalle College's unique, multicultural setting allows all students to develop into citizens of the world and to open up to cultural, social and economic diversity in the modern world.`,

            textColor: "text-blue-600",
            iconColor: "#3b82f6",
            sublink: "View Opportunities"
        },
    ];

    return (
        <section className="min-h-screen bg-[#FFFFFF] font-montserrat">
            {/* Global Site Header */}
            <Header />

            {/* Main Container */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 md:pt-16 lg:pt-20 flex flex-col gap-4 sm:gap-6">
                {/* University Name */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
                    LaSalle College - Montreal
                </h1>
                
                {/* University Info Row */}
                <div className="flex flex-wrap items-center text-xs sm:text-sm text-gray-500 gap-1 sm:gap-2">
                    <p>Montreal, Quebec, CA</p>
                    <span className="text-gray-400 hidden sm:inline">|</span>

                    <div className="flex items-center gap-1">
                        <UilLocationPoint className="h-3 w-3 sm:h-4 sm:w-4" />
                        <p>2000, Sainte-Catherine Street West, Montreal</p>
                    </div>
                    <span className="text-gray-400 hidden sm:inline">|</span>

                    <p>1 (514) 939 2006</p>
                    <span className="text-gray-400 hidden sm:inline">|</span>

                    <div className="flex items-center gap-1">
                        <UilGlobe className="h-3 w-3 sm:h-4 sm:w-4" />
                        <a
                            href="https://www.lasallecollege.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            Visit Website
                        </a>
                    </div>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8 md:mt-10 h-auto sm:h-64 md:h-80 lg:h-96">
                    {/* Large Left Image */}
                    <div className="col-span-1 row-span-2 sm:row-span-1 bg-gray-200 rounded-lg overflow-hidden">
                        <img
                            src={Image1}
                            alt="Campus View"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right Images Column */}
                    <div className="grid grid-rows-2 gap-3 sm:gap-4 h-64 sm:h-full">
                        <div className="bg-gray-200 rounded-lg overflow-hidden">
                            <img
                                src={Image2}
                                alt="Classroom"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="bg-gray-200 rounded-lg overflow-hidden">
                            <img
                                src={Image3}
                                alt="Student Life"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Section Tabs + Info Boxes */}
            <div className="mt-[10vh] px-4 sm:px-6 lg:px-8 xl:px-10 pt-6 sm:pt-8 md:pt-10 max-w-7xl mx-auto">
                {/* Buttons Row */}
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    <button className="text-black text-center bg-blue-100 border-2 rounded-full border-blue-200 px-3 py-1 hover:border-blue-300 transition-colors">
                        <p className="text-xs sm:text-sm font-medium">School Overview</p>
                    </button>

                    <button className=" bg-white text-black text-center border-2 rounded-full border-blue-300 px-3 py-1 hover:border-blue-500 transition-colors">
                        <p className="text-xs sm:text-sm font-medium">Programs</p>
                    </button>

                    <button className="  bg-white text-black text-center border-2 rounded-full border-blue-300 px-3 py-1 hover:border-blue-500 transition-colors">
                        <p className="text-xs sm:text-sm font-medium">Other</p>
                    </button>
                </div>

                {/* Info Boxes Grid */}
                <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                    {/* Main Content */}
                    <div className="lg:col-span-2 shadow-lg rounded-lg p-4 sm:p-12 bg-white mt-12">
                        <div className='flex items-center gap-2 sm:gap-3 mb-4'>
                            <UilGraduationCap className='h-8 w-8 sm:h-10 sm:w-10' color='#4B77D1'/>
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">School Overview</h2>
                        </div>

                        <div className="w-full h-px bg-gray-300 my-3 sm:my-4" />

                        <h2 className='text-lg sm:text-xl font-medium text-gray-900 mb-2 sm:mb-3'>About Lasalle College - Montreal</h2>
                        <p className='text-gray-700 text-sm sm:text-base mb-6'>{lasallecollege[0].AboutText}</p>

                        <h1 className='text-lg sm:text-xl font-medium text-gray-900 mb-2 sm:mb-3'>Why Lasalle College - Montreal</h1>

                        <div className="space-y-3 sm:space-y-4 pl-4 sm:pl-6">
                            <div>
                                <p className="font-semibold text-blue-600">Facilities:</p>
                                <p className="text-gray-700 text-sm sm:text-base">{lasallecollege[0].Facilities}</p>
                            </div>
                            <div>
                                <p className="font-semibold text-blue-600">Location:</p>
                                <p className="text-gray-700 text-sm sm:text-base">{lasallecollege[0].Location}</p>
                            </div>
                            <div>
                                <p className="font-semibold text-blue-600">Campus:</p>
                                <p className="text-gray-700 text-sm sm:text-base">{lasallecollege[0].Campus}</p>
                            </div>
                            <div>
                                <p className="font-semibold text-blue-600">Culture:</p>
                                <p className="text-gray-700 text-sm sm:text-base">{lasallecollege[0].Culture}</p>
                            </div>
                        </div>

                        <p className='pb-20 text-gray-500 text-xs sm:text-sm mt-6 italic'>Note: All students require a CAQ for their VISA application after obtaining their acceptance letter.</p>


                        <div className='flex items-center gap-2 sm:gap-3 mb-4'>
                            <UilClipboardNotes className='h-8 w-8 sm:h-10 sm:w-10' color='#4B77D1'/>
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">Features</h2>
                        </div>
                        <div className="w-full h-px bg-gray-300 my-6" />


                        <div className='flex-cols text-center justify-center pb-6'>

                            <div className="h-[6vh] p-[2px] bg-gradient-to-r from-red-300 to-transparent rounded-l-full rounded-r-[30px]">
                                <div className="flex items-center h-full px-4 bg-white rounded-l-full rounded-r-[26px]">
                                    <p className="text-gray-600 text-sm">Post graduate permit</p>
                                </div>
                            </div>

                            <div className="h-[6vh] p-[2px] bg-gradient-to-r from-red-300 to-transparent rounded-l-full rounded-r-[30px]">
                                <div className="flex items-center h-full px-4 bg-white rounded-l-full rounded-r-[26px]">
                                    <p className="text-gray-600 text-sm">Co-op/Internship</p>
                                </div>
                            </div>

                            <div className="h-[6vh] p-[2px] bg-gradient-to-r from-red-300 to-transparent rounded-l-full rounded-r-[30px]">
                                <div className="flex items-center h-full px-4 bg-white rounded-l-full rounded-r-[26px]">
                                    <p className="text-gray-600 text-sm">Work while studying</p>
                                </div>
                            </div>

                            <div className="h-[6vh] p-[2px] bg-gradient-to-r from-red-300 to-transparent rounded-l-full rounded-r-[30px]">
                                <div className="flex items-center h-full px-4 bg-white rounded-l-full rounded-r-[26px]">
                                    <p className="text-gray-600 text-sm">Accomodation</p>
                                </div>
                            </div>

                        </div>

                            <div className='flex items-center pt-8 gap-2 sm:gap-3 mb-4'>
                                <UilLocationPoint className='h-8 w-8 sm:h-10 sm:w-10' color='#4B77D1'/>
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">Location</h2>

                        </div>
                        <div className="w-full h-px bg-gray-300 my-6" />


                        <div className="w-full h-[300px] rounded-lg overflow-hidden mt-10">

                                <iframe
                                    title="LaSalle College Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.017938503132!2d-73.58005028444105!3d45.49383893980313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a4f1e7a6ed9%3A0xd51a3f944362cfb!2sLaSalle%20College!5e0!3m2!1sen!2sca!4v1717531098796!5m2!1sen!2sca"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>

                            </div>
                        <div className="w-full h-px bg-gray-300" />

                        
                    </div>

                    {/* Sidebar Boxes */}
                    <div className='flex flex-col gap-4 sm:gap-6'>

                    {/* Box 1: Post Graduate Permit */}
                    <div className="bg-white flex flex-col rounded-[40px] shadow-lg p-4 sm:p-5 sm:p-5">
                        <p className="text-gray-800 text-[20px] text-center">Details</p>
                        <div className="w-full h-px bg-gray-300 my-2" />

                        <div className="flex justify-between items-center text-md text-black px-2 py-2">
                            <p className="whitespace-nowrap">Founded</p>
                            <p className="whitespace-nowrap text-[20px]">1959</p>
                        </div>

                        <div className="flex justify-between items-center text-md text-black px-2 py-2">
                            <p className="whitespace-nowrap">Insitution type</p>
                            <p className="whitespace-nowrap text-[20px]">Private</p>
                        </div>

                        <div className="flex justify-between items-center text-md text-black px-2 py-2">
                            <p className="whitespace-nowrap">Number of students</p>
                            <p className="whitespace-nowrap text-[20px]">4000+</p>
                        </div>
                    </div>

                    {/* Box 2: */}
                    <div className="bg-white flex flex-col shadow-lg rounded-[40px] p-4 sm:p-5">
                        <p className="text-gray-800 text-[20px] text-center">Duration & Cost</p>
                        <div className="w-full h-px bg-gray-300 my-2" />

                        <div className="flex items-center text-center mt-4">
                            <UilUsdCircle className="text-blue-500 pr-4 h-[50px] justify-center mb-2" color='#4B77D1'/>
                            <div className='text-start text-[20px]'>
                                <p className="text-black">50$ CAD</p>
                                <p className="text-gray-600 text-sm">Average Application Fee</p>
                            </div>
                        </div>

                        <div className="flex items-center text-center mt-4">
                            <UilCalendarAlt className="text-blue-500 pr-4 h-[50px] justify-center mb-2" color='#4B77D1'/>
                            <div className='text-start text-[20px]'>
                                <p className="text-black">One Year</p>
                                <p className="text-gray-600 text-sm">Average Graduation Program</p>
                            </div>
                        </div>

                        <div className="flex items-center text-center mt-4">
                            <UilCalendarAlt className="text-blue-500 pr-4 h-[50px] justify-center mb-2" color='#4B77D1'/>
                            <div className='text-start text-[20px]'>
                                <p className="text-black">Two Year</p>
                                <p className="text-gray-600 text-sm">Average Graduation Program</p>
                            </div>
                        </div>

                        <div className="flex items-center text-center mt-4">
                            <UilUsdCircle className="text-blue-500 pr-4 h-[50px] justify-center mb-2" color='#4B77D1'/>
                            <div className='text-start text-[20px]'>
                                <p className="text-black">$20,635.00 CAD / Year</p>
                                <p className="text-gray-600 text-sm">Cost of living</p>
                            </div>
                        </div>

                        <div className="flex items-center text-center mt-4">
                            <UilMoneyInsert className="text-blue-500 pr-4 h-[50px] justify-center mb-2" color='#4B77D1'/>
                            <div className='text-start text-[20px]'>
                                <p className="text-black">$16,989.16 CAD / First Year</p>
                                <p className="text-gray-600 text-sm">Average gross tuition</p>
                            </div>
                        </div>
                    </div>

                    {/* Box 3: */}
                    <div className="bg-white flex flex-col rounded-[40px] shadow-lg p-4 sm:p-5 sm:p-5">
                        <p className="text-gray-800 text-[20px] text-center">Average time of acceptance</p>
                        <div className="w-full h-px bg-gray-300 my-2" />

                        <div className="flex justify-between items-center text-md text-black px-2 py-2">
                            <p className="whitespace-nowrap">Jan - Apr</p>
                            <p className="whitespace-nowrap text-[20px]">15 - 30 days</p>
                        </div>

                        <div className="flex justify-between items-center text-md text-black px-2 py-2">
                            <p className="whitespace-nowrap">May - Aug</p>
                            <p className="whitespace-nowrap text-[20px]">15 days</p>
                        </div>

                        <div className="flex justify-between items-center text-md text-black px-2 py-2">
                            <p className="whitespace-nowrap">Sep - Dec</p>
                            <p className="whitespace-nowrap text-[20px]">15 days</p>
                        </div>
                    </div>

                    {/* Box 4: Campus Size */}
                    <div className="bg-white flex flex-col rounded-[40px] shadow-lg p-4 sm:p-5 sm:p-5">
                        <p className="text-gray-800 text-[20px] text-center">Popular deciplines</p>
                        <div className="w-full h-px bg-gray-300 my-2" />

                        <div className="flex justify-between items-center text-md text-black px-2 py-2">
                            <p className="whitespace-nowrap">Buisness Management</p>
                            <p className="whitespace-nowrap text-[20px]">35%</p>
                        </div>

                        <div className="flex justify-between items-center text-md text-black px-2 py-2">
                            <p className="whitespace-nowrap">Arts</p>
                            <p className="whitespace-nowrap text-[20px]">31%</p>
                        </div>

                        <div className="flex justify-between items-center text-md text-black px-2 py-2">
                            <p className="whitespace-nowrap">Engineering , Technology</p>
                            <p className="whitespace-nowrap text-[20px]">20%</p>
                        </div>

                        <div className="flex justify-between items-center text-md text-black px-2 py-2">
                            <p className="whitespace-nowrap">Others</p>
                            <p className="whitespace-nowrap text-[20px]">13%</p>
                        </div>
                    </div>

                    {/* Box 5: Scholarships Available */}
                    <div className="bg-white flex flex-col rounded-[40px] shadow-lg p-4 sm:p-5 sm:p-5">
                        <p className="text-gray-800 text-[20px] text-center">Type of programs</p>
                        <div className="w-full h-px bg-gray-300 my-2" />

                    </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default UniversityPage;