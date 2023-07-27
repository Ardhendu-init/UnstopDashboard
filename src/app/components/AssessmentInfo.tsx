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

const AssessmentInfo: React.FC = () => {
  return (
    <div className="border-[#dadce0] overflow-hidden flex xl:flex-row flex-col gap-4 border rounded-lg my-4">
      {assessmentInfo.map((info) => (
        <div
          key={info.id}
          className={`overflow-hidden bg-white flex flex-col gap-4 justify-center py-5 pl-5 pr-10 ${
            info.id !== assessmentInfo.length &&
            "border-[#dadce0] xl:border-r sm:border-b xl:border-b-0"
          }`}
        >
          <div className="text-sm font-semibold text-textDefault">
            {info.heading}
          </div>

          <div className="flex flex-row gap-5 items-center">
            <Image
              src={info.imgLocation}
              alt={info.logoName}
              width={40}
              height={5}
              style={{ height: "auto" }}
            />
            {info.assignmentInfo.map((item, index) => (
              <div key={item.id} className="flex h-full flex-grow">
                <div className="flex flex-col justify-center">
                  <div className="flex flex-row gap-1 items-center">
                    <p className="text-xl font-bold text-textDefault">
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
                {info.assignmentInfo.length - 1 !== index && (
                  <div className="bg-[#DADCE0] w-[1px] h-full ml-4 my-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AssessmentInfo;
