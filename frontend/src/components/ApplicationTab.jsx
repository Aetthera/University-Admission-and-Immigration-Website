// import { useState, useEffect } from "react";
// import UniversitySelectorButton from "./UniversitySelectorButton";

// export default function ApplicationTab() {
//   const [universities, setUniversities] = useState([]);
//   const [selectedUniversity, setSelectedUniversity] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       // Simulate loading from a JSON file or endpoint
//       const response = await fetch("/data/universities.json"); // or your actual path
//       const data = await response.json();
//       setUniversities(data);
//     }

//     fetchData();
//   }, []);

//   return (
//     <div className="p-6">
//       <UniversitySelectorButton
//         universities={universities}
//         selectedUniversity={selectedUniversity}
//         onSelect={setSelectedUniversity}
//       />
//     </div>
//   );
// }




import { useState, useEffect, useRef } from "react";
import UniversitySelectorButton from "./UniversitySelectorButton";
import DropdownMenu from "./DropDownMenu.jsx";

export default function ApplicationTab() {
  const [universities, setUniversities] = useState([]);
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    fetch("/data/universities.json")
      .then((res) => res.json())
      .then(setUniversities);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={containerRef}>
      <UniversitySelectorButton
        label="Select University"
        selected={selectedUniversity}
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />

      {isOpen && (
        <DropdownMenu
          items={universities}
          selectedItem={selectedUniversity}
          onSelect={(uni) => {
            setSelectedUniversity(uni);
            setIsOpen(false);
          }}
        />
      )}
    </div>
  );
}
