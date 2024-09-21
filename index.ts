import 'reflect-metadata';
import express from 'express';
import App from './src/infrastructure/services/ExpressApp';
import dbConnection from './src/infrastructure/services/Database';
import dotenv from 'dotenv';
dotenv.config();

const init = async () => {

  const app = express();
  await dbConnection();
  await App(app);
  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log(`listing to port ${port}`);
  });
};

init();
