import { img } from "framer-motion/client";
import { FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import CompanyLogo from '../assets/company_logo.png';
import planeimg from '../assets/Layer_1.png';


export default function Footer() {
    return (
        <footer className="w-full bg-[#333333] text-gray-300 pt-8 pb-4 border-t border-gray-700">


            <div className="relative max-w-6xl mx-auto px-4 pt-10">


                {/* Plane Image at Bottom Left */}
                <img
                    src={planeimg}
                    alt="Plane"
                    className="absolute top-[-110px] left-[-300px] w-[500px] h-auto"
                />


                <div className="flex flex-wrap justify-between gap-x-12 pb-8 pt-8">

                    {/* logo + tagline */}
                    <div className="min-w-[180px] h-[200px] flex flex-col gap-3">

                        <img src={CompanyLogo} alt="Company Logo" className="w-[250px] h-auto" />

                        <p className="text-sm text-gray-400">Your future starts here.</p>

                    </div>

                    <div className="flex flex-row justify-end gap-12 ">
                        {/* quick links */}
                        <div className="min-w-[150px]">
                            <h3 className="font-semibold mb-2 text-lg">Quick Links</h3>

                            <ul className="space-y-1 text-sm">
                                <li><a href="#" className="hover:underline text-blue-400">Home</a></li>
                                <li><a href="#" className="hover:underline text-blue-400">Services</a></li>
                                <li><a href="#" className="hover:underline text-blue-400">About</a></li>
                                <li><a href="#" className="hover:underline text-blue-400">Contact</a></li>
                            </ul>
                        </div>

                        {/* services */}
                        <div className="min-w-[180px] pr-8">
                            <h3 className="font-semibold mb-2 text-lg">Services</h3>
                            <ul className="space-y-1 text-sm">
                                <li>Study Abroad Consulting</li>
                                <li>Application Guidance</li>
                                <li>University Matching</li>
                            </ul>
                        </div>

                        {/* socials */}
                        <div className="min-w-[100px]">
                            <h3 className="font-semibold mb-2 text-lg">Connect</h3>
                            <div className="flex space-x-4 text-xl">
                                <a href="#" className="text-[#DE3F2E] hover:text-[#fff]"><FaTwitter /></a>
                                <a href="#" className="text-[#DE3F2E] hover:text-[#fff]"><FaLinkedin /></a>
                                <a href="#" className="text-[#DE3F2E] hover:text-[#fff]"><FaYoutube /></a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* divider */}
                <hr className="my-6 border-gray-700" />

                {/* copyright */}
                <p className="text-xs text-center text-gray-500">
                    © 2024 ImmigrationDoor. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
