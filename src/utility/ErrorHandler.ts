import { NextFunction, Request, Response } from "express";

export const errorHandler = async(err: Error, req: Request, res: Response, next: NextFunction) => {
   

  process.on("uncaughtException", (ex) => {    
    console.log("uncaughtException", ex);
    process.exit(1);
  });

  process.on("unhandledRejection", (ex) => {
     console.log("unhandledRejection", ex);
    process.exit(1);
  });

  console.log("cause", err.cause);
  res.status(500).json({ message: "Something went wrong", error: err.message });
  next();

}