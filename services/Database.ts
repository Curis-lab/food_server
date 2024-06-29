import mongoose from "mongoose";
import { MONGO_URL } from "../config";

mongoose.set("strictQuery", false);

export default async () => {
  try {
    const mongoDb = process.env.MONGO_URL || MONGO_URL
    await mongoose.connect(mongoDb);
    console.log("Db connnect!...");
  } catch (ex) {
    console.log(ex);
  }
};
