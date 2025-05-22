import { FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-gray-300 pt-8 pb-4 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-x-12 gap-y-8">
          {/* logo + tagline */}
          <div className="min-w-[180px] flex-1">
            <div className="flex items-center mb-2">
              <span className="text-lg font-bold">
                <span className="text-blue-600">Immigration </span>
                <span className="text-red-500">Door</span>
              </span>
            </div>
            <p className="text-sm text-gray-400">Your future starts here</p>
          </div>

          {/* quick links */}
          <div className="min-w-[150px]">
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline text-blue-400">Home</a></li>
              <li><a href="#" className="hover:underline text-blue-400">Services</a></li>
              <li><a href="#" className="hover:underline text-blue-400">About</a></li>
              <li><a href="#" className="hover:underline text-blue-400">Contact</a></li>
            </ul>
          </div>

          {/* services */}
          <div className="min-w-[180px]">
            <h4 className="font-semibold mb-2">Services</h4>
            <ul className="space-y-1 text-sm">
              <li>Study Abroad Consulting</li>
              <li>Application Guidance</li>
              <li>University Matching</li>
            </ul>
          </div>

          {/* socials */}
          <div className="min-w-[150px]">
            <h4 className="font-semibold mb-2">Connect</h4>
            <div className="flex space-x-4 text-xl">
              <a href="#" className="hover:text-red-500"><FaTwitter /></a>
              <a href="#" className="hover:text-red-500"><FaLinkedin /></a>
              <a href="#" className="hover:text-red-500"><FaYoutube /></a>
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
