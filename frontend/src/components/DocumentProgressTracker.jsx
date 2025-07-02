import { CheckCircle } from "lucide-react";

export default function DocumentStatusTracker({ currentStage }) {
  const getProgressVisual = () => {
    if (currentStage === "Processing") {
      return (
        <div className="w-full h-[6px] bg-gray-200 rounded-full overflow-hidden mt-1">
          <div className="w-3/5 h-full bg-blue-500 rounded-full"></div>
        </div>
      );
    } else if (currentStage === "Sent") {
      return (
        <div className="w-full h-[6px] bg-gray-200 rounded-full overflow-hidden mt-1">
          <div className="w-1/4 h-full bg-blue-500 rounded-full"></div>
        </div>
      );
    } else if (currentStage === "Received") {
      return (
        <div className="w-full h-[6px] bg-gray-200 rounded-full overflow-hidden mt-1">
          <div className="w-2/4 h-full bg-blue-500 rounded-full"></div>
        </div>
      );
    } else if (currentStage === "Completed") {
      return (
        <div className="w-full h-[4px] bg-green-500 rounded-full mt-1" />
      );
    }

    return null;
  };

  return (
    <div className="text-sm w-[50%]">
      <div className="flex items-center justify-between">
        <p className="font-medium text-left">{currentStage}</p>
        {currentStage === "Completed" && (
          <CheckCircle className="w-5 h-5 text-green-500" />
        )}
      </div>
      {getProgressVisual()}
    </div>
  );
}
