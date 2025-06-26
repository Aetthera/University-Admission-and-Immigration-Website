import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function DropdownMenu({
    label = "Select",
    items = [],
    selectedItem = null,
    onSelect,
    className = "",
}) {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef();

    // Close on outside click
    useEffect(() => {
        function handleClickOutside(e) {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className={`relative inline-block ${className}`} ref={menuRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-150 ${selectedItem
                        ? "bg-black text-white border-black"
                        : "bg-transparent text-black border-black"
                    }`}
            >
                <span>{selectedItem?.name || label}</span>
                <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"
                        }`}
                />
            </button>

            {isOpen && (
                <ul className="absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-[15px] shadow-lg z-50 max-h-60 overflow-auto p-1">
                    {items.map((item) => {
                        const isSelected = selectedItem?.id === item.id;
                        return (
                            <li
                                key={item.id}
                                className={`px-4 py-2 rounded-[12px] cursor-pointer transition-all ${isSelected
                                        ? "bg-black text-white"
                                        : "hover:bg-gray-100"
                                    }`}
                                onClick={() => {
                                    onSelect(item);
                                    setIsOpen(false);
                                }}
                            >
                                {item.name}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}
