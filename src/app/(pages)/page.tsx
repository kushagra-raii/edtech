import CTAbutton from "@/components/HomePage/CTAbutton";
import HighlightedText from "@/components/HomePage/HighlightedText";
import Link from "next/link";
import heroImage from "../../../public/Images/boxoffice.png";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import CodeBlocks from "@/components/HomePage/CodeBlocks";
import ExploreMore from "@/components/HomePage/ExploreMore";
import TimelineSection from "@/components/HomePage/Timeline";
import LearningLanguageSection from "@/components/HomePage/LearningLanguageSection";
import InstructorSection from "@/components/HomePage/InstructorSection";
export default function Home() {
  return (
    <div>
      <div className=" bg-richblack-900 text-white ">
        <div id="hero" className=" w-10/12 mx-auto ">
          <div className="flex flex-col items-center gap-10">
            <Link href="/signup">
              <div className="group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
                <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
                  <p>Become an Instructor</p>
                  <FaArrowRight />
                </div>
              </div>
            </Link>

            <h1 className="text-center text-4xl font-semibold">
              Empower Your Future with <HighlightedText text="Coding Skills" />
            </h1>

            <p className="-mt-3 w-[90%] text-center text-lg font-bold text-richblack-300">
              With our online coding courses, you can learn at your own pace,
              from anywhere in the world, and get access to a wealth of
              resources, including hands-on projects, quizzes, and personalized
              feedback from instructors.
            </p>

            <div className="flex gap-3">
              <CTAbutton
                text="Learn More"
                active={true}
                linkTo="/signup"
                arrow={false}
              />
              <CTAbutton
                text="Book a Demo"
                active={false}
                linkTo="/login"
                arrow={false}
              />
            </div>
          </div>
          <div className="flex mt-24 justify-center">
            {/* <video>
            <source src={} />
          </video> */}

            <Image
              src={heroImage}
              alt=""
              className=" shadow-[10px_-5px_50px_-5px] shadow-blue-200  "
            />
          </div>
        </div>

        <div
          id="code"
          className="w-10/12 mx-auto mt-20 flex flex-col gap-10 justify-evenly"
        >
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock your
                <HighlightedText text={"coding potential"} /> with our online
                courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              text: "Try it Yourself",
              linkTo: "/signup",
              active: true,
              arrow: true,
            }}
            ctabtn2={{
              text: "Learn More",
              linkTo: "/signup",
              active: false,
              arrow: false,
            }}
            codeColor={"text-yellow-25"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />

          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Start
                <HighlightedText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              text: "Continue Lesson",
              linkTo: "/signup",
              active: true,
              arrow: false,
            }}
            ctabtn2={{
              text: "Learn More",
              linkTo: "/signup",
              active: false,
              arrow: false,
            }}
            codeColor={"text-white"}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>

        <div className="w-10/12 mx-auto mt-2">
          <ExploreMore />
        </div>
      </div>

      <div id="explore" className="bg-pure-greys-5 pb-3 text-richblack-700">
        <div className="homepage_bg h-[320px]">
          {/* Explore Full Catagory Section */}
          <div className="mx-auto flex  flex-col items-center justify-between gap-8">
            <div className="h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white lg:mt-8">
              <CTAbutton
                active={true}
                linkTo={"/signup"}
                text="Explore Full Catalog"
                arrow={true}
              />
              <CTAbutton
                active={false}
                text="Learn More"
                arrow={false}
                linkTo={"/login"}
              />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-32 lg:mt-0 flex w-10/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
          {/* Job that is in Demand - Section 1 */}
          <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
            <div className="text-4xl font-semibold lg:w-[45%] ">
              Get the skills you need for a{" "}
              <HighlightedText text={"job that is in demand."} />
            </div>
            <div className="flex flex-col items-start gap-10 lg:w-[40%]">
              <div className="text-[16px]">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <CTAbutton
                active={true}
                linkTo={"/signup"}
                text="Learn More"
                arrow={false}
              />
            </div>
          </div>
        </div>
        <TimelineSection />
        <LearningLanguageSection />
      </div>

      <div className=" bg-richblack-900 text-white">
        {/* Become a instructor section */}
        <InstructorSection />

        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>
        {/* <ReviewSlider /> */}
      </div>
    </div>
  );
}
