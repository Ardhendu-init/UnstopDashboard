import { AssessmentData } from "@/types";
import Image from "next/image";
import React from "react";

const assessmentInfo: AssessmentData[] = [
  {
    id: 1,
    heading: "Total Assessment",
    imgLocation: "/view_agenda.svg",
    logoName: "Agenda",
    assignmentInfo: [{ id: 1, number: "34", growth: null, fieldName: null }],
  },
  {
    id: 2,
    heading: "Candidate",
    imgLocation: "/candidate.svg",
    logoName: "Agenda",
    assignmentInfo: [
      { id: 1, number: "11,145", growth: "+89", fieldName: "Total Candidates" },
      { id: 2, number: "114", growth: "+89", fieldName: "Who Attempted" },
    ],
  },
  {
    id: 3,
    heading: "Candidates Source",
    imgLocation: "/internet.svg",
    logoName: "Internet-logo",
    assignmentInfo: [
      { id: 1, number: "11,000", growth: "+89", fieldName: "E-Mail" },
      { id: 2, number: "145", growth: "+89", fieldName: "Social Share" },
      { id: 3, number: "145", growth: "+89", fieldName: "Unique Link" },
    ],
  },
  {
    id: 4,
    heading: "Total Purpose",
    imgLocation: "/purpose.svg",
    logoName: "Purpose-logo",
    assignmentInfo: [{ id: 1, number: "11", growth: null, fieldName: null }],
  },
];

const AssessmentInfo: React.FC<{ openDashboard: boolean }> = ({
  openDashboard,
}) => {
  return (
    <div
      className={`border-[#dadce0] overflow-hidden flex xl:flex-row flex-col gap-4 border rounded-lg my-4 xs:${
        !openDashboard ? "hidden" : "flex"
      } sm:flex`}
    >
      {assessmentInfo.map((info) => (
        <div
          key={info.id}
          className={`flex ${info.id === 4 ? "hidden xl:flex" : ""} ${
            info.id !== assessmentInfo.length &&
            "border-[#dadce0] xl:border-r xs:border-b xl:border-b-0"
          }`}
        >
          <div
            className={`overflow-hidden w-full bg-white flex flex-col md:gap-4 xs:gap-2    justify-center md:py-5 md:px-5 xs:px-2 xs:py-2    `}
          >
            <div className="text-sm font-semibold text-textDefault">
              {info.heading}
            </div>

            <div className="flex flex-row md:gap-5 xs:gap-3 items-center">
              <Image
                src={info.imgLocation}
                alt={info.logoName}
                width={40}
                height={5}
                className="xs:w-7"
              />
              {info.assignmentInfo.map((item, index) => (
                <div key={item.id} className="flex justify-between">
                  <div className="flex h-full flex-grow">
                    <div className="flex flex-col justify-center">
                      <div className="flex flex-row gap-1 items-center">
                        <p className="md:text-xl xs:text-base font-bold text-textDefault">
                          {item.number}
                        </p>
                        {item.growth && (
                          <p className="text-xs font-medium text-[#05c165]">
                            {item.growth}
                          </p>
                        )}
                      </div>
                      {item.fieldName && (
                        <div className="whitespace-nowrap text-xs font-medium text-textDefault">
                          {item.fieldName}
                        </div>
                      )}
                    </div>
                  </div>
                  {info.assignmentInfo.length - 1 !== index && (
                    <div className="bg-[#DADCE0] w-[1px] ml-5 my-2" />
                  )}
                </div>
              ))}
            </div>
          </div>
          {info.id === 1 && (
            <div className="bg-[#DADCE0] w-[1px] mx-1 xl:hidden " />
          )}

          {info.id === 1 && (
            <div
              className={`overflow-hidden w-full bg-white flex flex-col md:gap-4 xs:gap-2 xl:hidden   justify-center md:py-5 md:px-5 xs:px-2 xs:py-2    `}
            >
              <div className="text-sm font-semibold text-textDefault">
                {assessmentInfo[assessmentInfo.length - 1].heading}
              </div>

              <div className="flex flex-row md:gap-5 xs:gap-3 items-center">
                <Image
                  src={assessmentInfo[assessmentInfo.length - 1].imgLocation}
                  alt={assessmentInfo[assessmentInfo.length - 1].logoName}
                  width={40}
                  height={5}
                  className="xs:w-7"
                />
                {assessmentInfo[assessmentInfo.length - 1].assignmentInfo.map(
                  (item, index) => (
                    <div key={item.id} className="flex h-full flex-grow">
                      <div className="flex flex-col justify-center">
                        <div className="flex flex-row gap-1 items-center">
                          <p className="md:text-xl xs:text-base  font-bold text-textDefault">
                            {item.number}
                          </p>
                          {item.growth && (
                            <p className="text-xs font-medium text-[#05c165]">
                              {item.growth}
                            </p>
                          )}
                        </div>
                        {item.fieldName && (
                          <div className="whitespace-nowrap text-xs font-medium text-textDefault">
                            {item.fieldName}
                          </div>
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AssessmentInfo;
