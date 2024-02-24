import { dbConnect } from "@/config/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/model/User";
import bcryptjs from "bcryptjs";
import Profile from "@/model/Profile";
import OTP from "@/model/Otp";

dbConnect();

export async function POST(request: NextRequest) {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      accountType,
      contactNumber,
      otp,
    } = await request.json();

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !contactNumber ||
      !otp
    ) {
      return NextResponse.json({
        success: false,
        status: 403,
        message: "All Fields are required",
      });
    }

    if (password !== confirmPassword) {
      return NextResponse.json({
        success: false,
        status: 400,
        message:
          "Password and Confirm Password do not match. Please try again.",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({
        success: false,
        status: 400,
        message: "User already exists. Please sign in to continue.",
      });
    }

  

    const response = await OTP.findOne({ email })
      .sort({ createdAt: -1 })
      .limit(1);
    if (response === null || !response || otp !== response.otp) {
      return NextResponse.json({
        success: false,
        status: 400,
        message: "Invalid OTP.",
      });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const profileDetails = await Profile.create({
      gender: null,
      dateOfBirth: null,
      about: null,
      contactNumber: contactNumber,
    });
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      accountType,
      additionalDetails: profileDetails._id,
    });
    return NextResponse.json({
      success: true,
      status: 200,
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      status: 500,
      message: "Internal Server Error",
    });
  }
}

