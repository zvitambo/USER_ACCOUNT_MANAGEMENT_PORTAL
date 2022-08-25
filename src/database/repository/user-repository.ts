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

} 
