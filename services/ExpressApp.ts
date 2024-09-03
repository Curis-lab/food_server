import path from "path";
import bodyParser from "body-parser";
import express, { Application } from "express";
import cors from "cors";
import cookie from "cookie-parser";
import { AdminRoute, VendorRoute , CustomerRoute} from "../src/infrastructure/web/routes";

export default async (app: Application) => {
  app.use(
    cors({
      origin: ["http://localhost:5173"],
      methods: ["POST", "GET","DELETE","PATCH"],
      credentials: true,
    })
  );

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookie());
  app.use("/images", express.static(path.join(__dirname, "images")));

  app.use("/vendor", VendorRoute);
  app.use("/admin", AdminRoute);
  app.use("/customer", CustomerRoute);
  return app;
};
