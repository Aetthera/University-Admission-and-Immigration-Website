export default function SmallArrowButton() {
  return (
    <button className="group relative p-0 border-none bg-transparent w-[140px] h-[54px]">
      {/* SVG Shape */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 138.93 54.24"
        className="absolute inset-0 w-full h-full transition-all duration-300"
      >
        <path
          d="M109.43,53.38H27.23c-14.68,0-26.59-11.9-26.59-26.59h0c0-14.32,11.61-25.93,25.93-25.93h82.61
            c2.12,0,4.17.77,5.76,2.16l20.13,17.55c4.36,3.8,4.27,10.6-.19,14.28l-20.07,16.6c-1.51,1.25-3.42,1.94-5.38,1.94Z"
          fill="transparent"
          stroke="#de3f2e"
          strokeWidth="0.91"
          strokeMiterlimit="10"
          className="transition-all duration-300 group-hover:fill-[#de3f2e]"
        />
      </svg>

      {/* Text */}
      <span className="relative ml-[-7px] z-10 text-black group-hover:text-white font-medium transition-colors duration-300">
        More Info
      </span>
    </button>
  );
}
