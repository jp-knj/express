import { Express, Request, Response } from "express";
import User from "../models/User"
import log from "../logger";
import bcrypt from "bcrypt";

export default function (app: Express) {

  // @description register new user
  // @route       POST /api/auth/register
  // @access      Public
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

  // @description login user
  // @route       POST /api/auth/login
  // @access      Public
  app.post("/api/auth/login",
    async (req: Request, res: Response): Promise<void> => {
      try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).json("user not found");
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(400).json("wrong password");
        res.status(200).json(user)
      } catch (e) {
        log.error(e);
        res.status(500).json(e);
      }
    }
  );
}
