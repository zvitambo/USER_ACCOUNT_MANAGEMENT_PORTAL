import dotenv from 'dotenv';
dotenv.config();

export const APP_SECRET = process.env.APP_SECRET || 'my_temp_app_secret';
export const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/users";
export const PORT = process.env.PORT || 9000;