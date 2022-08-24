import { NextFunction, Request, Response } from "express";

export const errorHandler = async(err: Error, req: Request, res: Response, next: NextFunction) => {
   

  process.on("uncaughtException", (ex) => {    
    process.exit(1);
  });

  process.on("unhandledRejection", (ex) => {
    process.exit(1);
  });
  res.status(500).json({ message: "Something went wrong", error: err });
  next();

}