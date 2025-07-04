
// // CurvyCard.jsx
// import { motion } from "framer-motion";

// const SHORT_PATH =
//   "M257.43,44.35v132c0,24.49-19.86,44.35-44.35,44.35H44.35c-24.5,0-44.35-19.86-44.35-44.35V44.35c0-6.79,1.52-13.23,4.25-18.98,2.73-5.75,9.78-7.12,14.35-3.1,5.21,4.58,12.05,7.35,19.53,7.35,13.58,0,25.02-9.14,28.52-21.61,1.34-4.77,5.79-8.01,10.74-8.01h135.69c24.49,0,44.35,19.86,44.35,44.35Z";

// const TALL_PATH =
//   "M257.43,44.35v210.52c0,24.49-19.86,44.35-44.35,44.35H44.35c-24.5,0-44.35-19.86-44.35-44.35V44.35c0-6.79,1.52-13.23,4.25-18.98,2.73-5.75,9.78-7.12,14.35-3.1,5.21,4.58,12.05,7.35,19.53,7.35,13.58,0,25.02-9.14,28.52-21.61,1.34-4.77,5.79-8.01,10.74-8.01h135.69c24.49,0,44.35,19.86,44.35,44.35Z";

// const CurvyCard = ({ children, icon, className = "" }) => {
//   return (
//     <motion.div
//       className={`relative w-[328px] ${className}`}
//       initial={false}
//       whileHover="hovered"
//       animate="default"
//       variants={{
//         default: { height: "391px" },
//         hovered: { height: "391px" },
//       }}
//       transition={{ duration: 0.4, ease: "easeInOut" }}
//     >
//       <svg
//         viewBox="0 0 257.43 299.7"
//         xmlns="http://www.w3.org/2000/svg"
//         className="w-full h-full absolute top-0 left-0 z-0"
//         preserveAspectRatio="none"
//       >
//         <motion.path
//           fill="#1462A3"
//           stroke="#467BB4"
//           strokeWidth="0.5"
//           variants={{
//             default: { d: SHORT_PATH },
//             hovered: { d: TALL_PATH },
//           }}
//           transition={{ duration: 0.4, ease: "easeInOut" }}
//         />
//       </svg>

//       {icon && (
//         <div className="absolute top-[-25px] left-[22px] w-14 h-14 bg-[#1462A3] border-[#467BB4] border-[1px] rounded-full flex items-center justify-center z-10">
//           {icon}
//         </div>
//       )}

//       <div className="absolute inset-0 flex flex-col items-start justify-start text-white px-12 pt-16 z-10">
//         {children}
//       </div>
//     </motion.div>
//   );
// };

// export default CurvyCard;


// CurvyCard.jsx
import { useState } from "react";
import { motion } from "framer-motion";

const SHORT_PATH =
  "M257.43,44.35v132c0,24.49-19.86,44.35-44.35,44.35H44.35c-24.5,0-44.35-19.86-44.35-44.35V44.35c0-6.79,1.52-13.23,4.25-18.98,2.73-5.75,9.78-7.12,14.35-3.1,5.21,4.58,12.05,7.35,19.53,7.35,13.58,0,25.02-9.14,28.52-21.61,1.34-4.77,5.79-8.01,10.74-8.01h135.69c24.49,0,44.35,19.86,44.35,44.35Z";

const TALL_PATH =
  "M257.43,44.35v210.52c0,24.49-19.86,44.35-44.35,44.35H44.35c-24.5,0-44.35-19.86-44.35-44.35V44.35c0-6.79,1.52-13.23,4.25-18.98,2.73-5.75,9.78-7.12,14.35-3.1,5.21,4.58,12.05,7.35,19.53,7.35,13.58,0,25.02-9.14,28.52-21.61,1.34-4.77,5.79-8.01,10.74-8.01h135.69c24.49,0,44.35,19.86,44.35,44.35Z";

const CurvyCard = ({ children, icon, className = "" }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={`relative w-[328px] h-[391px] cursor-pointer transition-all duration-300 ease-in-out ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* SVG Background */}
      <svg
        viewBox="0 0 257.43 299.7"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full absolute top-0 left-0 z-0"
        preserveAspectRatio="none"
      >
        <motion.path
          variants={{
            initial: {
              d: SHORT_PATH,
              fill: "#1462A3",
              stroke: "#467BB4",
              strokeWidth: "0.5",
            },
            hover: {
              d: TALL_PATH,
              fill: "#ffffff",
              stroke: "#ffffff",
              strokeWidth: "0",
            },
          }}
          animate={hovered ? "hover" : "initial"}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </svg>

      {/* Icon bubble */}
      {icon && (
        <motion.div
          className="absolute top-[-25px] left-[22px] w-14 h-14 rounded-full flex items-center justify-center z-10 border transition-all duration-100"
          animate={{
            backgroundColor: hovered ? "#ffffff" : "#1462A3",
            borderColor: hovered ? "#ffffff" : "#467BB4",
          }}
        >
          <div className={`transition-colors duration-100 ${hovered ? "text-black" : "text-white"}`}>
            {icon}
          </div>
        </motion.div>
      )}

      {/* Content */}
      <motion.div
        className={`absolute inset-0 flex flex-col items-start justify-between px-12 pt-16 pb-12 z-10 transition-colors duration-100`}
        animate={{ color: hovered ? "#000000" : "#ffffff" }}
      >
        <div>
            {children}
        </div>
        
        {/* Button */}
        <motion.button
          className="mt-4 px-6 py-4 rounded-full border border-[#256DB2] bg-white text-[#256DB2] text-sm font-medium flex hover:border-[#DE3F2E]"
          initial={{ opacity: 0, y: 10 }}
          animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: .5, ease: "easeOut" }}
        >
          Learn More
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default CurvyCard;
