import { Express, Request, Response } from "express";
import User from "../models/User"
export default function (app: Express) {
  app.get("/api/auth/register",
    async (req: Request, res: Response) => {
      const user = await new User({
        username: "knj",
        email: "knj@gmail.com",
        password: "123456"
      });
      await user.save();
      res.send("ok");
    }
  )
}
