import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    accountType: {
      type: String,
      enum: ["Admin", "Student", "Instructor"],
      required: true,
    },
    
    additionalDetails: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Profile",
    },
    // courses: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Course",
    //   },
    // ],
    
    // courseProgress: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "courseProgress",
    //   },
    // ],
    
  },
  
);

const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;
