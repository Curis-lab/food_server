import path from "path";
import bodyParser from "body-parser";
import express, { Application } from "express";
import { ShoppingRoute, AdminRoute, VandorRoute} from "../routes";
import cors from 'cors';

export default async (app: Application) => {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/images", express.static(path.join(__dirname, "images")));

  app.use("/admin", AdminRoute);
  app.use("/vandor", VandorRoute);
  // app.use("/customer", CustomerRoutes);
  app.use(ShoppingRoute);
  
  return app;
};
