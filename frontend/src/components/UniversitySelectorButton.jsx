// import DropdownMenu from "./DropdownMenu";

// export default function UniversitySelectorButton({
//   universities = [],
//   selectedUniversity,
//   onSelect,
// }) {
//   return (
//     <DropdownMenu
//       label="Select University"
//       items={universities}
//       selectedItem={selectedUniversity}
//       onSelect={onSelect}
//     />
//   );
// }


import { ChevronDown } from "lucide-react";

export default function UniversitySelectorButton({ label, selected, isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-150 ${
        selected
          ? "bg-black text-white border-black"
          : "bg-transparent text-black border-black"
      }`}
    >
      <span>{selected?.name || label}</span>
      <ChevronDown
        className={`w-4 h-4 transition-transform duration-200 ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
      />
    </button>
  );
}
