export default function DropdownMenu({ items = [], selectedItem, onSelect }) {
  return (
    <ul className="absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-60 overflow-auto p-1">
      {items.map((item) => {
        const isSelected = selectedItem?.id === item.id;
        return (
          <li
            key={item.id}
            className={`px-4 py-2 rounded-md cursor-pointer transition-all ${
              isSelected ? "bg-black text-white" : "hover:bg-gray-100"
            }`}
            onClick={() => onSelect(item)}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
}
