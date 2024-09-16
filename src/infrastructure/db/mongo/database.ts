import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

export default async () => {
  try {
    const mongoDb = process.env.MONGO_URL || '';
    await mongoose.connect(mongoDb);
    console.log('Db connnect!...');
  } catch (ex) {
    console.log(ex);
  }
};
