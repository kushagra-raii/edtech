import mongoose from "mongoose";

export async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGO_URI!);

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("DB connected Successfully");
    });
    connection.on("error", (err) => {
      console.error(
        "Mongo Connection error, Please make sure MongoDb is running",
        err
      );
    });
  } catch (error) {
    console.error("Db connection failed: ", error);
  }
}
