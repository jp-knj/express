import { Request, Response } from "express";
import { getUser } from "../db";
// login handler
export function createSessionHandler(req: Request, res: Response) {
  const { email, password } = req.body;
  const user = getUser(email);
  if (!user || user.password !== password) {
    return res.status(401).send("Invaild email or password");
  }

  // create access token
  // set access token
  // send user back
}

// get the session
// logout handler
