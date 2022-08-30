import { IsEmail, Length } from "class-validator";

export class CreateUpdateAddressInputs {

  @Length(6, 120)
  street: string;

  @Length(2, 30)
  suite: string;

  @Length(3, 50)
  city: string;

  @Length(3, 12)
  zipcode: string;

  @Length(2, 12)
  lat: number;

  @Length(2, 12)
  lng: number;
}



