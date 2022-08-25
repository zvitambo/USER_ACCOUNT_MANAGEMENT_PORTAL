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
export const updateUserProfile = () => {};
