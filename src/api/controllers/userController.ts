import {
  CreateUpdateCompanyInputs, CreateUpdateAddressInputs,
  UpdateUserProfileInputs,
} from "./../../database/dto";
import { AuthPayload } from './../../database/dto/AuthDto';
import { UserService } from './../../services/user-service';
import { RequestHandler } from 'express';



const userService = new UserService();

export const getUserProfile: RequestHandler = async (req, res, next) => {
    
    try {
        const { _id } = <AuthPayload>req.user;
        const data = await userService.getUserProfile(_id);
        return res.status(200).json(data);        
    } catch (error) {
        next(error);
    }
};

export const updateUserProfile:RequestHandler = async (req, res, next) => {
    try {
        const {_id } = <AuthPayload>req.user;
        const { firstName, lastName, userName, phone, website } = <
          UpdateUserProfileInputs
        >req.body;
        const data = await userService.updateUserProfile(_id, {
          firstName,
          lastName,
          userName,
          phone,
          website,
        });
        return res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};

export const addUpdateUserAddress: RequestHandler = async (req, res, next) => {
  try {
    const { _id } = <AuthPayload>req.user;
    const {
      street,
      suite,
      city,
      zipcode,
      lat,
      lng
    } = <CreateUpdateAddressInputs>req.body;
    const data = await userService.addUpdateUserAddress(_id, {
      street,
      suite,
      city,
      zipcode,
      lat,
      lng,
    });
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};


export const addUpdateUserCompany: RequestHandler = async (req, res, next) => {
  try {
    const { _id } = <AuthPayload>req.user;
    const {
      name,
      catchPhrase,
      bs,
      code
    } = <CreateUpdateCompanyInputs>req.body;
    const data = await userService.addUpdateUserCompany(_id, {
      name,
      catchPhrase,
      bs,
      code
    });
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
