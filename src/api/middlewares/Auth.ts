import { ValidateSignature } from '../../utility/AuthUtility';
import { RequestHandler } from 'express';
import { AuthPayload } from "../../database/dto";
import { nextTick } from 'process';



declare global {
    namespace Express {
        interface Request {
            user?: AuthPayload
        }
    }
}

export const Authenticate: RequestHandler = async (req, res, next) => {
  const validate = await ValidateSignature(req);

  if (validate) {
    next();
  } else {
    return res.json({ message: "user not found" });
  }
};