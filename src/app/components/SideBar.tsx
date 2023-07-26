import Image from "next/image";
import React from "react";
const sideBaricon = [
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
    <div className="overflow-hidden bg-white flex flex-col items-center  px-5 py-4 min-w-[100px]">
      {sideBaricon.map((icon) => (
        <div
          className="overflow-hidden bg-white flex flex-col gap-2   items-center px-5 py-[10px] hover:bg-[#E5F1FC] rounded-lg  hover:border hover:border-[#0073E6] max-w-[105px] border-transparent cursor-pointer"
          key={icon.id}
        >
          <div className="flex flex-row gap-6  items-start justify-center">
            <Image
              src={icon.location}
              className="min-h-0 min-w-0 mt-2 w-5"
              alt={`${icon.name}logo`}
              width={5}
              height={5}
            />
          </div>
          <div className="text-xs font-medium  text-[#1c4980] text-center whitespace-nowrap">
            {icon.name}
          </div>
        </div>
      ))}
      <div className="border-b border-dashed border-[#BACBD5] w-full my-4" />
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="border-solid border-[#d63500] bg-[#fbebea] flex flex-col px-2 border rounded-[22px] items-center justify-center cursor-pointer">
          <div className="text-xs font-medium text-[#d63500]">Admin</div>
        </div>

        <div className="overflow-hidden bg-white flex flex-col gap-2  items-center px-5 py-[10px] hover:bg-[#E5F1FC] rounded-lg  hover:border hover:border-[#0073E6] w-[105px] border-transparent cursor-pointer">
          <div className="flex flex-row gap-6   justify-center items-center">
            <Image
              src="/admin_meds.svg"
              className="min-h-0 min-w-0 mt-2 w-5"
              alt="admin_meds-logo"
              width={5}
              height={5}
            />
          </div>
          <div className="text-xs font-medium  text-[#1c4980] text-center ">
            Round Status{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
