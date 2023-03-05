import React, { useState } from "react";
import Account from "./steps/Account";
import SpecialDay from "./steps/SpecialDay";
import Complete from "./steps/Complete";

const Hook = () => {
  const steps = ["Account Info", "Special Day", "Complete"];

  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState("");
  const [finalDate, setFinalDate] = useState("");

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;

    newStep > 0 && newStep <= steps?.length && setCurrentStep(newStep);
  };

  return {
    steps,
    userData,
    setUserData,
    finalDate,
    setFinalDate,
    currentStep,
    handleClick,
  };
};

export default Hook;
