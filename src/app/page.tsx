"use client";
import Image from "next/image";
import AssessmentTab from "./components/AssessmentTab";
import AssessmentInfo from "./components/AssessmentInfo";
import AssessmentCard from "./components/AssessmentCard";
import { use, useState } from "react";
import Modal from "./modal/Modal";
import { AssessmentCardInfo } from "@/types";
import FormComponent from "@/app/components/FormComponent";
import MobileMenu from "./components/MobileMenu";

const assessmentCardInfo: AssessmentCardInfo[] = [
  {
    id: 1,
    assessmentName: "Math Assessment",
    date: "20 Apr 2023",
    duration: "00",
    question: "00",
    users: [{ name: "Lakshay Pandit", bg: "#6548EE" }],
  },
  {
    id: 2,
    assessmentName: "Math Assessment",
    date: "20 Apr 2023",
    duration: "00",
    question: "00",
    users: [
      { name: "Lakshay Pandit", bg: "#6548EE" },
      { name: "Rahul Sen", bg: "#3079E1" },
      { name: "Anamika Roy", bg: "pink" },
    ],
  },
];

const Home: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [openMobileMenu, SetOpenMobileMenu] = useState<boolean>(false);
  const [dashboardOpen, setDashboardOpen] = useState<boolean>(false);
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const handleMobileMenu = () => {
    SetOpenMobileMenu(!openMobileMenu);
  };

  const handleDashboard = () => {
    setDashboardOpen(!dashboardOpen);
  };
  return (
    <main className="bg-white pb-10 relative">
      <div className="flex justify-between md:hidden px-4 pt-4">
        <div className="flex items-center gap-2">
          <div className="bg-[#f2f8fe] w-8 h-8 flex justify-center rounded-[50%] cursor-pointer">
            <Image
              src="/segment.svg"
              alt="Segment-logo"
              width={20}
              height={10}
              onClick={handleMobileMenu}
            />
          </div>
          <p className="text-textDefault font-medium ">Assessment</p>
        </div>
        <Image src="/laptop_mac.svg" alt="Laptop-logo" width={20} height={10} />
      </div>
      {openMobileMenu && (
        <div className="md:hidden">
          <MobileMenu openMenu={handleMobileMenu} isOpen={openMobileMenu} />
        </div>
      )}

      <div className="flex justify-between border-b-2 ">
        <AssessmentTab />
        <Image
          src="/mobile_screen.svg"
          alt="Mobile Screen"
          width={25}
          height={25}
          className="mr-5 xs:hidden md:block"
        />
      </div>
      <div className="my-5 mx-4 text-textDefault font-medium ">
        <p className="xs:hidden sm:block">Assessment Overview</p>
        <AssessmentInfo openDashboard={dashboardOpen} />
      </div>
      <div className="my-5 mx-4 text-textDefault font-medium ">
        <div className="flex items-center justify-between">
          <p>My Assessment</p>
          <div className="flex items-center gap-4 sm:hidden">
            <Image src="/search.svg" width={20} height={15} alt="Search-icon" />
            <Image src="/filter.svg" width={20} height={15} alt="Filter-icon" />
            <div onClick={handleDashboard}>
              <Image
                src="/bar_chart.svg"
                width={15}
                height={15}
                alt="Bar-chart-icon"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-5 mt-5 flex-wrap justify-center">
          <div className="border-dashed border-[#dadce0] overflow-hidden bg-[#f6f8fa] flex flex-col gap-2 md:min-w-[400px] xs:max-w-[315px] items-center md:p-8 xs:p-3 border rounded-lg">
            <div
              className="overflow-hidden bg-white flex justify-center md:w-16 md:h-16 xs:w-8 xs:h-8 items-center rounded-[72px] cursor-pointer"
              onClick={handleOpenModal}
            >
              <Image
                src="/add.svg"
                className="min-h-0 min-w-0 w-10"
                width={5}
                height={5}
                alt="Add Symbol"
              />
            </div>
            <p className="text-center whitespace-nowrap md:text-lg xs:text-sm font-medium text-textDefault ">
              New Assessment
            </p>
            <p className="text-center text-xs font-medium text-textDefault">
              From here you can add questions of multiple types like MCQs,
              subjective (text or paragraph)!
            </p>
          </div>
          {assessmentCardInfo.map((item) => (
            <div key={item.id}>
              <AssessmentCard
                assessmentName={item.assessmentName}
                date={item.date}
                duration={item.duration}
                question={item.question}
                users={item.users}
              />
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        <FormComponent onClose={handleCloseModal} />
      </Modal>
    </main>
  );
};

export default Home;
