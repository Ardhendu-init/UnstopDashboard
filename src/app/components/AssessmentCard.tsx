import { AssessmentCardInfo } from "@/types";
import Image from "next/image";
import React from "react";

const AssessmentCard = ({
  assessmentName,
  date,
  duration,
  question,
  users,
}: AssessmentCardInfo) => {
  return (
    <div className="border-solid border-[#dadce0] overflow-hidden bg-white flex flex-col  gap-1 w-full  items-start p-4 border rounded-lg md:min-w-[400px] xs:min-w-[315px]">
      <div className="flex flex-row justify-between  w-full items-start mb-2">
        <div className="flex md:flex-col xs:flex-row gap-3">
          <Image src="/brief.svg" alt="Brief Logo " width={35} height={5} />
          <div>
            <p className="whitespace-nowrap md:text-lg xs:text-sm  font-medium  text-textDefault">
              {assessmentName}
            </p>
            <div className="flex flex-row justify-between  md:gap-2 xs:gap-1 items-center ">
              <p className="md:text-sm xs:text-xs  font-semibold  text-textDefault">
                Job
              </p>
              <div className="bg-[#DADCE0] w-[1px] h-full mx-1 my-2" />
              <Image
                src="/calendar_today.svg"
                alt="Calendar-Icon"
                width={12}
                height={5}
              />
              <p className="whitespace-nowrap text-xs  font-medium text-[#8da4bf] ">
                {date}
              </p>
            </div>
          </div>
        </div>
        <Image
          src="/3dot.svg"
          alt="Dot"
          width={25}
          height={5}
          className="xs:w-4"
        />
      </div>

      <div className=" border-t-2 border-dashed  w-full xs:text-xs md:text-base">
        <div className="mt-5 flex flex-row justify-between items-center">
          <div className="flex md:gap-5 xs:gap-2 ">
            <div className="flex flex-col ">
              <p className="font-medium">{duration}</p>
              <p className="font-medium">Duration</p>
            </div>
            <div className="flex flex-col ">
              <p className="font-medium">{question}</p>
              <p className="font-medium">Question</p>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <div className="border-solid border-textDefault overflow-hidden bg-white flex flex-row gap-1  items-center md:px-2 xs:px-1 py-1 border rounded-[50px]">
              <Image src="/link.svg" alt="Link Logo" height={5} width={15} />
              <div className="md:text-sm xs:text-xs  font-medium  text-textDefault ">
                Share
              </div>
            </div>
            <div className="flex items-end gap-0 ">
              {users.map((user) => {
                const [firstName, lastName] = user.name.split(" ");
                const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;

                return (
                  <div
                    key={user.name}
                    className={`border-solid border-white md:w-8 xs:w-6 md:h-8 xs:h-6 overflow-hidden  justify-center  top-0 left-0 flex flex-col items-center py-1 border rounded-[50%]`}
                    style={{ backgroundColor: user.bg }}
                  >
                    <p className="text-center md:text-sm  xs:text-[12px] font-bold text-white uppercase">
                      {initials}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentCard;
