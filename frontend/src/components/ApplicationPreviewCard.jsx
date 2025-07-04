import { Download, Eye } from "lucide-react";

export default function ApplicationPreviewCard({ imageUrl, pdfUrl, uploadedAt }) {
    return (
        <div className="flex flex-col items-center">


            {/* Preview image */}
            <div className="aspect-[8.5/11] w-full rounded-lg border overflow-hidden">
                <img
                    src={imageUrl}
                    alt="Application Preview"
                    className="w-full h-full object-contain"
                />
            </div>



            {/* Upload Info + Actions */}
            <div className="mt-4 w-full text-center space-y-2">
                {/* Upload Date */}
                {uploadedAt && (
                    <p className="text-xs text-gray-500">Uploaded on {uploadedAt}</p>
                )}

                {/* Action Buttons */}
                <div className="flex justify-center gap-4">
                    {/* View Full PDF */}
                    <a
                        href={pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm flex items-center gap-1 text-blue-600 hover:underline"
                    >
                        <Eye className="w-4 h-4" />
                        View
                    </a>

                    {/* Download PDF */}
                    <a
                        href={pdfUrl}
                        download
                        className="text-sm flex items-center gap-1 text-gray-600 hover:text-black"
                    >
                        <Download className="w-4 h-4" />
                        Download
                    </a>
                </div>
            </div>
        </div>
    );
}
