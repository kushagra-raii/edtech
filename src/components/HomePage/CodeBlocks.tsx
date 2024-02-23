"use client";

import React from "react";
import CTAButton, { CTAbuttonProps } from "./CTAbutton";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight } from "react-icons/fa";
import CTAbutton from "./CTAbutton";

interface CodeBlocksProps {
  position: string;
  heading: React.ReactNode;
  subheading: string;
  ctabtn1: CTAbuttonProps;
  ctabtn2: CTAbuttonProps;
  codeblock: string;
  backgroundGradient: React.ReactNode;
  codeColor: string;
}

const CodeBlocks = ({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
  backgroundGradient,
  codeColor,
}: CodeBlocksProps) => {
  return (
    <div
      className={`flex ${position} my-20 justify-evenly flex-col lg:gap-10 gap-10`}
    >
      {/* Section 1  */}
      <div className="w-[100%] lg:w-1/2 flex flex-col gap-8 ">
        {heading}

        {/* Sub Heading */}
        <div className="text-richblack-300 text-base font-bold w-[85%] -mt-3">
          {subheading}
        </div>

        {/* Button Group */}
        <div className="flex gap-7 mt-7">
          <CTAbutton
            active={ctabtn1.active}
            linkTo={ctabtn1.linkTo}
            text={ctabtn1.text}
            arrow={true}
          />
          <CTAbutton
            active={ctabtn2.active}
            linkTo={ctabtn2.linkTo}
            text={ctabtn2.text}
            arrow={false}
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="h-fit code-border flex flex-row py-3 text-[10px] sm:text-sm leading-[18px] sm:leading-6 relative w-[100%] lg:w-1/2">
        {backgroundGradient}
        {/* Indexing */}
        <div className="text-center flex flex-col   w-[10%] select-none text-richblack-400 font-inter font-bold ">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
        </div>

        {/* Codes */}
        <div
          className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-1`}
        >
          <TypeAnimation
            sequence={[codeblock, 1000, ""]}
            cursor={true}
            repeat={Infinity}
            style={{
              whiteSpace: "pre-line",
              display: "block",
            }}
            omitDeletionAnimation={true}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;