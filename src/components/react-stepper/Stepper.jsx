import React, { useState, useEffect, useRef } from "react";

const Stepper = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState([]);
  const stepRefs = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;

    while (count < newSteps.length) {
      // current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      }
      // step completed
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      }

      // step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          completed: false,
          selected: false,
        };
        count++;
      }
    }
    return newSteps;
  };

  useEffect(() => {
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );
    console.log(stepsState, "step state");
    stepRefs.current = stepsState;
    const current = updateStep(currentStep - 1, stepRefs.current);
    console.log(current, "is current");
    setNewStep(current);
  }, [steps, currentStep]);

  const displaySteps = newStep?.map((step, index) => (
    <div key={index} className="w-full flex items-center">
      {/* display line */}
      <div
        className={`flex-auto h-2 rounded-md ${
          step?.completed ? "bg-green-600" : "bg-gray-300"
        } transition duration-500 ease-in-out`}
      ></div>
    </div>
  ));

  return (
    <div className="mx-4 p-4 flex justify-between items-center">
      {displaySteps}
    </div>
  );
};

export default Stepper;

{
  /* <div className="relative flex flex-col items-center text-teal-600"> */
}
{
  /* display number */
}
{
  /* <div className="w-12 h-12 rounded-full transition duration-500 ease-in-out border-2 border-gray-300 flex items-center justify-center py-3">
  1
</div> */
}
{
  /* display description */
}
{
  /* <div className="absolute top-0 text-center mt-16 w-32 text-xs uppercase font-medium">
  description
</div>
</div> */
}
