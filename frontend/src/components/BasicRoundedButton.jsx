export default function BasicRoundedButton({
  label,
  isSelected = false,
  onClick
}) {
  return (
    <button
      onClick={onClick}
      className={`px-7 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
        isSelected
          ? "bg-black text-white"
          : "bg-gray-100 text-black bg-gray-200"
      }`}
    >
      {label}
    </button>
  );
}
