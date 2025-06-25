import { useState, useEffect } from "react";
import UniversitySelectorButton from "./UniversitySelectorButton";

export default function ApplicationTab() {
  const [universities, setUniversities] = useState([]);
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  useEffect(() => {
    async function fetchData() {
      // Simulate loading from a JSON file or endpoint
      const response = await fetch("/data/universities.json"); // or your actual path
      const data = await response.json();
      setUniversities(data);
    }

    fetchData();
  }, []);

  return (
    <div className="p-6">
      <UniversitySelectorButton
        universities={universities}
        selectedUniversity={selectedUniversity}
        onSelect={setSelectedUniversity}
      />
    </div>
  );
}
