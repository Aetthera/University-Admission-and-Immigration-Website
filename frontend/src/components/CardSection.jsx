import { FaRegSmile } from "react-icons/fa";
import { FaAward, FaRegStar } from "react-icons/fa6";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import Vector from "../assets/curvy-line.png";
import customSquare from "../assets/curvy-shape.svg";
import CurvyCard from "./CurvyCard";
import {CameraIcon} from "lucide-react";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { Award, Gem, BadgeCheck, Phone } from "lucide-react";

// function FeatureCard({ icon: Icon, title, text }) {
//     return (
//         <div className="group bg-blue-800/80 rounded-2xl p-6 w-72 min-h-[250px] relative flex flex-col items-start shadow-xl transition-all duration-300 hover:bg-white hover:scale-105 cursor-pointer">
//             <div className="absolute -top-6 left-6 transition-all duration-300 bg-white text-blue-700 group-hover:bg-blue-600 group-hover:text-white rounded-full p-3 shadow">
//                 <Icon size={24} />
//             </div>
//             <h3 className="mt-8 mb-2 text-lg font-bold text-white group-hover:text-gray-900">
//                 {title}
//             </h3>
//             <p className="text-blue-100 group-hover:text-gray-700 mb-4">
//                 {text}
//             </p>
//             <button className="mt-auto px-4 py-2 border border-blue-600 rounded-lg text-blue-600 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-300 bg-white">
//                 Learn More
//             </button>
//         </div>
//     );
// }

export default function Middle() {
    return (
        <div className="h-[90vh] bg-[#256DB2] flex items-center justify-center relative overflow-hidden">
            <img
                src={Vector}
                alt="Dotted Line Vector"
                className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover object-center z-0"
            />
            <div className="relative z-10 max-w-5xl w-full px-6 flex flex-col gap-[100px]">
                {/* Header */}
                <h1 className="text-5xl font-bold text-white text-center">
                    Lorem Ipsum
                </h1>


                {/* Cards Row */}
                <div className="h-[400px] flex items-start justify-center gap-6">

                    <div className="flex items-start justify-center gap-3">
                        
                        <CurvyCard icon={<BadgeCheck className="w-7 h-7" color="currentColor" />}>
                            <h3 className="text-[30px] font-bold mb-2">Lorem Ipsum</h3>
                            <p className="text-[15px] text-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
                        </CurvyCard>

                        <CurvyCard icon={<Award className="w-7 h-7" color="currentColor" />}>
                            <h3 className="text-[30px] font-bold mb-2">Lorem Ipsum</h3>
                            <p className="text-[15px] text-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
                        </CurvyCard>

                        <CurvyCard icon={<Gem className="w-7 h-7"  color="currentColor" />}>
                            <h3 className="text-[30px] font-bold mb-2">Lorem Ipsum</h3>
                            <p className="text-[15px] text-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. </p>
                        </CurvyCard>

                        <CurvyCard icon={<Phone className="w-7 h-7" color="currentColor" />}>
                            <h3 className="text-[30px] font-bold mb-2">Lorem Ipsum</h3>
                            <p className="text-[15px] text-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
                        </CurvyCard>



                    </div>

                </div>
            </div>
        </div>
    );
}
