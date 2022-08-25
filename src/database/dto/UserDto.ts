import {IsEmail, Length} from 'class-validator';


export class CreateUserInputs {

  @IsEmail()
  email: string;

  @Length(6, 30)
  phone: string;

  @Length(8, 18)
  password: string;
} 


export class UserLoginInputs {
  @IsEmail()
  email: string;

  @Length(8, 18)
  password: string;
} 


export class UpdateUserProfileInputs {
  @Length(2, 30)
  firstName: string;

  @Length(2, 30)
  lastName: string;

  @Length(2, 30)
  userName: string;

  @Length(12, 30)
  website: string;

  @Length(6, 30)
  phone: string;
} 