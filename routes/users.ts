import express from "express";
import * as controller from "../controller/users";
import * as validate from "../utils/validate/userValidate";
import { validateMiddleware } from "../utils/jsonwebtoken";
import multer from 'multer';
const upload = multer({ dest: 'public/uploads/' })
const router = express.Router();

router
  .post("/login", validateMiddleware, validate.login, controller.login)
  // 请求体formData中headImage字段
  .post("/upload", upload.single('headImage'), controller.upload)
export default router;
