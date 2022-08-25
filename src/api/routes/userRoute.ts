import express from 'express';
import { getUserProfile, updateUserProfile } from '../controllers';
import {Authenticate } from '../middlewares';


const router = express.Router();

//router.use(Authenticate);
router.get('/me', Authenticate,  getUserProfile);
router.put("/me", Authenticate,  updateUserProfile);

export {router as UserRoute};