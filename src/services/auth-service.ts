
import { CreateUserInputs, UserLoginInputs } from './../database/dto/UserDto';
import { GeneratePassword, GenerateSignature, FormateData, ValidatePassword } from './../utility/AuthUtility';
import { genSalt } from 'bcrypt';
import { UserDoc } from '../database/models';
import { IAuthRepository, AuthPayload } from './../database/dto/AuthDto';
import { AuthRepository } from './../database/repository/auth-repository';

//All business logic will be here 
export class AuthService {
  repository: IAuthRepository<UserDoc>;
  constructor() {
    this.repository = new AuthRepository();
  }

  async register(userInputs: CreateUserInputs) {
    const { phone, password, email } = userInputs;

    try {
      const salt = await genSalt();
      const hashedPassword = await GeneratePassword(password, salt);
      const newUser = await this.repository.register(
        phone,
        hashedPassword,
        email,
        salt
      );

      
      let payload: AuthPayload = {
        verified: false,
        email: newUser.email,
        username: newUser.userName,
        _id: newUser._id,
      };
      const token = GenerateSignature(payload);    
     
      return FormateData({ id: newUser._id, token: token });
    } catch (error) {
      throw new Error("API Error", { cause: error });
    }
  }

  async login(userInputs: UserLoginInputs) {
    const { password, email } = userInputs;

    try {
      
      const existingUser = await this.repository.find(email);

      if (existingUser){

        const validate = await ValidatePassword(password, existingUser.password, existingUser.salt);

        if (validate){
            let payload: AuthPayload = {
              verified: false,
              email: existingUser.email,
              username: existingUser.userName,
              _id: existingUser._id,
            };
            const token = GenerateSignature(payload);

            return FormateData({ id: existingUser._id, token });

        }

      }
       return FormateData(null);
            
    } catch (error) {
      throw new Error("API Error", { cause: error });
    }
  }
}