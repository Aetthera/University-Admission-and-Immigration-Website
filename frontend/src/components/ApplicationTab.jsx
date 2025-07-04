import { useState, useEffect, useRef } from "react";
import DropDownButton from "./DropDownButton.jsx";
import DropdownMenu from "./DropdownMenu.jsx";
import BasicRoundedButton from "./BasicRoundedButton";
import { Mail, Printer } from "lucide-react";
import SchoolDetails from "./SchoolDetails";
import ApplicationPreviewCard from "./ApplicationPreviewCard.jsx";
import ProgressDetails from "./ProgressDetails";
import FileUploader from "./FileUploader.jsx";
import DocumentTable from "./DocumentTable.jsx";
import ApplicationListView from "./ApplicationListView.jsx";

export default function ApplicationTab() {
    const [documentStatus, setDocumentStatus] = useState([]);
    const [universities, setUniversities] = useState([]);
    const [selectedUniversity, setSelectedUniversity] = useState(null);
    const [isUniversityOpen, setIsUniversityOpen] = useState(false);

    const instructionRef = useRef(null);
    const [shouldPulse, setShouldPulse] = useState(false);


    const [programs, setPrograms] = useState([]);
    const [filteredPrograms, setFilteredPrograms] = useState([]);
    const [selectedProgram, setSelectedProgram] = useState(null);
    const [isProgramOpen, setIsProgramOpen] = useState(false);

    const [activeTab, setActiveTab] = useState("all");

    const [school, setSchool] = useState(null);
    const [application, setApplication] = useState(null);
    const [allSchoolDetails, setAllSchoolDetails] = useState([]);

    const [appliedUniversities, setAppliedUniversities] = useState([]);
    const currentAppDocuments = documentStatus.filter(
        doc => doc.applicationId === application?.id && doc.name && doc.createdAt
    );




    // File Uploader
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const containerRef = useRef();

    const handleDelete = (id) => {
        setUploadedFiles((prev) => prev.filter((doc) => doc.id !== id));
    };

    const [applications, setApplications] = useState([]);

    const handleApplicationSelect = (app) => {
        const university = universities.find(u => u.id === app.schoolId);
        const matchedSchool = allSchoolDetails.find(s => s.id === app.schoolId);
        setSchool(matchedSchool);



        const filtered = programs.filter(p => p.universityId === app.schoolId);
        const matchedProgram = filtered.find(p => p.name === app.programName);

        if (!university || !matchedProgram) {
            console.warn("University or Program not found.");
            return;
        }

        // Sequential state setting to avoid React batching
        setSelectedUniversity(null);
        setSelectedProgram(null);
        setFilteredPrograms([]);

        // Delay to give React time to reset states first
        setTimeout(() => {
            setSelectedUniversity(university);  // triggers the useEffect that sets filteredPrograms
            setTimeout(() => {
                setFilteredPrograms(filtered);   // manually set filtered programs to be safe
                setSelectedProgram(matchedProgram);
                setApplication(app);
                setSchool(matchedSchool);
                setActiveTab("detailView");
            }, 10);
        }, 10);
    };




    useEffect(() => {
        fetch("/data/schoolDetails.json")
            .then((res) => res.json())
            .then(setAllSchoolDetails);
    }, []);



    // 
    useEffect(() => {
        fetch("/data/applications.json")
            .then((res) => res.json())
            .then(setApplications);
    }, []);


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

    // Automatically activate Detail View only when both university and program are selected
    useEffect(() => {
        if (selectedUniversity && selectedProgram) {
            setActiveTab("detailView");
        } else if (activeTab === "detailView") {
            // don't forcefully reset to 'all' unless the user deselected
            setActiveTab("all");
        }
    }, [selectedUniversity?.id, selectedProgram?.name]);



    useEffect(() => {
        fetch("/data/schoolDetails.json")
            .then((res) => res.json())
            .then(setSchool);
    }, []);

    useEffect(() => {
        fetch("/data/applications.json")
            .then((res) => res.json())
            .then((data) => {
                setApplication(data[0]);
            });
    }, []);

    useEffect(() => {
        fetch("/data/applications.json")
            .then((res) => res.json())
            .then((data) => {
                setApplications(data);

                // Extract schoolIds from applications
                const uniqueIds = [...new Set(data.map(app => app.schoolId))];

                // Match against universities list
                const matchedUniversities = universities.filter(u => uniqueIds.includes(u.id));
                setAppliedUniversities(matchedUniversities);
            });
    }, [universities]);

    useEffect(() => {
        fetch("/data/documentStatus.json")
            .then(res => res.json())
            .then(setDocumentStatus);
    }, []);



    return (

        <>

            <p
                ref={instructionRef}
                className={`instruction-text flex justify-center p-[60px] text-black text-lg text-center transition-all duration-300 
    ${shouldPulse ? 'animate-pulse-shake' : ''}`}
            >
                Select your school and program <br />to view your application details.
            </p>




            <section className="flex flex-col gap-5 w-full min-h-[1000px] bg-white rounded-[40px] shadow-[0_4px_30px_rgba(0,0,0,0.03)]">

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
                            onClick={() => {
                                if (!selectedUniversity || !selectedProgram) {
                                    setShouldPulse(true);
                                    setTimeout(() => setShouldPulse(false), 600); // reset after animation
                                    return;
                                }
                                setActiveTab(activeTab === "detailView" ? null : "detailView");
                            }}
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


                {activeTab !== "all" && (

                    <>

                        {/* PART 1 /// Top */}
                        <div className="py-[40px]">

                            {application && (
                                <p className="text-sm text-gray-500 text-center">
                                    Application created on{" "}
                                    {new Date(application.createdAt).toLocaleString(undefined, {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                        hour: "numeric",
                                        minute: "2-digit"
                                    })}
                                </p>
                            )}

                        </div>

                        {/* PART 1 /// Bottom */}
                        <div className="flex flex-row justify-between items-center w-full max-w-6xl mx-auto px-[90px] pb-[40px]">

                            {/* Left - School Details */}
                            <div className="">
                                {!school ? (
                                    <p className="text-gray-500">Loading...</p>
                                ) : (
                                    <section className="bg-white p-6">
                                        <SchoolDetails school={school} />
                                    </section>
                                )}
                            </div>

                            {/* Right - Application Image Preview */}
                            <div className="w-[300px]">
                                {application && (
                                    <ApplicationPreviewCard
                                        imageUrl={application.previewImageUrl}
                                        pdfUrl={application.pdfUrl}
                                        uploadedAt={new Date(application.createdAt).toLocaleDateString()}
                                    />
                                )}


                            </div>

                        </div>

                        {/* Separater */}
                        <div className="w-[90%] h-[2px] bg-gray-200 mx-auto my-10"></div>

                        {/* PART 2 /// Progress Details */}
                        <div className="flex flex-col justify-center items-center">
                            <h2 className="text-3xl font-normal text-center text-black ">Progress Details</h2>
                            <ProgressDetails />
                        </div>
                    </>

                )}

                {activeTab === "all" && (
                    <ApplicationListView
                        applications={applications}
                        universities={appliedUniversities}
                        onSelectApplication={handleApplicationSelect}
                    />
                )}






            </section>

            {activeTab !== "all" && (

                <section className="flex flex-col items-center gap-5 w-full min-h-[1000px] bg-white rounded-[40px] shadow-[0_4px_30px_rgba(0,0,0,0.03)] mt-3">

                    <h1 className="w-full pl-[30px] pt-[30px] text-3xl">Related Documents</h1>

                    {/* Upload Files */}
                    <div className="flex w-[95%] h-[400px] mt-[10px]">
                        {/* <FileUploader
                            onConfirmUpload={(newDoc) => {
                                setUploadedFiles((prev) => {
                                    if (prev.length >= 10) {
                                        alert("You can only upload a maximum of 10 files.");
                                        return prev;
                                    }
                                    return [...prev, newDoc];
                                });
                            }}

                        /> */}

                        <FileUploader
                            onConfirmUpload={(newDoc) => {
                                if (!application) return alert("No application selected.");

                                const doc = {
                                    ...newDoc,
                                    id: Date.now().toString(),
                                    applicationId: application.id,
                                    status: "Sent"
                                };

                                setDocumentStatus(prev => [...prev, doc]);
                            }}
                        />



                    </div>

                    <div className="w-[90%]">
                        {/* <DocumentTable
                            documents={uploadedFiles}
                            onDelete={(id) => {
                                setUploadedFiles((prev) => prev.filter((doc) => doc.id !== id));
                            }}
                        /> */}

                        <DocumentTable
                            documents={currentAppDocuments}
                            onDelete={(id) => {
                                setDocumentStatus(prev => prev.filter(doc => doc.id !== id));
                            }}
                        />


                    </div>

                </section>

            )}

        </>


    );
}
