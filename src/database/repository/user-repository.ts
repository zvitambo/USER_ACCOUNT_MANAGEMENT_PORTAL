import { CreateUpdateCompanyInputs } from './../dto/CompanyDto';
import { UpdateUserProfileInputs, CreateUpdateAddressInputs } from "./../dto";
import { IUserRepository } from "./contracts";
import {
  Address,
  Company,
  User,
  UserDoc,
  AddressDoc,
  CompanyDoc,
} from "../models";


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
  async update(
    _id: string,
    updateUserProfileInputs: UpdateUserProfileInputs
  ): Promise<UserDoc | null> {
    try {
      let user = await User.findById(_id);
      const { firstName, lastName, userName, phone, website } =
        updateUserProfileInputs;
      if (user) {
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

  async addAddress(
    _id: string,
    createUpdateAddressInputs: CreateUpdateAddressInputs
  ): Promise<UserDoc | null> {
    try {
      let user = await User.findById(_id);

      if (user) {

       // let newAddress: AddressDoc;

        let existingAddress = await Address.findOne({
          street: createUpdateAddressInputs.street,
          suite: createUpdateAddressInputs.suite,
        });
        
        if (existingAddress)
        {

          existingAddress.city = createUpdateAddressInputs.city;
          existingAddress.zipcode = createUpdateAddressInputs.zipcode;
          existingAddress.lat = createUpdateAddressInputs.lat;
          existingAddress.lng = createUpdateAddressInputs.lng;

          await existingAddress.save();

       
          // const index = user.address.findIndex( a =>
          // { 
          //   return a.toString() === existingAddress!._id.toString();
          // });

           const index = user.address.findIndex( a => a.toString() === existingAddress!._id.toString() );

         

         if (index !== -1 ) {          

          user.address[index] = existingAddress;
         }
         else 
         {
          user.address.push(existingAddress);
         }

         // newAddress = new Address({ existingAddress, ...createUpdateAddressInputs });
        }
        else
        {
           let newAddress = new Address({ ...createUpdateAddressInputs });
           newAddress = await newAddress.save();
           user.address.push(newAddress);
          
        }
       
        await user.save();
        return user;
      }
      return null;
    } catch (error) {
      throw new Error("API Error", { cause: error });
    }
  }

  async addCompany(
    _id: string,
    createUpdateCompanyInputs: CreateUpdateCompanyInputs
  ): Promise<UserDoc | null> {
    try {
      let user = await User.findById(_id);

      if (user) {        

        let existingCompany = await Company.findOne({
          code: createUpdateCompanyInputs.code,
        });

        if (existingCompany) {
          
            existingCompany.name = createUpdateCompanyInputs.name;
            existingCompany.catchPhrase = createUpdateCompanyInputs.catchPhrase;
            existingCompany.bs = createUpdateCompanyInputs.bs;

            await existingCompany.save();

            const index = user.company.findIndex( c => c._id.toString() === existingCompany!._id.toString() );

            if (index !== -1)
            {
              user.company[index] = existingCompany;
            }else{
              user.company.push(existingCompany);
            }
         
        } else {
          let newCompany: CompanyDoc = new Company({ ...createUpdateCompanyInputs });
          await newCompany.save();
          user.company.push(newCompany);

        }        
        await user.save();
        return user;
      }
      return null;
    } catch (error) {
      
     throw new Error("API Error", { cause: error });
    }
  }
} 
