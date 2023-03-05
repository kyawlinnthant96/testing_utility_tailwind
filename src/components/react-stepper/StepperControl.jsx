import React from "react";

const StepperControl = ({ handleClick, steps, currentStep }) => {
  return (
    <div className="mx-4 flex justify-between items-center my-3">
      <button
        onClick={() => handleClick()}
        className={`px-4 py-2 bg-slate-50 text-black rounded-md hover:bg-slate-300 ${
          currentStep === 1 ? "opacity-50" : "cursor-not-allowed"
        }`}
      >
        Back
      </button>
      <button
        onClick={() => handleClick("next")}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-300"
      >
        {currentStep === steps.length - 1 ? "Save" : "Next"}
      </button>
    </div>
  );
};

export default StepperControl;
