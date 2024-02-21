import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export interface CTAbuttonProps {
  active: boolean;
  text: string | React.ReactNode;
  linkTo: string;
  arrow: boolean;
}

const CTAbutton = ({ active, text, linkTo, arrow }: CTAbuttonProps) => {
  return (
    <Link
      href={linkTo}
      className={`text-center text-[13px] sm:text-[16px] px-6 py-3 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] ${
        active ? "bg-yellow-50 text-black " : "bg-richblack-800"
      } hover:shadow-none hover:scale-95 transition-all duration-200 ${
        arrow ? "flex items-center gap-2" : ""
      }`}
    >
      {text}
      {arrow && <FaArrowRight />}
    </Link>
  );
};

export default CTAbutton;
