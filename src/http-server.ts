import express from "express";
import dbConnection from "../services/Database";
import App from "../services/ExpressApp";
import { loadContainer } from "./infrastructure/container";

export const startHttpServer = async () => {
  const app = express();
  const load = loadContainer();
  await dbConnection();
  await App(app);
  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log(`listing to port ${port}`);
  });
};
