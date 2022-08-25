import { UpdateUserProfileInputs } from "./../database/dto";
import { FormateData } from './../utility/AuthUtility';
import { User, UserDoc } from '../database/models';
import { UserRepository } from '../database/repository/user-repository';
import { IUserRepository } from './../database/repository/contracts/index';



export class UserService {
  repository: IUserRepository<UserDoc>;

  constructor() {
    this.repository = new UserRepository();
  }

  async getUserProfile(_id: string) {
    try {
      const profile = await this.repository.findById(_id);
      return FormateData(profile);
    } catch (error) {
      throw new Error("API Error", { cause: error });
    }
  }

  async updateUserProfile(
    _id: string,
    updateUserProfileInputs: UpdateUserProfileInputs
  ){
    try {
        const user = await this.repository.update(_id, updateUserProfileInputs);
        return FormateData(user);
    } catch (error) {
        throw new Error("API Error", { cause: error });
    }
  }
}