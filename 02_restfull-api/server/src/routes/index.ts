import { Express, Request, Response } from "express";
function routes(app: Express) {
  app.get('/healthcheck', ( req: Request, res: Response ) => {
    return res.send("Hello World")
 })
}

export default routes;
