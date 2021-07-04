import { Express } from "express";

function routes(app: Express) {
  // login
  app.post("api/session", createSessionHandler);
  // get current user

  // logout
}

export default routes;
