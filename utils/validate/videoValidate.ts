import { body } from "express-validator";
import validate from "./err";

export const createVideo = validate([
  body("_id")
    .notEmpty()
    .withMessage("缺少ID不能为空")
    .bail(),
  body("title")
    .notEmpty()
    .withMessage("视频名不能为空")
    .bail()
    .isLength({ max: 20 })
    .withMessage("视频名长度不能大于20")
    .bail(),
  body("vodvideoId")
    .notEmpty()
    .withMessage("Vod不能为空")
    .bail(),
]);
