import { body } from "express-validator";
import validate from "./err";
import model from "../../database/mongoose/index";

export const register = validate([
  body("name")
    .notEmpty()
    .withMessage("用户名不能为空")
    .bail()
    .isLength({ min: 3 })
    .withMessage("用户名长度不能小于3")
    .bail(),
  body("email")
    .notEmpty()
    .withMessage("邮箱不能为空")
    .bail()
    .isEmail()
    .withMessage("邮箱格式错误")
    .bail()
    .custom(async (val) => {
      const emailValidate = await model.users.findOne({ email: val });
      if (emailValidate) {
        return Promise.reject("邮箱已被注册");
      }
    })
    .bail(),
  body("phone")
    .notEmpty()
    .withMessage("手机号不能为空")
    .bail()
    .custom(async (val) => {
      const phoneValidate = await model.users.findOne({ phone: val });
      if (phoneValidate) {
        return Promise.reject("手机号已被注册");
      }
    })
    .bail(),
  body("password")
    .notEmpty()
    .withMessage("密码不能为空")
    .bail()
    .isLength({ min: 5 })
    .withMessage("用户名长度不能小于5")
    .bail(),
  body("sex")
    .notEmpty()
    .withMessage("性别不能为空")
    .bail()
    .isIn(["男", "女"])
    .withMessage("性别格式错误"),
  body("age")
    .notEmpty()
    .withMessage("年龄不能为空")
    .bail()
    .custom(async (val) => {
      if (val < 10 || val > 120) {
        return Promise.reject("年龄格式错误");
      }
    }),
]);

export const login = validate([
  body("email")
    .notEmpty()
    .withMessage("邮箱不能为空")
    .bail()
    .isEmail()
    .withMessage("邮箱格式错误")
    .bail()
    .custom(async (val) => {
      const emailValidate = await model.users.findOne({ email: val });
      if (!emailValidate) {
        return Promise.reject("邮箱未注册");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("密码不能为空")
    .bail(),
]);
