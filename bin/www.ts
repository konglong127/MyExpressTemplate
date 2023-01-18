#!/usr/bin/env node

import app from "../app";
import http from "http";
import process from "process";

const port = normalizePort("3000");
app.set("port", port);

const server = http.createServer(app);

server.on("error", onError);

server.listen(port,()=>{
  console.log(`127.0.0.1:${port}`);
});

function normalizePort(val:any) {
  const port = parseInt(val, 10);

  if (isNaN(port)) return val; 

  if (port >= 0)  return port; 

  return false;
}

function onError(error:any) {
  if (error.syscall !== "listen")  throw error;

  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}
