import { mailSender } from "@/utils/helper/sendMail";
import { otpTemplate } from "@/utils/mailTemplate/userVerification";
import mongoose from "mongoose";

const OTPSchema = new mongoose.Schema({
    email:{
        type:String,
        require: true,

    },
    otp:{
        type: String,
		required: true, 
    },
    createdAt:{
        type: Date,
        default: Date.now,
        expires: 300,
    }
})


async function sendVerificationEmail(email:string,otp:string){
    try {
        const mailResponse = await mailSender(email,"Verification Email",otpTemplate(otp))
    } catch (error) {
        console.log("Error occurred while sending email: ", error);
		throw error;
    }

}

OTPSchema.pre('save',async function(next){
    const mailType = "verification";
    if (this.isNew) {
		await sendVerificationEmail(this.email!, this.otp);
	}
	next();
})

const OTP =  mongoose.models.OTP || mongoose.model('OTP', OTPSchema);
export default OTP;