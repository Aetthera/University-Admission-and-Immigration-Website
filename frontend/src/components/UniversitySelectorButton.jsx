// import { useState } from "react";
// import { ChevronDown } from "lucide-react";



// export default function UniversitySelectorButton({
//     universities = [],
//     selectedUniversity,
//     onSelect,
// }) {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <div className="relative inline-block">
//             <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-150 ${selectedUniversity
//                     ? "bg-black text-white border-black"
//                     : "bg-transparent text-black border-black"
//                     }`}
//             >
//                 <span>{selectedUniversity?.name || "Select University"}</span>
//                 <ChevronDown
//                     className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"
//                         }`}
//                 />

//             </button>


//             {isOpen && (
//                 <ul className="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded shadow-md z-10 max-h-60 overflow-auto">
//                     {universities.map((uni) => (
//                         <li
//                             key={uni.id}
//                             className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                             onClick={() => {
//                                 onSelect(uni);
//                                 setIsOpen(false);
//                             }}
//                         >
//                             {uni.name}
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// }


import DropdownMenu from "./DropdownMenu"; // adjust path if needed

export default function UniversitySelectorButton({
  universities = [],
  selectedUniversity,
  onSelect,
}) {
  return (
    <DropdownMenu
      label="Select University"
      items={universities}
      selectedItem={selectedUniversity}
      onSelect={onSelect}
    />
  );
}
