// deno-lint-ignore-file
import path from "path";
import createError from "http-errors";
import express, { Application, Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import template from "express-art-template";
import router from "./routes/index";
const app: Application = express();

app.use(cors());

// 设置页面模板引擎
app.engine("html", template);
app.set("views", path.resolve(__dirname, "./views"));
app.set("view engine", "html");

app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, "./public")));

app.use(router(express.Router()));

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404));
});

// 错误处理中间件
// deno-lint-ignore no-explicit-any
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;
