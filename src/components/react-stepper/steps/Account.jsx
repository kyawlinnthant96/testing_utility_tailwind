import React, { useContext } from "react";
import { StepperContext } from "../../../context/StepperContext";

const Account = () => {
  const { userData, setUserData } = useContext(StepperContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  console.log(userData);
  return (
    <div className="flex flex-col mx-2 gap-3">
      <div className="w-full flex-1">
        <div className="font-bold h-4 mt-3 text-green-500 text-xs leading-8 uppercase">
          Username
        </div>
        <div className="bg-white my-2 p-1 flex border-gray-200 rounded">
          <input
            value={userData["username"] || ""}
            onChange={handleChange}
            name="username"
            placeholder="Username"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
      <div className="w-full flex-1">
        <div className="font-bold h-4 mt-3 text-green-500 text-xs leading-8 uppercase">
          Password
        </div>
        <div className="bg-white my-2 p-1 flex border-gray-200 rounded">
          <input
            value={userData["password"] || ""}
            onChange={handleChange}
            name="password"
            placeholder="Password"
            type="password "
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
    </div>
  );
};

export default Account;
