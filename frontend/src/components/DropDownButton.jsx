import { ChevronDown } from "lucide-react";

export default function DropDownButton({ label, selected, isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-4 px-7 py-3 rounded-full transition-all duration-150 ${
        selected
          ? "bg-black text-white border-[1px] border-black"
          : "bg-transparent text-black border-[1px] border-gray-300"
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
