

//Dealing with data base operations 

import { IAuthRepository } from "./contracts";
import { User, UserDoc } from "../models"



export class AuthRepository implements IAuthRepository<UserDoc> {
  async register(phone: string, password: string, email: string, salt: string) {
    try {
      const user = await User.create({
        phone,
        password,
        email,
        salt,
        firstName: "",
        lastName: "",
        userName: "",
        verified: false,
        otp: 0,
        otp_expiry: null,
        address: "",
        website: "",
        company: "",
      });
      
      return user;
    } catch (error) {
      throw new Error("API Error", { cause: error });
    }
  }

  async find(email: string) {
    try {
      const user = await User.findOne({ email: email });
      return user;
    } catch (error) {
      throw new Error("API Error", { cause: error });
    }
  }

  async findById(_id: string) {
    try {
      const user = await User.findById(_id);
      return user;
    } catch (error) {
      throw new Error("API Error", { cause: error });
    }
  }
}