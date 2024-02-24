import { dbConnect } from "@/config/dbConfig";
import User from "@/model/User";
import otpGenerator from "otp-generator";
import { NextRequest, NextResponse } from "next/server";
import OTP from "@/model/Otp";

dbConnect();

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json({
        success: false,
        status: 401,
        message: "User already exists. Please sign in to continue.",
      });
    }

    let otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    const result = await OTP.findOne({ otp: otp });
    while (result) {
      otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
      });
    }

    const otpData = await OTP.create({
      otp,
      email,
    });

    return NextResponse.json({
      success: true,
      status: 200,
      message: "OTP sent successfully",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      status: 500,
      message: "Internal Server Error",
    });
  }
}
