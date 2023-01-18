import express from "express";
import { validateMiddleware } from "../utils/jsonwebtoken/index";
import * as controller from "../controller/video";
import * as validate from "../utils/validate/videoValidate";
const router = express.Router();

router
  .get("/", controller.index)
  .post("/createVideo", validateMiddleware, validate.createVideo, controller.index)
  
export default router;
