import mongoose from 'mongoose';
// import { MONGO_URL } from "../config";
import dotenv from 'dotenv';

dotenv.config();

mongoose.set('strictQuery', false);

export default async () => {
  try {
    const mongoDb = process.env.MONGO_URL || 'mongodb://localhost:27017/food';
    await mongoose.connect(mongoDb);
    console.log('Db connnect!...');
  } catch (ex) {
    console.log(ex);
  }
};
