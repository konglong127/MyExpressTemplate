"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const express_validator_1 = require("express-validator");
const err_1 = __importDefault(require("./err"));
const index_1 = __importDefault(require("../../database/index"));
exports.register = (0, err_1.default)([
    (0, express_validator_1.body)("name")
        .notEmpty()
        .withMessage("用户名不能为空")
        .bail()
        .isLength({ min: 3 })
        .withMessage("用户名长度不能小于3")
        .bail(),
    (0, express_validator_1.body)("email")
        .notEmpty()
        .withMessage("邮箱不能为空")
        .bail()
        .isEmail()
        .withMessage("邮箱格式错误")
        .bail()
        .custom((val) => __awaiter(void 0, void 0, void 0, function* () {
        const emailValidate = yield index_1.default.users.findOne({ email: val });
        if (emailValidate) {
            return Promise.reject("邮箱已被注册");
        }
    }))
        .bail(),
    (0, express_validator_1.body)("phone")
        .notEmpty()
        .withMessage("手机号不能为空")
        .bail()
        .custom((val) => __awaiter(void 0, void 0, void 0, function* () {
        const phoneValidate = yield index_1.default.users.findOne({ phone: val });
        if (phoneValidate) {
            return Promise.reject("手机号已被注册");
        }
    }))
        .bail(),
    (0, express_validator_1.body)("password")
        .notEmpty()
        .withMessage("密码不能为空")
        .bail()
        .isLength({ min: 5 })
        .withMessage("用户名长度不能小于5")
        .bail(),
    (0, express_validator_1.body)("sex")
        .notEmpty()
        .withMessage("性别不能为空")
        .bail(),
    (0, express_validator_1.body)("age")
        .notEmpty()
        .withMessage("年龄不能为空")
        .bail(),
]);
exports.login = (0, err_1.default)([
    (0, express_validator_1.body)("email")
        .notEmpty()
        .withMessage("邮箱不能为空")
        .bail()
        .isEmail()
        .withMessage("邮箱格式错误")
        .bail(),
    (0, express_validator_1.body)("password")
        .notEmpty()
        .withMessage("密码不能为空")
        .bail(),
]);
