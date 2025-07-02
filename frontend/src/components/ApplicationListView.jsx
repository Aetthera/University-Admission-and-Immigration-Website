import { FileText } from "lucide-react";

export default function ApplicationListView({ applications }) {
    return (
        <div className="w-full p-10">
            <h2 className="text-2xl font-semibold mb-6">All Submitted Applications</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {applications.map((app) => (
                    <div key={app.id} className="flex flex-col items-center p-4 rounded-xl shadow-sm bg-gray-50 hover:bg-gray-100 transition">
                        <FileText className="w-10 h-10 text-blue-600 mb-2" />
                        <p className="text-sm font-medium text-black text-center truncate w-full">{app.programName}</p>
                        <p className="text-xs text-gray-500 text-center">
                            {new Date(app.createdAt).toLocaleDateString()}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
