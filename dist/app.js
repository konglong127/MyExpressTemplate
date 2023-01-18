"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// deno-lint-ignore-file
const path_1 = __importDefault(require("path"));
const http_errors_1 = __importDefault(require("http-errors"));
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const express_art_template_1 = __importDefault(require("express-art-template"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
// 设置页面模板引擎
app.engine("html", express_art_template_1.default);
app.set("views", path_1.default.resolve(__dirname, "./views"));
app.set("view engine", "html");
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.static(path_1.default.resolve(__dirname, "./public")));
app.use(index_1.default);
// catch 404 and forward to error handler
app.use((req, res, next) => {
    next((0, http_errors_1.default)(404));
});
// 错误处理中间件
// deno-lint-ignore no-explicit-any
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render("error");
});
exports.default = app;
