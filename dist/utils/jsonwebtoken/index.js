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
exports.validateMiddleware = exports.verifyToken = exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret = 'AZBY.0918+CXDW*7263=_!~:"|&H2&()JX@)sdf*J)!J&^#&%GBS&3&V5Af';
function createToken(data) {
    return jsonwebtoken_1.default.sign(data, secret, { expiresIn: 60 * 60 * 24 });
}
exports.createToken = createToken;
function verifyToken(token) {
    return jsonwebtoken_1.default.verify(token, secret);
}
exports.verifyToken = verifyToken;
function validateMiddleware() {
    return function (req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const arr = ["/lists", "/validate"];
            if (arr.find((item) => item === req.url)) {
                if (typeof req.headers.token === "string") {
                    if (verifyToken(req.headers.token) !== "err") {
                        next();
                    }
                    else {
                        res.status(200).send({ msg: "variable t are too much", status: 404 });
                    }
                }
                else {
                    res.status(200).send({ msg: "variable t are too much", status: 404 });
                }
            }
        });
    };
}
exports.validateMiddleware = validateMiddleware;
// let token=createToken({name:"asasd",age:21,asdasd:"123123"});
// console.log(token);
// let res=verifyToken(token as string);
// console.log(res);
