import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export default function validate(validator: Array<any>) {
  return async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(validator.map((validate: any) => validate.run(req)));
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json({ error: errors.array() });
    } else {
      next();
    }
  };
}
