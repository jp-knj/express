import { Express, Request, Response } from "express";
import User from "../models/User"
import log from "../logger";
export default function (app: Express) {
  app.post("/api/auth/register",
    async (req: Request, res: Response) => {
      const registerNewUser = await new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      });
        try {
          const user = await registerNewUser.save();
          res.status(200).json(user);
        } catch (e) {
          log.error(e);
          return res.status(400).send(e.errors);
      }
    }
  )
}
