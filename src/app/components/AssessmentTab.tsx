import React, { useState } from "react";

const AssessmentTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="bg-white w-full">
      <div className="flex xs:justify-around md:justify-normal">
        <button
          className={`px-4 xs:w-1/2 md:w-fit font-medium ${
            activeTab === 1
              ? "text-[#0073E6] font-normal border-b-2 border-[#0073E6]"
              : "bg-white text-[#1c4980]"
          }`}
          onClick={() => handleTabClick(1)}
        >
          Assessment
        </button>
        <div className="bg-[#DADCE0] w-[1px] mx-1 my-2 xs:hidden md:block" />
        <button
          className={`py-4 px-4 xs:w-1/2 md:w-fit font-medium ${
            activeTab === 2
              ? "text-[#0073E6] font-normal border-b-2 border-[#0073E6]"
              : "text-[#1c4980]"
          }`}
          onClick={() => handleTabClick(2)}
        >
          My Assessment
        </button>
      </div>
    </div>
  );
};

export default AssessmentTab;
