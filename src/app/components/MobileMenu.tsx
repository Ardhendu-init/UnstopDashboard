import React from "react";
import Image from "next/image";
import { sideBaricon } from "./SideBar";

const MobileMenu: React.FC<{ openMenu: () => void; isOpen: boolean }> = ({
  openMenu,
  isOpen,
}) => {
  return (
    <div
      className={`overflow-hidden bg-[#f2f8fe] flex flex-col gap-1 w-[90vw] h-[100vh] z-10 absolute top-0 px-5 py-10 left-${
        isOpen ? "0" : "-100%"
      } transition-left duration-2000`}
    >
      <div className="flex flex-row justify-between mb-3 items-center">
        <p className="text-base font-medium  text-textDefault">Menu</p>
        <Image
          className=" cursor-pointer "
          alt="Close-Button"
          src="/close.svg"
          width={20}
          height={10}
          onClick={() => openMenu()}
        />
      </div>
      <div className="mt-3 flex flex-col gap-3 w-full">
        {sideBaricon.map((icon) => (
          <div
            className="overflow-hidden flex flex-row items-center gap-3   px-5 py-[10px] hover:bg-[#E5F1FC] rounded-lg  hover:border hover:border-[#0073E6]  border-transparent cursor-pointer"
            key={icon.id}
          >
            <div className="flex flex-row gap-6  ">
              <Image
                src={icon.location}
                alt={`${icon.name}logo`}
                width={25}
                height={25}
              />
            </div>
            <div className="text-base font-medium  text-[#1c4980] text-center whitespace-nowrap">
              {icon.name}
            </div>
          </div>
        ))}
      </div>
      <div className="border-b border-dashed border-[#BACBD5] w-full my-4" />
      <div className="flex justify-between items-center gap-3">
        <div className="overflow-hidden flex flex-row items-center gap-3   px-5 py-[10px] hover:bg-[#E5F1FC] rounded-lg  hover:border hover:border-[#0073E6]  border-transparent cursor-pointer">
          <div className="flex flex-row gap-6   ">
            <Image
              src="/admin_meds.svg"
              alt="admin_meds-logo"
              width={25}
              height={25}
            />
          </div>
          <div className="text-base font-medium  text-[#1c4980] text-center ">
            Round Status{" "}
          </div>
        </div>
        <div className="border-solid border-[#d63500] bg-[#fbebea] flex flex-col px-2 border rounded-[22px] items-center justify-center cursor-pointer">
          <div className="text-xs font-medium text-[#d63500]">Admin</div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
