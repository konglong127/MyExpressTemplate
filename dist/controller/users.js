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
exports.login = exports.register = exports.index = void 0;
const index_1 = __importDefault(require("../database/index"));
const md5_1 = __importDefault(require("md5"));
const jsonwebtoken_1 = require("../utils/jsonwebtoken");
function index(req, res) {
    res.send("respond with a resource");
}
exports.index = index;
function register(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            req.body.password = (0, md5_1.default)(req.body.password);
            const users = new index_1.default.users(req.body);
            yield users.save();
            res.status(200).send({ msg: "register", status: 200 });
        }
        catch (_a) {
            res.status(200).send({ msg: "fail", status: 500 });
        }
    });
}
exports.register = register;
function login(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        req.body.password = (0, md5_1.default)(req.body.password);
        let value = yield index_1.default.users.findOne(req.body);
        if (value) {
            let token = (0, jsonwebtoken_1.createToken)({ name: value.name, sex: value.sex, age: value.age, createAt: value.createAt });
            res.status(200).send({ msg: "success", token, status: 200 });
        }
        else {
            res.status(200).send({ msg: "error", status: 200 });
        }
        console.log(value);
    });
}
exports.login = login;
