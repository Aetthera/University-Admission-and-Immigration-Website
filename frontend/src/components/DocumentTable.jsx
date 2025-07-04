import DocumentStatusTracker from "./DocumentProgressTracker"; // the 4-stage component
import { Trash2 } from "lucide-react";


// const documents = [
//     {
//         id: "doc1",
//         name: "document-application-lasalle-prog-2025.pdf",
//         createdAt: "2025-06-08T20:33:00Z",
//         status: "Processing"
//     },
//     {
//         id: "doc2",
//         name: "document-application-lasalle-prog-2025.pdf",
//         createdAt: "2025-06-08T20:33:00Z",
//         status: "Uploaded"
//     },
//     {
//         id: "doc3",
//         name: "document-application-lasalle-prog-2025.pdf",
//         createdAt: "2025-06-08T20:33:00Z",
//         status: "Sent"
//     }
// ];



export default function DocumentTable({ documents, onDelete }) {
    return (
        <div className="w-full p-6">
            {/* Header */}
            <div className="flex justify-between font-semibold text-lg border-b pb-4 mb-4">
                <span className="w-1/2 text-black">Title</span>
                <span className="w-1/4 text-center text-black">Date Added</span>
                <span className="w-1/4 text-right text-black">Status</span>
            </div>

            {/* Document Rows */}
            {documents.map((doc) => (
                <div
                    key={doc.id}
                    className="flex items-center justify-between py-4 group"
                >
                    {/* Left section (file icon or trash can) */}
                    <div className="flex items-center gap-4 w-1/2">
                        <div className="relative w-10 h-10 shrink-0">
                            {/* Trash icon (only shown on hover if 'Sent') */}
                            <div className="absolute inset-0 hidden group-hover:flex items-center justify-center w-10 h-10 rounded-md bg-gray-100 text-red-500 hover:text-red-600">

                                {doc.status === "Sent" && (
                                    <button onClick={() => onDelete(doc.id)} className="w-10 h-10 flex items-center justify-center m-[0px] p-[0px] bg-white">
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                )}
                            </div>

                            {/* File type label */}
                            <div className="absolute inset-0 flex items-center justify-center w-10 h-10 rounded-md bg-gray-100 text-gray-500 group-hover:hidden">

                                {doc.type?.includes("pdf") && <span className="text-xs font-bold">PDF</span>}
                                {doc.type?.includes("word") && <span className="text-xs font-bold">DOC</span>}
                                {doc.type?.includes("image") && <span className="text-xs font-bold">IMG</span>}
                            </div>
                        </div>

                        {/* ✅ File name */}
                        <span className="text-sm text-black truncate">{doc.name}</span>
                    </div>



                    {/* Date */}
                    <div className="flex justify-center items-center w-1/4 text-sm text-gray-500 text-center">
                        {new Date(doc.createdAt).toLocaleString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "numeric",
                            minute: "2-digit",
                            hour12: true,
                            timeZoneName: "short"
                        })}
                    </div>

                    {/* Status */}
                    <div className="flex justify-end w-1/4 mt-[-5px] text-black  text-sm text-right">
                        <DocumentStatusTracker currentStage={doc.status} />
                    </div>
                </div>
            ))}

        </div>
    );
}
