import { AuthService } from './../../services/auth-service';
import { CreateUserInputs, UserLoginInputs } from './../../database/dto/UserDto';
import { plainToClass } from 'class-transformer';
import { RequestHandler } from 'express';
import { validate } from 'class-validator';

//functionality to handle User Registration, login , OTP verification

const authService = new AuthService()

export const register: RequestHandler = async(req, res, next) => {

    
    try {
        const userInputs = plainToClass(CreateUserInputs, req.body);
        const userInputErrors = await validate(userInputs, {
          validationError: { target: true },
        });
    
        if (userInputErrors.length > 0)
          return res
            .status(400)
            .json({
              message: "Invalid registration details",
              error: userInputErrors,
            });
    
        const data = await authService.register(userInputs);
        if (data) return res.status(201).json(data);
        return res.status(400).json({"message": "registration failed"});
        
    } catch (error) {
        next(error);
    }

};

export const login: RequestHandler = async (req, res, next) => {
    try {
      const userLoginInputs = plainToClass(UserLoginInputs, req.body);
      const userInputErrors = await validate(userLoginInputs, {
        validationError: { target: true },
      });

      if (userInputErrors.length > 0)
        return res.status(400).json({
          message: "Invalid login details",
          error: userInputErrors,
        });

      const data = await authService.login(userLoginInputs);

      if (data) return res.status(201).json(data);
      return res.status(400).json({ message: "login failed" });
    } catch (error) {
      next(error);
    }
};



export const verifyUser = () => {};
export const requestOTP = () => {};