export default function SmallArrowButton() {
  return (
    <button className="group relative p-0 border-none bg-transparent w-[195px] h-[52px]">
      {/* SVG Shape (filled red arrow) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 195.11 52.52"
        className="absolute inset-0 w-full h-full transition-all duration-300"
      >
        <path
          d="M166.26,52.52H26.59C11.9,52.52,0,40.62,0,25.93h0C0,11.61,11.61,0,25.93,0h140.08c2.12,0,4.17.77,5.76,2.16l20.13,17.55
            c4.36,3.8,4.27,10.6-.19,14.28l-20.07,16.6c-1.51,1.25-3.42,1.94-5.38,1.94Z"
          fill="#de3f2e"
          className="transition-all duration-300 group-hover:brightness-110 group-hover:fill-[#ce3b2b]"
        />
      </svg>

      {/* Text */}
      <span className="relative z-10 text-white group-hover:text-white font-medium transition-colors duration-300">
        Get Consultation
      </span>
    </button>
  );
}
