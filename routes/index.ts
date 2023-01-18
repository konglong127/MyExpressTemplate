import { Router } from "express";
import users from "./users";
import home from "./home";
import video from "./video";

export default function LoadRouter(router: Router) {
  router
    .use("/", home)
    .use("/users", users)
    .use("/video", video)
  return router;
}
