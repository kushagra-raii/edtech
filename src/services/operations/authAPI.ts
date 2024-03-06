import { authEndpoints } from "@/services/apis";
import { apiConnector } from "../apiConnector";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Dispatch } from "@reduxjs/toolkit";
import { setLoading } from "../../lib/features/auth/authSlice";

const { SIGNUP_API, SENDOTP_API } = authEndpoints;

export function sendOtp(email: string, router: AppRouterInstance) {
  return async (dispatch: Dispatch) => {
    // const toastId = toast.loading("Loading...")

    dispatch(setLoading(true));
    try {
      const response = await apiConnector({
        method: "POST",
        url: SENDOTP_API,
        bodyData: { email, checkUserPresent: true },
      });
      console.log("SENDOTP API RESPONSE............", response);

      console.log(response.data.success);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      // toast.success("OTP Sent Successfully")
      router.push("/auth/verifymail");
    } catch (error) {
      console.log("SENDOTP API ERROR............", error);
      //   toast.error("Could Not Send OTP");
    }
    dispatch(setLoading(false))
    // toast.dismiss(toastId)
  };
}

export function signUp(
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string,
  accountType: string,
  otp: string,
  router: AppRouterInstance,
) {
  return async (dispatch: Dispatch) => {
    try {
      const response = await apiConnector({
        method: "POST",
        url: SIGNUP_API,
        bodyData: {
          accountType,
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
          otp,
        },
      });
      console.log("SIGNUP API RESPONSE............", response)
      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      // toast.success("Signup Successful")
      router.push("/auth/login");
    } catch (error) {
      console.log("SIGNUP API ERROR............", error)
      // toast.error("Signup Failed")
      router.push("/auth/signup")
    }
  };
}
