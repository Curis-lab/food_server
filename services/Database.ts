import mongoose from "mongoose";
import { MONGO_URL } from "../config";

mongoose.set("strictQuery", false);

export default async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Db connnect!...");
  } catch (ex) {
    console.error('error on database connection');
    console.log(ex);
  }
};
