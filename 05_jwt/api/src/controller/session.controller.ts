import { Request, Response } from "express";
import { getUser } from "../db";
import { signJWT, verifyJWT } from "../utils/jwt.utils";
// login handler
export function createSessionHandler(req: Request, res: Response) {
  const { email, password } = req.body;
  const user = getUser(email);
  if (!user || user.password !== password) {
    return res.status(401).send("Invaild email or password");
  }

  // create access token
  const accessToken = signJWT({ email: user.email, name: user.name }, "1h");

  // set access token
  res.cookie("accessToken", accessToken, {
    maxAge: 300000,
    httpOnly: true,
  });
  // send user back
  res.send(verifyJWT(accessToken).payload);
}

// get the session
// logout handler
