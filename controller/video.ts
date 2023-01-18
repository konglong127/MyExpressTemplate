import { Request, Response } from "express";
import model from "../database/mongoose/index";


export const index=async (req: Request, res: Response) => {
  res.status(200).send('ok');
}
