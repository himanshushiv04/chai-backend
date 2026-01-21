import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  // console.log("DB URI:", process.env.DATABASE_URI);
  // console.log("DB_NAME:", DB_NAME)
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DATABASE_URI}/${DB_NAME}`
    );
    console.log(`MongoDB cconnected!! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("Connection ERR: ", error);
    process.exit(1);
  }
};


export default connectDB;