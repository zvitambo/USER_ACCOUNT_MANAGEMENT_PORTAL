import { IsEmail, Length } from "class-validator";

export class CreateUpdateCompanyInputs {
  @Length(6, 30)
  name: string;

  @Length(6, 150)
  catchPhrase: string;

  @Length(6, 30)
  bs: string;

  @Length(4, 12)
  code: string;
}
