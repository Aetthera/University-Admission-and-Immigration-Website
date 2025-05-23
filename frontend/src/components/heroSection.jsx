import planeImg from '../assets/TkzdVo.tif.png'; 
import { MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import '../components/heroSection/hero.css';

export default function Hero() {
  return (
    <section className="flex items-center justify-center min-h-[85vh] bg-gray-100 relative overflow-hidden">
      
      {/* Main container */}
      <div className="relative max-w-7xl h-[60vh] w-full px-6 py-16 bg-gray-200/60 backdrop-md rounded-[4vw] shadow-lg text-left">
        
        {/* Header text */}
        <h1 className="text-6xl font-bold text-gray-800 mb-4 mt-[6vh] pb-10 pl-[15vh]">
          Lorem Ipsum
        </h1>
        

        {/* Sub text */}
        <p className="text-lg text-gray-700 mb-6 justify-left pl-[15vh]" style={{ maxWidth: '500px' }}>
        Lorem ipsum dolor sit amet, 
          consectetuer adipiscing elit, sed 
          diam nonummy nibh euismod 
          tincidunt ut laoreet dolore magna 
          aliquam erat volutpat. Ut wisi 
          enim ad minim veniam, quis 
          nostrud exerci tation ullamcorper 
          suscipit lobortis nisl ut aliquip ex 
          ea commodo consequat. Duis 
        </p>

        {/* Plane image peeking out on the right */}
        <img
          src={planeImg}
          alt="Plane"
          className="absolute right-[-210px] top-[200px] transform -translate-y-1/2 w-[800px] h-auto z-20"
        />


        {/* Search Box */}
        <div className="absolute left-[130px] top-[500px] w-[1050px] h-[19vh] bg-white/90 rounded-[3vw] shadow-xl border border-gray-300 z-0 px-6 py-4 text-center">
          
          {/* heading text */}
          <p className="text-[2.5vh] text-black mb-2 text-center pb-8">Find what you're looking for</p>

          {/* Form elements */}
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
                className="flex-grow h-[45px] px-4 rounded-[4vw] border-2 border-transparent bg-white rainbow-border focus:outline-none"
            />

            {/* Application Select */}
            <select className="h-[45px] w-[160px] px-4 rounded-[4vw] border border-gray-300 text-gray-700 bg-white">
              <option>Applications</option>
              <option>Education</option>
              <option>Immigration</option>
            </select>

            {/* Region select */}
            <select className="h-[45px] px-4 rounded-[4vw] border border-gray-300 text-gray-700 bg-white">
              <option>Select Region</option>
              <option>Canada</option>
              <option>UK</option>
            </select>

            {/* Search button */}
                <button className="rounded-full bg-gray-100 w-13 h-13 px-2 mx-2 ">
                    <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
                </button>
          </div>
        </div>
      </div>
    </section>
  );
}