import express, {Application} from "express";
import cors from "cors";
import {errorHandler} from '../utility';
import { AuthRoute } from "./routes";


export default async (app: Application) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());

    app.use("/auth", AuthRoute);
    app.use(errorHandler);

    app.get("/api", (req, res) => {
      return res.status(200).json({ message: "connected ....... again" });
    });
    
    // app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    //   res.status(500).json({ message: err.message });
    // });
    //return app;
}