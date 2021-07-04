import { Express } from "express";
import { createSessionHandler } from "./controller/session.controller";

function route(app: Express) {
  // login
  app.post("/api/session", createSessionHandler);
}

export default route;
