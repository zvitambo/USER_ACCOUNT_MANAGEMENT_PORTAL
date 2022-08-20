import express, {Application} from "express";
import cors from "cors";


export default async (app: Application) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());

    app.get("/api", (req, res) => {
      return res.status(200).json({ message: "connected ....... again" });
    });
    //return app;
}