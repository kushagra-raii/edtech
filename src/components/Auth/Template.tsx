"use client";

import frameImg from "@/../public/Images/frame.png";
// import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm";
import Image from "next/image";
import React from "react";
import { useAppSelector } from "@/lib/hooks";

interface Props {
  title: string;
  description1: string;
  description2: string;
  image: any;
  formType: React.ReactNode;
}
function Template({
  title,
  description1,
  description2,
  image,
  formType,
}: Props) {
  const loading = useAppSelector((state) => state.auth.loading);
  return (
    <div className="grid min-h-[calc(100vh-0rem)] bg-richblack-900  place-items-center">
      <div className={`mx-auto flex w-10/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12 `}>
        {loading ? (
          <div className=" w-full flex justify-center items-center">
             <div className="loader"></div>
          </div>
        ) : (
          <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
            <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
              {title}
            </h1>
            <p className="mt-4 text-[1.125rem] leading-[1.625rem]">
              <span className="text-richblack-100">{description1}</span>{" "}
              <span className="font-edu-sa font-bold italic text-blue-100">
                {description2}
              </span>
            </p>
            {formType === "signup" ? <SignupForm /> : <div></div>}
          </div>
        )}
        <div className="relative mx-auto w-11/12 max-w-[450px] md:mx-0">
          <Image
            src={frameImg}
            alt="Pattern"
            width={558}
            height={504}
            loading="lazy"
          />
          <Image
            src={image}
            alt="Students"
            width={558}
            height={504}
            loading="lazy"
            className="absolute -top-4 right-4 z-10"
          />
        </div>
      </div>
    </div>
  );
}

export default Template;
