import { useState } from "react";
import { Upload, Trash2, CheckCircle } from "lucide-react";

export default function FileUploader({ onConfirmUpload }) {
    const [file, setFile] = useState(null);
    const [previewName, setPreviewName] = useState("");
    const [isDragging, setIsDragging] = useState(false);

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const uploadedFile = e.dataTransfer.files[0];
        if (isFileValid(uploadedFile)) {
            setFile(uploadedFile);
            setPreviewName(uploadedFile.name);
        }
    };

    const handleFileChange = (e) => {
        const uploadedFile = e.target.files[0];
        if (isFileValid(uploadedFile)) {
            setFile(uploadedFile);
            setPreviewName(uploadedFile.name);
        }
    };

    const isFileValid = (f) => {
        const allowedTypes = [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "image/jpeg",
            "image/png"
        ];
        return f && allowedTypes.includes(f.type);
    };

    const handleDelete = () => {
        setFile(null);
        setPreviewName("");
    };

    const handleConfirm = () => {
        if (file && onConfirmUpload) {
            onConfirmUpload({
                id: Date.now().toString(),
                name: file.name,
                type: file.type,
                createdAt: new Date().toISOString(),
                status: "Sent"
            });
        }

        setFile(null);
        setPreviewName("");
    };




    return (
        <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={() => document.getElementById("fileInput").click()}
            className={`w-full h-full rounded-2xl flex flex-col items-center justify-center p-10 text-center cursor-pointer transition border-2 
                    ${isDragging
                    ? "border-green-500 bg-green-50 shadow-md"
                    : file
                        ? "border-green-400 hover:border-green-600 bg-gray-100"
                        : "border-dashed border-gray-300 bg-gray-100 hover:border-gray-400"
                }`}
        >
            <Upload className="w-12 h-12 mb-4 text-black" />
            {!file ? (
                <>
                    <p className="text-lg font-semibold text-black ">Drag and Drop</p>
                    <p className="text-sm text-gray-600">or tap to browse files</p>
                </>
            ) : (
                <>
                    <p className="text-lg font-semibold text-black">{previewName}</p>
                    <div className="flex gap-4 mt-4">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleDelete();
                            }}
                            className="flex items-center gap-1 text-sm text-red-600 hover:underline"
                        >
                            <Trash2 className="w-4 h-4" />
                            Delete
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleConfirm();
                            }}
                            className="flex items-center gap-1 text-sm text-green-600 hover:underline"
                        >
                            <CheckCircle className="w-4 h-4" />
                            Confirm Upload
                        </button>
                    </div>
                </>
            )}

            <input
                id="fileInput"
                type="file"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                onChange={handleFileChange}
                className="hidden"
            />
        </div>
    );
}
