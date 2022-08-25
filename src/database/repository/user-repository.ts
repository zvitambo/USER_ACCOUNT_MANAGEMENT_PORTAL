import { UpdateUserProfileInputs } from './../dto/UserDto';
import { IUserRepository } from "./contracts";
import { User, UserDoc } from "../models";


export class UserRepository implements IUserRepository<UserDoc> {
  async find(email: string): Promise<UserDoc | null> {
    try {
      const user = await User.findOne({ email: email });
      return user;
    } catch (error) {
      throw new Error("API Error", { cause: error });
    }
  }
  async findById(_id: string): Promise<UserDoc | null> {
    try {
      const user = await User.findById(_id);
      return user;
    } catch (error) {
      throw new Error("API Error", { cause: error });
    }
  }
  async update(_id: string, updateUserProfileInputs: UpdateUserProfileInputs): Promise<UserDoc | null> {
    try {
      let user = await User.findById(_id);
      const {firstName, lastName, userName, phone, website} = updateUserProfileInputs;
      if (user){
        user.firstName = firstName;
        user.lastName = lastName;
        user.userName = userName;
        user.phone = phone;
        user.website = website;

        user = await user.save();

        return user;
      }
      return null;
    } catch (error) {
      throw new Error("API Error", { cause: error });
    }
  }
  addAddress(
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Object
  ): Promise<UserDoc> {
    throw new Error("Method not implemented.");
  }
  addCompany(name: string, catchPhrase: string, bs: string): Promise<UserDoc> {
    throw new Error("Method not implemented.");
  }
} 
