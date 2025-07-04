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
