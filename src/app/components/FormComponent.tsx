import Image from "next/image";
import { FunctionComponent, useState } from "react";

const FormComponent: FunctionComponent<{ onClose: () => void }> = ({
  onClose,
}) => {
  const [newSkill, setNewSkill] = useState("");
  const [skills, setSkills] = useState<string[]>([]);

  // Function to add a new skill to the list
  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  // Function to handle Enter key press in the input field
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddSkill();
    }
  };

  const handleSkillClose = (skill: string) => {
    const filterSkills = skills.filter((item) => item != skill);
    setSkills(filterSkills);
  };

  return (
    <div className="relative overflow-hidden bg-[#FFF] flex flex-col items-start justify-start text-center text-[20px] text-textDefault  font-medium text-base rounded-lg md:w-[500px]  max-h-[90vh]">
      <div className="  w-full  overflow-hidden  flex  p-[30px] items-center justify-between  border-solid border-b">
        <p className="relative text-xl">Create new assessment</p>
        <Image
          className="relative cursor-pointer "
          alt="Close-Button"
          src="/cut.svg"
          width={30}
          height={30}
          onClick={onClose}
        />
      </div>
      <div className="overflow-hidden w-full flex flex-col py-5 px-[30px]  gap-[20px]">
        <div className="flex flex-col items-start gap-[10px] w-full">
          <p className="relative font-medium">Name of assessment</p>
          <input
            className="rounded-lg bg-white box-border h-[50px] overflow-hidden w-full p-[15px] items-center justify-start text-sm border-[1px] border-solid border-system-stroke2 "
            placeholder="Type Here"
            type="text"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-[10px] w-full">
          <p className="relative font-medium">Purpose of the test is</p>
          <select className="rounded-lg bg-white box-border h-[50px] overflow-hidden w-full p-[15px] items-center justify-start text-sm border-[1px] border-solid border-system-stroke2 focus:outline-none">
            <option value="Select an option">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>

        <div className="flex flex-col items-start justify-start gap-[10px] w-full">
          <p className="relative font-medium">Description</p>
          <select className="rounded-lg bg-white box-border h-[50px] overflow-hidden w-full p-[15px] items-center justify-start text-sm border-[1px] border-solid border-system-stroke2 focus:outline-none">
            <option value="  Select an option">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="flex flex-col items-start gap-[10px] w-full">
          <p className="relative font-medium">Skills</p>
          <div className="rounded-lg bg-white  overflow-hidden w-full flex flex-col text-sm border-[1px] border-solid border-system-stroke2 ">
            {skills.length > 0 && (
              <div className="w-full border-b p-[15px] flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-[#ddedff] flex flex-row justify-center gap-1  items-center rounded-[22px] p-2"
                  >
                    <p className="whitespace-nowrap text-xs ">{skill}</p>
                    <Image
                      className="relative cursor-pointer "
                      alt="Close-Button"
                      src="/close.svg"
                      width={20}
                      height={10}
                      onClick={() => handleSkillClose(skill)}
                    />
                  </div>
                ))}
              </div>
            )}

            <input
              className="p-[15px] focus:outline-none"
              placeholder="Type Here"
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyDown={handleKeyPress}
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-[10px] w-full">
          <p className="relative font-medium">Duration of the Assessment</p>
          <input
            className="rounded-lg bg-white box-border h-[50px] overflow-hidden w-full p-[15px] items-center justify-start text-sm border-[1px] border-solid border-system-stroke2"
            placeholder="HH:MM:SS"
            type="time"
            step="1"
          />
        </div>
      </div>
      <div className=" shadow-[0px_-4px_50px_0px_rgba(0,_0,_0,_0.09)] overflow-hidden bg-white flex flex-col justify-center w-full px-8 py-5 ">
        <button className="bg-[#0073e6] flex flex-col justify-center h-10 shrink-0 items-center rounded-lg">
          <button className="text-sm font-['Inter'] font-semibold text-white w-8">
            Save
          </button>
        </button>
      </div>
    </div>
  );
};

export default FormComponent;
