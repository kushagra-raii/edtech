import nodemailer from "nodemailer";
import { otpTemplate } from "@/utils/mailTemplate/userVerification";
interface Args {
  email: string;
  content: string;
  mailType: string;
}

export async function sendMail({ email, content, mailType }: Args) {
  try {
    var transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 2525,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
  
    const mailOptions = {
      from: process.env.MAIL,
      to: email,
      html: mailType === "otp" ? otpTemplate(content) : "",
    }
  
    const mailResponse = await transporter.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }

}
