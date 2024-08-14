import path from "path";
import bodyParser from "body-parser";
import express, { Application } from "express";
import { ShoppingRoute, AdminRoute, CustomerRoute} from "../routes";
import cors from 'cors';
import cookie from 'cookie-parser';
import { VendorRoute } from "../src/infrastructure/web/routes/vendor";

export default async (app: Application) => {
  app.use(cors({
    origin:["http://localhost:5173"],
    methods:["POST","GET"],
    credentials: true
  }));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookie());
  app.use("/images", express.static(path.join(__dirname, "images")));

  // app.use("/admin", AdminRoute);
  app.use("/vandor", VendorRoute);
  // app.use("/customer", CustomerRoute);
  // app.use(ShoppingRoute);
  
  return app;
};
