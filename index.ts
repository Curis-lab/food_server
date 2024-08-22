import 'reflect-metadata';
import express from "express";
import dbConnection from "./services/Database";
import App from "./services/ExpressApp";

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
