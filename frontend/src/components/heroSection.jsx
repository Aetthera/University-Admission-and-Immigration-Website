import planeImg from '../assets/plane-left.png';
import bgCircles from '../assets/background-circles.png';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import SectionWrapper from './SectionWrapper';
import '../components/heroSection/hero.css';

export default function Hero() {
    return (
        <section className="relative h-[90vh] bg-white flex flex-col items-center justify-center overflow-x-hidden">

            <SectionWrapper>

                <div className="flex justify-center">
                    <div
                        className="relative w-[1450px] h-[600px] bg-cover bg-center bg-no-repeat rounded-[6vw] flex justify-between px-[110px] py-[100px] overflow-visible"
                        style={{ backgroundImage: `url(${bgCircles})` }}
                    >
                        {/* Overlay layer in front of background image */}
                        <div className="absolute inset-0 bg-[#F8F9FA]/60 z-0 rounded-[6vw]"></div>

                        {/* Text content */}
                        <div className="flex-1 z-10">
                            <h1 className="text-5xl font-bold text-gray-800 mb-6">
                                Lorem Ipsum
                            </h1>
                            <p className="text-lg text-gray-700 max-w-[550px]">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis ...
                            </p>
                        </div>

                        {/* Floating plane image */}
                        <div className="absolute right-[-25%] top-1/3 -translate-y-1/2 z-10 pointer-events-none">
                            <img
                                src={planeImg}
                                alt="Plane"
                                className="w-[1000px] h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>



                {/* Search Box */}
                <div className="relative w-full flex justify-center">
                    <div className="absolute bottom-[-70px] z-20 bg-white rounded-[3vw] shadow-[0_0_60px_rgba(0,0,0,0.05)] px-6 py-10 pointer-events-auto w-[1150px]">
                        <p className="text-xl font-medium text-black mb-9 text-center">
                            Find What You're Looking For
                        </p>

                        <div className="flex flex-wrap gap-1 items-center justify-center">
                            <div className="p-[2px] rounded-full bg-gradient-to-r from-[#256DB2] to-[#E53E3E] min-w-[300px] max-w-[500px] flex-grow">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full h-[45px] px-5 rounded-full border-none outline-none bg-white text-gray-800"
                                />
                            </div>

                            <select className="h-[45px] w-[160px] px-4 rounded-full border border-gray-200 text-black bg-white font-medium appearance-none">
                                <option>Applications</option>
                                <option>Education</option>
                                <option>Immigration</option>
                            </select>

                            <select className="h-[45px] w-[160px] px-4 rounded-full border border-gray-200 text-gray-400 bg-white font-normal appearance-none">
                                <option disabled selected>Select Region</option>
                                <option>Canada</option>
                                <option>UK</option>
                            </select>


                            <button className="rounded-full bg-gray-100 w-11 h-11 px-2 flex items-center justify-center">
                                <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
                            </button>
                        </div>
                    </div>
                </div>

            </SectionWrapper>


        </section>
    );
}
