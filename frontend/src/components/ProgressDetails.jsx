import { Check, Clock } from "lucide-react";

const progressSteps = [
    {
        label: "Sent",
        description: "Application has been filled and submitted.",
        date: "2025-07-12",
        status: "complete",
    },
    {
        label: "Received",
        description: "We’ve received your application and revising to ensure all documents required have been provided.",
        date: "2025-07-08",
        status: "complete",
    },
    {
        label: "Processing",
        description: "Application is being reviewed by our team and the university’s team.",
        date: null,
        status: "pending",
    },
    {
        label: "Completed",
        description: "Process is now complete. Please check your messages, you will be receiving a message with instructions and details soon.",
        date: null,
        status: "pending",
    }
];

export default function ProgressDetails() {
    return (
        <div className="w-full max-w-6xl px-[120px] py-[80px] space-y-6">

            {/* Header */}
            <div className="flex justify-between text-left">
                <div className="w-1/3 font-semibold">Steps</div>
                <div className="w-1/3 text-center font-semibold">Date</div>
                <div className="w-1/3 text-right font-semibold">Status</div>
            </div>

            {/* Steps */}
            <div className="space-y-6">
                {progressSteps.map((step, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-start gap-4 border-b border-gray-100 pb-4"
                    >
                        {/* Step */}
                        <div className="w-1/3">
                            <p className="font-semibold">{step.label}</p>
                            <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                        </div>

                        {/* Date */}
                        <div className="w-1/3 text-center font-semibold">
                            {step.date
                                ? new Date(step.date).toLocaleDateString(undefined, {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                })
                                : "-"}
                        </div>

                        {/* Status */}
                        <div className="w-1/3 text-right">
                            {step.status === "complete" ? (
                                <Check className="w-5 h-5 text-green-500 inline-block" />
                            ) : (
                                <Clock className="w-5 h-5 text-gray-400 inline-block" />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
