import React, { useState } from "react";

const AssessmentTab: React.FC = () => {
  // State variable to keep track of the active tab number
  const [activeTab, setActiveTab] = useState<number>(1);

  // Function to handle tab click
  const handleTabClick = (tabNumber: number) => {
    // Set the active tab number to the clicked tab
    setActiveTab(tabNumber);
  };

  return (
    <div className="bg-white w-full">
      <div className="flex xs:justify-around md:justify-normal">
        {/* Assessment Tab */}
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
        {/* Divider line between tabs */}
        <div className="bg-[#DADCE0] w-[1px] mx-1 my-2 xs:hidden md:block" />
        {/* My Assessment Tab */}
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
