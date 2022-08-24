import { AuthPayload } from "../database/dto";
import {  Request } from "express";
import { APP_SECRET } from "../config";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const GenerateSalt = async () => {
    return await bcrypt.genSalt();
}

export const GeneratePassword = async (password: string, salt: string) => {
    return await bcrypt.hash(password, salt);
}

export const ValidatePassword = async (enteredPassword: string, savedPassword: string, salt: string) => {
    return await GeneratePassword(enteredPassword, salt ) === savedPassword;
}

export const GenerateSignature = (payload: AuthPayload) => {
    return jwt.sign(payload, APP_SECRET, {expiresIn: '6h'});
}

export const ValidateSignature = async (req: Request)  => {
    const signature = req.get('Authorization');

    if (signature) {
        const payload = jwt.verify(signature.split(' ')[1], APP_SECRET) as AuthPayload;
        req.user = payload;
        return true;
    }
    return false;
}  

export const FormateData = (data: any) => {
  if (data) {
    return  data;
  } else {
    throw new Error("Data Not found!");
  }
};

