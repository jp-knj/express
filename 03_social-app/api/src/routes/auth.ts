import { Express, Request, Response } from "express";
import User from "../models/User"
import log from "../logger";
import bcrypt from "bcrypt";

export default function (app: Express) {
  app.post("/api/auth/register",
    async (req: Request, res: Response) => {
      try {
        // generated Hashed Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // create New User
        const registerNewUser = await new User({
          username: req.body.username,
          email: req.body.email,
          password: hashedPassword,
        });

        // Save user and return respond
        const user = await registerNewUser.save();
        res.status(200).json(user);
        } catch (e) {
          log.error(e);
          return res.status(400).send(e.errors);
      }
    }
  )
}
