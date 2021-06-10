import { Express, Request, Response } from "express";
import bcrypt from "bcrypt";

import User from "../models/User";

export default function (app: Express) {
  // @description update user
  // @route       POST /api/auth/login
  // @access      Public
  app.put("/api/users/:id",
    async (req: Request, res: Response) => {
      if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
          try {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
          } catch (e) {
            return res.status(500).json(e);
          }
        }
        try {
          const user = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body,
          });
          res.status(200).json("Account has been updated");
        } catch (e) {
          return res.status(500).json(e);
        }
      } else {
        return res.status(403).json("You can update only your account!");
      }
    }
  );

  // @description delete user
  // @route       POST /api/auth/login
  // @access      Public
  app.delete("/api/users/:id",
    async (req: Request, res: Response) => {
      if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
          await User.findByIdAndDelete(req.params.id);
          res.status(200).json("Account has been deleted");
        } catch (err) {
          return res.status(500).json(err);
        }
      } else {
        return res.status(403).json("You can delete only your account!");
      }
    }
  );

  // @description get a user
  // @route       POST /api/auth/login
  // @access      Public
  app.get("/api/users/:id",
      async (req: Request, res: Response) => {
      try {
        const user = await User.findById(req.params.id);
        const { password, updatedAt, ...other } = user._doc;
        res.status(200).json(other);
      } catch (err) {
        res.status(500).json(err);
      }
    }
  );

  // @description follow a user
  // @route       POST /api/auth/login
  // @access      Public

  // @description unfollow a user
  // @route       POST /api/auth/login
  // @access      Public

  // @description login user
  // @route       POST /api/auth/login
  // @access      Public
}
