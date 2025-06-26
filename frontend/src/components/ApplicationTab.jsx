import { useState, useEffect, useRef } from "react";
import DropDownButton from "./DropDownButton.jsx";
import DropdownMenu from "./DropdownMenu.jsx";
import BasicRoundedButton from "./BasicRoundedButton";
import { Mail, Printer } from "lucide-react";

export default function ApplicationTab() {
    const [universities, setUniversities] = useState([]);
    const [selectedUniversity, setSelectedUniversity] = useState(null);
    const [isUniversityOpen, setIsUniversityOpen] = useState(false);

    const [programs, setPrograms] = useState([]);
    const [filteredPrograms, setFilteredPrograms] = useState([]);
    const [selectedProgram, setSelectedProgram] = useState(null);
    const [isProgramOpen, setIsProgramOpen] = useState(false);

    const [activeTab, setActiveTab] = useState("all");

    const containerRef = useRef();

    // Fetch universities
    useEffect(() => {
        fetch("/data/universities.json")
            .then((res) => res.json())
            .then(setUniversities);
    }, []);

    // Fetch all programs (initially)
    useEffect(() => {
        fetch("/data/programs.json")
            .then((res) => res.json())
            .then(setPrograms);
    }, []);

    // When a university is selected, filter programs
    useEffect(() => {
        if (selectedUniversity) {
            const filtered = programs.filter(
                (program) => program.universityId === selectedUniversity.id
            );
            setFilteredPrograms(filtered);
            setSelectedProgram(null); // Reset program selection
        } else {
            setFilteredPrograms([]);
        }
    }, [selectedUniversity, programs]);

    // Close both dropdowns on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setIsUniversityOpen(false);
                setIsProgramOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Automatically activate Detail View when both university and program are selected
    useEffect(() => {
        if (selectedUniversity && selectedProgram) {
            setActiveTab("detailView");
        } else if (activeTab === "detailView") {
            setActiveTab(null);
        }
    }, [selectedUniversity, selectedProgram]);


    return (

        <section className="flex flex-col gap-5 min-h-[1000px] bg-white rounded-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.05)]">

            {/* Top - Buttons options, mail & print */}
            <div className="flex flex-row justify-between gap-1" ref={containerRef}>


                {/* TOP - Left */}
                <div className="flex flex-row justify-start gap-1 p-4">

                    {/* University Selector */}
                    <div className="relative inline-block">
                        <DropDownButton
                            label="Select University"
                            selected={selectedUniversity}
                            isOpen={isUniversityOpen}
                            onClick={() => setIsUniversityOpen(!isUniversityOpen)}
                        />
                        {isUniversityOpen && (
                            <DropdownMenu
                                items={universities}
                                selectedItem={selectedUniversity}
                                onSelect={(uni) => {
                                    setSelectedUniversity(uni);
                                    setIsUniversityOpen(false);
                                }}
                            />
                        )}
                    </div>

                    {/* Program Selector */}
                    <div className="relative inline-block">
                        <DropDownButton
                            label="Select Program"
                            selected={selectedProgram}
                            isOpen={isProgramOpen}
                            onClick={() => {
                                if (selectedUniversity) {
                                    setIsProgramOpen(!isProgramOpen);
                                }
                            }}
                            disabled={!selectedUniversity}
                        />
                        {isProgramOpen && (
                            <DropdownMenu
                                items={filteredPrograms}
                                selectedItem={selectedProgram}
                                onSelect={(program) => {
                                    setSelectedProgram(program);
                                    setIsProgramOpen(false);
                                }}
                            />
                        )}
                    </div>

                    {/* Detail View btn */}
                    <BasicRoundedButton
                        label="Detail View"
                        isSelected={activeTab === "detailView"}
                        onClick={() => setActiveTab(activeTab === "detailView" ? null : "detailView")}
                    />
                    
                    {/* See All btn */}
                    <BasicRoundedButton
                        label="See All"
                        isSelected={activeTab === "all"}
                        onClick={() => setActiveTab(activeTab === "all" ? null : "all")}
                    />


                    {/* Drafts btn */}
                    <BasicRoundedButton
                        label="Drafts"
                        isSelected={activeTab === "drafts"}
                        onClick={() => setActiveTab(activeTab === "drafts" ? null : "drafts")}
                    />

                    {/* Saved btn*/}
                    <BasicRoundedButton
                        label="Saved"
                        isSelected={activeTab === "saved"}
                        onClick={() => setActiveTab(activeTab === "saved" ? null : "saved")}
                    />
                </div>



                {/* TOP - Right */}
                <div className="flex flex-row justify-end gap-1 p-4">
                    <button
                        onClick={() => {
                            // TODO: handle email sending logic
                            console.log("Send email");
                        }}
                        className="text-black bg-white w-0"
                        aria-label="Send to Email"
                    >
                        <Mail className="w-6 h-6" />
                    </button>

                    <button
                        onClick={() => {
                            window.print(); // basic print behavior
                        }}
                        className="text-black bg-white"
                        aria-label="Print"
                    >
                        <Printer className="w-6 h-6" />
                    </button>
                </div>

            </div>



        </section>

    );
}
