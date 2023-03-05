import React from "react";
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";
import Account from "./steps/Account";
import SpecialDay from "./steps/SpecialDay";
import Complete from "./steps/Complete";
import Hook from "./Hook";
import { StepperContext } from "../../context/StepperContext";

const CustomStepper = () => {
  const {
    steps,
    userData,
    setUserData,
    finalDate,
    setFinalDate,
    currentStep,
    handleClick,
  } = Hook();

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Account />;
        break;
      case 2:
        return <SpecialDay />;
        break;
      case 3:
        return <Complete />;
        break;
      default:
        return null;
    }
  };

  return (
    <div className="w-1/2 shadow-xl rounded-md bg-slate-400">
      {/* Stepper */}
      <div className="container relative horizontal mt-5">
        <Stepper steps={steps} currentStep={currentStep} />
        <p>{`${currentStep} of ${steps.length}`}</p>

        <div className="my-4">
          <StepperContext.Provider
            value={{ userData, setUserData, finalDate, setFinalDate }}
          >
            {displayStep(currentStep)}
          </StepperContext.Provider>
        </div>
      </div>

      {/* Stepper Control */}
      <StepperControl
        handleClick={handleClick}
        steps={steps}
        currentStep={currentStep}
      />
    </div>
  );
};

export default CustomStepper;
