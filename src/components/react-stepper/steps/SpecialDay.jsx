import React, { useContext } from "react";
import { StepperContext } from "../../../context/StepperContext";

const SpecialDay = () => {
  const { userData } = useContext(StepperContext);
  console.log(userData);
  return <div>{userData?.username}</div>;
};

export default SpecialDay;
