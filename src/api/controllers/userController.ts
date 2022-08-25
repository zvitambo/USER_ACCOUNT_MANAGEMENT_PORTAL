import { UpdateUserProfileInputs } from './../../database/dto/UserDto';
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
