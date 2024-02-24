import mongoose from "mongoose";
import { sendMail } from "@/helper/sendMail";
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

OTPSchema.pre('save',async function(next){
    const mailType = "verification";
    if (this.isNew) {
		await sendMail({ email: this.email!, content: this.otp, mailType });
	}
	next();
})

const OTP = mongoose.model('OTP', OTPSchema);
export default OTP;