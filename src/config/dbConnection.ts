import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConnection = async () => {
  return await mongoose.connect(process.env.MONGODB_URL as string);
};
