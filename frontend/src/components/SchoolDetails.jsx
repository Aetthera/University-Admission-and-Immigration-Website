import { ExternalLink } from "lucide-react";

export default function SchoolDetailsCard({ school }) {
    return (
        <div className="space-y-4 text-black">
            {/* School Name + external link */}
            <h2 className="text-3xl font-semibold flex items-center gap-2">
                {school.name}
                <a href={school.schoolLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5" />
                </a>
            </h2>

            {/* Diploma Type */}
            <div>
                <p className="font-roboto text-gray-400 text-sm">Diploma Type</p>
                <p>{school.diplomaType}</p>
            </div>

            {/* Address with external link */}
            <div>
                <p className="font-roboto text-gray-400 text-sm">Address</p>
                <a
                    href={school.addressLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline inline-flex items-center gap-1"
                >
                    {school.address}
                    <ExternalLink className="w-4 h-4" />
                </a>
            </div>

            {/* Tuition */}
            <div>
                <p className="font-roboto text-gray-400 text-sm">Total Tuition Costs</p>
                <p>${school.tuition.toLocaleString()}</p>
            </div>

            {/* Semesters */}
            <div>
                <p className="font-roboto text-gray-400 text-sm">No of Semesters</p>
                <p>{school.semesters}</p>
            </div>

            {/* Program Length */}
            <div>
                <p className="font-roboto text-gray-400 text-sm">Program Length (Years)</p>
                <p>{school.years}</p>
            </div>

            {/* Start & End Dates */}
            <div>
                <p className="font-roboto text-gray-400 text-sm">Start Date</p>
                <p>{school.startDate}</p>
            </div>
            <div>
                <p className="font-roboto text-gray-400 text-sm">End Date</p>
                <p>{school.endDate}</p>
            </div>
        </div>
    );
}
