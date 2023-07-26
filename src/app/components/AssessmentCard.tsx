import Image from "next/image";
import React from "react";
export interface AssessmentCardProp {
  assessmentName: string;
  date: string;
  duration: string;
  question: string;
  users: User[];
}

interface User {
  name: string;
  bg: string;
}

const AssessmentCard = ({
  assessmentName,
  date,
  duration,
  question,
  users,
}: AssessmentCardProp) => {
  return (
    <div className="border-solid border-[#dadce0] overflow-hidden bg-white flex flex-col gap-1 w-full  items-start p-4 border rounded-lg min-w-[400px]">
      <div className="flex flex-row justify-between mb-2 w-full items-center ">
        <Image src="/brief.svg" alt="Brief Logo " width={35} height={5} />
        <Image src="/3dot.svg" alt="Dot" width={25} height={5} />
      </div>
      <p className="whitespace-nowrap text-lg  font-medium  text-textDefault">
        {assessmentName}
      </p>
      <div className="flex flex-row justify-between mb-3 gap-2 items-center ">
        <p className="text-sm  font-semibold  text-textDefault">Job</p>
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

      <div className=" border-t-2 border-dashed  w-full">
        <div className="mt-5 flex flex-row justify-between items-center">
          <div className="flex gap-5 ">
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
            <div className="border-solid border-textDefault overflow-hidden bg-white flex flex-row gap-1  items-center px-2 py-1 border rounded-[50px]">
              <Image src="/link.svg" alt="Link Logo" height={5} width={15} />
              <div className="text-sm  font-medium  text-textDefault ">
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
                    className={`border-solid border-white w-8 h-8 overflow-hidden  justify-center  top-0 left-0 flex flex-col items-center py-1 border rounded-[32px]`}
                    style={{ backgroundColor: user.bg }}
                  >
                    <p className="text-center text-sm font-bold text-white uppercase">
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
