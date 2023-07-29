import Image from "next/image";
import { FunctionComponent, useState } from "react";

const FormComponent: FunctionComponent<{ onClose: () => void }> = ({
  onClose,
}) => {
  // State variables for managing form input fields
  const [newSkill, setNewSkill] = useState(""); // Stores the value of the new skill input
  const [skills, setSkills] = useState<string[]>([]); // Stores the list of entered skills

  // Function to add a new skill to the list
  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      setSkills([...skills, newSkill.trim()]); // Add the new skill to the skills list
      setNewSkill(""); // Reset the newSkill input field
    }
  };

  // Function to handle Enter key press in the input field
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddSkill();
    }
  };

  // Function to handle closing a skill
  const handleSkillClose = (skill: string) => {
    const filterSkills = skills.filter((item) => item !== skill); // Remove the specified skill from the skills list
    setSkills(filterSkills); // Update the skills list
  };

  return (
    <div className="relative overflow-hidden bg-[#FFF] flex flex-col items-start justify-start text-center md:text-[20px] xs:text-base text-textDefault  font-medium text-base rounded-lg w-[600px] max-w-[80vw]   max-h-[90vh]">
      {/* Header */}
      <div className="w-full overflow-hidden  flex xs:px-2 xs:py-4 md:p-[30px] items-center justify-between  border-solid border-b">
        <p className="relative md:text-xl xs:text-base">
          Create new assessment
        </p>
        <Image
          className="relative cursor-pointer xs:w-6 md:w-8"
          alt="Close-Button"
          src="/cut.svg"
          width={30}
          height={30}
          onClick={onClose}
        />
      </div>
      {/* Form Body */}
      <div className="overflow-hidden w-full flex flex-col py-5 md:px-[30px] xs:px-6 gap-[20px] overflow-y-auto">
        {/* Name of Assessment */}
        <div className="flex flex-col items-start gap-[10px] w-full">
          <p className="relative font-medium">Name of assessment</p>
          <input
            className="rounded-lg bg-white box-border h-[50px] overflow-hidden w-full p-[15px] items-center justify-start text-sm border-[1px] border-solid border-system-stroke2 "
            placeholder="Type Here"
            type="text"
          />
        </div>
        {/* Purpose of the Test */}
        <div className="flex flex-col items-start justify-start gap-[10px] w-full">
          <p className="relative font-medium">Purpose of the test is</p>
          <select className="rounded-lg bg-white box-border h-[50px] overflow-hidden w-full p-[15px] items-center justify-start text-sm border-[1px] border-solid border-system-stroke2 focus:outline-none">
            <option value="Select an option">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        {/* Description */}
        <div className="flex flex-col items-start justify-start gap-[10px] w-full">
          <p className="relative font-medium">Description</p>
          <select className="rounded-lg bg-white box-border h-[50px] overflow-hidden w-full p-[15px] items-center justify-start text-sm border-[1px] border-solid border-system-stroke2 focus:outline-none">
            <option value="  Select an option">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        {/* Skills */}
        <div className="flex flex-col items-start gap-[10px] w-full">
          <p className="relative font-medium">Skills</p>
          <div className="rounded-lg bg-white  overflow-hidden w-full flex flex-col text-sm border-[1px] border-solid border-system-stroke2 ">
            {/* Display existing skills */}
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
            {/* Input for entering new skill */}
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
        {/* Duration of Assessment */}
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
      {/* Save Button */}
      <div className="shadow-[0px_-4px_50px_0px_rgba(0,_0,_0,_0.09)] overflow-hidden bg-white flex flex-col justify-center w-full md:px-8 xs:px-6 md:py-5 xs:py-4 ">
        <button className="bg-[#0073e6] flex flex-col justify-center md:p-4 xs:p-2 text-white items-center rounded-lg">
          Save
        </button>
      </div>
    </div>
  );
};

export default FormComponent;
