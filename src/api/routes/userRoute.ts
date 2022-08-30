import express from 'express';
import {
  getUserProfile,
  updateUserProfile,
  addUpdateUserAddress,
  addUpdateUserCompany,
} from "../controllers";
import {Authenticate } from '../middlewares';


const router = express.Router();

//router.use(Authenticate);
router.get('/me', Authenticate,  getUserProfile);
router.put("/me", Authenticate,  updateUserProfile);
router.post("/address", Authenticate, addUpdateUserAddress);
router.post("/company", Authenticate, addUpdateUserCompany);

export {router as UserRoute};