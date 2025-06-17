import { UilLocationPoint, UilGlobe, UilGraduationCap, UilClipboardNotes } from '@iconscout/react-unicons';
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
        <section className="min-h-screen bg-white font-montserrat">
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
            <div className="px-4 sm:px-6 lg:px-8 xl:px-10 pt-6 sm:pt-8 md:pt-10 max-w-7xl mx-auto">
                {/* Buttons Row */}
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    <button className="text-center bg-blue-100 border-2 rounded-full border-blue-200 px-3 py-1 hover:border-blue-300 transition-colors">
                        <p className="text-xs sm:text-sm font-medium">School Overview</p>
                    </button>

                    <button className="text-center border-2 rounded-full border-blue-300 px-3 py-1 hover:border-blue-500 transition-colors">
                        <p className="text-xs sm:text-sm font-medium">Programs</p>
                    </button>

                    <button className="text-center border-2 rounded-full border-blue-300 px-3 py-1 hover:border-blue-500 transition-colors">
                        <p className="text-xs sm:text-sm font-medium">Other</p>
                    </button>
                </div>

                {/* Info Boxes Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                    {/* Main Content */}
                    <div className="lg:col-span-2 shadow-lg rounded-lg p-4 sm:p-6 bg-white">
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

                        <p className='text-gray-500 text-xs sm:text-sm mt-6 italic'>Note: All students require a CAQ for their VISA application after obtaining their acceptance letter.</p>

                        <div className="w-full h-px bg-gray-300 my-6" />

                        <div className='flex items-center gap-2 sm:gap-3 mb-4'>
                            <UilClipboardNotes className='h-8 w-8 sm:h-10 sm:w-10' color='#4B77D1'/>
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">Features</h2>
                        </div>
                        <div className="w-full h-px bg-gray-300" />
                    </div>

                    {/* Sidebar Boxes */}
                    <div className='flex flex-col gap-4 sm:gap-6'>
                        {[1, 2, 3, 4, 5].map((box, index) => (
                            <div key={index} className="bg-blue-100 rounded-lg p-4 sm:p-5 h-32 sm:h-36 flex items-center justify-center">
                                <p className="text-gray-800">Information Box {box}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UniversityPage;