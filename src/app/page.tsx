import Image from "next/image";
import AssessmentTab from "./components/AssessmentTab";
import AssessmentInfo from "./components/AssessmentInfo";
import AssessmentCard from "./components/AssessmentCard";

const assessmentCardInfo = [
  {
    id: 1,
    assessmentName: "Math Assesssment",
    date: "20 Apr 2023",
    duration: "00",
    question: "00",
    users: [{ name: "Lakshay Pandit", bg: "#6548EE" }],
  },
  {
    id: 1,
    assessmentName: "Math Assesssment",
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

const Home = () => {
  return (
    <main className="bg-white">
      <div className="flex  justify-between border-b-2 ">
        <AssessmentTab />
        <Image
          src="/mobile_screen.svg"
          alt="Mobile Screen"
          width={25}
          height={25}
          className="mr-5"
        />
      </div>
      <div className="my-5 mx-4 text-textDefault font-medium">
        <p>Assessment Overview</p>
        <AssessmentInfo />
      </div>
      <div className="my-5 mx-4 text-textDefault font-medium pb-10">
        <p>My Assessment</p>
        <div className="flex gap-5 mt-5 flex-wrap justify-center">
          <div className="border-dashed border-[#dadce0] overflow-hidden bg-[#f6f8fa] flex flex-col gap-2 min-w-[300px]   items-center p-8 border rounded-lg">
            <div className="overflow-hidden bg-white flex  justify-center w-16 h-16  items-center rounded-[72px] cursor-pointer">
              <Image
                src="add.svg"
                className="min-h-0 min-w-0 w-10 "
                width={5}
                height={5}
                alt="Add Symbol"
              />
            </div>
            <p className="text-center whitespace-nowrap text-lg  font-medium text-textDefault mb-px ">
              New Assessment
            </p>
            <p className="text-center text-xs  font-medium text-textDefault ">
              From here you can add questions of multiple types like MCQs,
              <br />
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
    </main>
  );
};

export default Home;
