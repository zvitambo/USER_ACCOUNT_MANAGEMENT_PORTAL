import { IsEmail, Length } from "class-validator";
import {User, UserDoc} from '../models';


export interface AuthPayload {
    _id: string;
    verified: boolean;
    email: string;
    username: string;
}
