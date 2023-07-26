"use client";
import { useState } from "react";

const AssessmentTab = () => {
  const [activeTab, setActiveTab] = useState<Number>(1);

  const handleTabClick = (tabNumber: Number) => {
    setActiveTab(tabNumber);
  };
  return (
    <div className=" bg-white w-full">
      <div className="flex">
        <button
          className={`px-4 font-medium  ${
            activeTab === 1
              ? " text-[#0073E6] font-normal border-b-2 border-[#0073E6]"
              : "bg-white  text-[#1c4980]"
          }`}
          onClick={() => handleTabClick(1)}
        >
          Assessment
        </button>
        <div className="bg-[#DADCE0] w-[1px] mx-1 my-2" />
        <button
          className={`py-4 px-4 font-medium ${
            activeTab === 2
              ? " text-[#0073E6] font-normal border-b-2 border-[#0073E6]"
              : " text-[#1c4980]"
          }`}
          onClick={() => handleTabClick(2)}
        >
          My Assessment
        </button>
      </div>

      {/* <div
        className={`${
          activeTab === 1 ? "block" : "hidden"
        } bg-blue-100 p-4 mt-2 rounded-bl-lg rounded-br-lg`}
      >
        Content for Tab 1
      </div>

      <div
        className={`${
          activeTab === 2 ? "block" : "hidden"
        } bg-green-100 p-4 mt-2 rounded-bl-lg rounded-br-lg`}
      >
        Content for Tab 2
      </div> */}
    </div>
  );
};

export default AssessmentTab;
