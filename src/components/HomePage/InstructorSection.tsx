import CTAbutton from "./CTAbutton";
import HighlightedText from "./HighlightedText";
import Image from "next/image";
import Instructor from "@/../public/Images/Instructor.png";
const InstructorSection = () => {
  return (
    <div className="mx-auto p-10">
      <div className="flex flex-col lg:flex-row gap-20 items-center lg:justify-evenly">
        <div className="lg:w-[45%] ml-10 mt-10">
          <Image
            src={Instructor}
            alt=""
            className="shadow-white shadow-[-20px_-20px_0_0] "
          />
        </div>
        <div className="lg:w-[45%] flex gap-10 flex-col">
          <h1 className="lg:w-[50%] text-4xl font-semibold ">
            Become an
            <HighlightedText text={"instructor"} />
          </h1>

          <p className="font-medium text-[16px] text-justify w-[90%] text-richblack-300">
            Instructors from around the world teach millions of students on
            StudyNotion. We provide the tools and skills to teach what you love.
          </p>

          <div className="w-fit">
            <CTAbutton
              active={true}
              linkTo={"/auth/signup"}
              arrow={true}
              text={"Start Teaching Today"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
