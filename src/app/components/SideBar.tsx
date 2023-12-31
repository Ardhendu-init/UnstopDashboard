import Image from "next/image";
import React from "react";

// Array of sidebar icon objects
export const sideBaricon = [
  {
    id: 1,
    location: "/dashboard.svg",
    name: "Dashboard",
  },
  {
    id: 2,
    location: "/note_alt.svg",
    name: "Assessment",
  },
  {
    id: 3,
    location: "/quiz.svg",
    name: "My Library",
  },
];

const SideBar = () => {
  return (
    // Sidebar container with responsive behavior
    <div className="overflow-hidden bg-white flex flex-col items-center xs:hidden md:flex  px-5 py-4 min-w-[100px]">
      {/* Sidebar menu items */}
      {sideBaricon.map((icon) => (
        <div
          className="overflow-hidden bg-white flex flex-col gap-2   items-center px-5 py-[10px] hover:bg-[#E5F1FC] rounded-lg  hover:border hover:border-[#0073E6] max-w-[105px] border-transparent cursor-pointer"
          key={icon.id}
        >
          <div className="flex flex-row gap-6 items-start justify-center">
            {/* Icon for the menu item */}
            <Image
              src={icon.location}
              className="min-h-0 min-w-0 mt-2 w-5"
              alt={`${icon.name}logo`}
              width={5}
              height={5}
            />
          </div>
          {/* Label for the menu item */}
          <div className="text-xs font-medium text-[#1c4980] text-center whitespace-nowrap">
            {icon.name}
          </div>
        </div>
      ))}

      {/* Divider */}
      <div className="border-b border-dashed border-[#BACBD5] w-full my-4" />

      {/* Additional menu items */}
      <div className="flex flex-col justify-center items-center gap-3">
        {/* "Admin" badge */}
        <div className="border-solid border-[#d63500] bg-[#fbebea] flex flex-col px-2 border rounded-[22px] items-center justify-center cursor-pointer">
          <div className="text-xs font-medium text-[#d63500]">Admin</div>
        </div>

        {/* "Round Status" menu item */}
        <div className="overflow-hidden bg-white flex flex-col gap-2 items-center px-5 py-[10px] hover:bg-[#E5F1FC] rounded-lg hover:border hover:border-[#0073E6] w-[105px] border-transparent cursor-pointer">
          <div className="flex flex-row gap-6 justify-center items-center">
            {/* Icon for the additional menu item */}
            <Image
              src="/admin_meds.svg"
              className="min-h-0 min-w-0 mt-2 w-5"
              alt="admin_meds-logo"
              width={5}
              height={5}
            />
          </div>
          {/* Label for the additional menu item */}
          <div className="text-xs font-medium text-[#1c4980] text-center ">
            Round Status
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
