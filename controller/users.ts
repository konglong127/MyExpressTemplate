import { Request, Response } from "express";
import model from "../database/mongoose/index";
import md5 from "md5";
import fs from "fs";
import { createToken } from "../utils/jsonwebtoken";

export function login(req: Request, res: Response) {
  res.send("respond with a resource");
}

export function upload(req: Request, res: Response) {
  res.send(req.file);
}