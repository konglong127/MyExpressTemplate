"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
function users(mongoose) {
    let user = new mongoose.Schema({
        name: { type: String, required: true },
        password: { type: String, required: true },
        age: { type: Number, require: true },
        sex: { type: String, require: true },
        phone: { type: String, require: true },
        email: { type: String, required: true },
        image: { type: String, default: null },
        createAt: {
            type: Date,
            default: (0, date_fns_1.format)(new Date(), "yyyy-MM-dd HH:mm:ss"),
        },
        updateAt: {
            type: Date,
            default: (0, date_fns_1.format)(new Date(), "yyyy-MM-dd HH:mm:ss"),
        },
    });
    return mongoose.model("User", user);
}
exports.default = users;
