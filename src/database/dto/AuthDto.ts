import { IsEmail, Length } from "class-validator";
import {User, UserDoc} from '../models';


export interface AuthPayload {
    _id: number;
    verified: boolean;
    email: string;
    username: string;
}

export interface IAuthRepository<T> {
  register(
    phone: string,
    password: string,
    email: string,
    salt: string
  ): Promise<T>;
  find(email: string): Promise<T | null>;
  findById(_id: string): Promise<T | null>;
}