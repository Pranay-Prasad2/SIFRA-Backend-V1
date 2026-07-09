import { Request, Response, NextFunction } from "express";
import { DEV_USER_ID } from "../config/devUser.js";

export const userContext = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  req.user = {
    id: DEV_USER_ID,
  };

  next();
};
