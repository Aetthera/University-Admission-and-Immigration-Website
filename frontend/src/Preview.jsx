// src/Preview.jsx
import UniversitySelectorButton from "./components/UniversitySelectorButton"; // adjust path if needed
import { useState } from "react";

export default function Preview() {
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <UniversitySelectorButton
        selectedUniversity={selectedUniversity}
        onSelect={setSelectedUniversity}
      />
    </div>
  );
}
