#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../app"));
const http_1 = __importDefault(require("http"));
const process_1 = __importDefault(require("process"));
const port = normalizePort("3000");
app_1.default.set("port", port);
const server = http_1.default.createServer(app_1.default);
server.on("error", onError);
server.listen(port, () => {
    console.log(`127.0.0.1:${port}`);
});
function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port))
        return val;
    if (port >= 0)
        return port;
    return false;
}
function onError(error) {
    if (error.syscall !== "listen")
        throw error;
    const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process_1.default.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process_1.default.exit(1);
            break;
        default:
            throw error;
    }
}
