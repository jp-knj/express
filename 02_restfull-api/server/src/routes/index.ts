import { Express, Request, Response } from "express";
import { createShortUrl, handleRedirect } from "../controller/shortUrl.controller";
import validateResource from "../middleware/validateResource";
import shortUrlSchema from "../schema/createShortUrl.shema";

function routes(app: Express) {
  app.get('/healthcheck', (req: Request, res: Response) => {
    return res.send("Hello World")
  });
  app.post('/api/url', validateResource(shortUrlSchema), createShortUrl);

  app.get('/:shortId', handleRedirect);
}

export default routes;
