import express from 'express';
import App from './infrastructure/services/ExpressApp';
import dbConnection from '../src/infrastructure/services/Database';

export const startHttpServer = async () => {
  const app = express();
  await dbConnection();
  await App(app);
  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log(`listing to port ${port}`);
  });
};
