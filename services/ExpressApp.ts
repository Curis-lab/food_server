import path from "path";
import bodyParser from "body-parser";
import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookie from "cookie-parser";
import {
  AdminRoute,
  VendorRoute,
  CustomerRoute,
} from "../src/infrastructure/web/routes";

import * as webpush from 'web-push';

export default async (app: Application) => {
  app.use(
    cors({
      origin: ["http://localhost:5173"],
      methods: ["POST", "GET", "DELETE", "PATCH"],
      credentials: true,
    })
  );

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookie());
  app.use("/images", express.static(path.join(__dirname, "images")));


  
  app.use(express.static(path.join(__dirname,"dashboard")));
  const public_vapid_key =
    "BAGKciSWOvM-n5lA73PsITPvE6tdu66TVjSyW6o9eVvKPEf7lOM0NfrDZNGNXRSieFM-A-iGei1b1daxyUv58aE";
  const private_vapid_key = "Mctyk6YlbdMhWP1T0PBtEfO_eEAPykP-ShSIiN55NCs";

  webpush.setVapidDetails(
    "mailto:test@test.com",
    public_vapid_key,
    private_vapid_key
  );

  app.post("/noti", (req: Request, res: Response) => {
    const subscription = req.body;
    res.status(201).send({ message: "send notification" });
    webpush.sendNotification(subscription, JSON.stringify({title:'test'})).catch((err)=>console.log(err));
  });
  app.use("/vendor", VendorRoute);
  app.use("/admin", AdminRoute);
  app.use("/customer", CustomerRoute);
  return app;
};
