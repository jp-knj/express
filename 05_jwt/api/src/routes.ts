import { Express } from "express";
import {
  createSessionHandler,
  getSelectionHandler,
} from "./controller/session.controller";

function route(app: Express) {
  // login
  app.post("/api/session", createSessionHandler);

  // get the current session
  app.get("/api/session", getSelectionHandler);
}

export default route;
