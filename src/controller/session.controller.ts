import { Request, Response } from "express";
import config from "config";
import { sign } from "../utils/jwt.utils";
import { createAccessToken, createSession } from '../service/session.service';
import { validatePassword } from "../service/user.service";

export async function createUserSessionHandler(req: Request, res: Response) {
  // validate the email and password
  const user = await validatePassword(req.body);
  if (!user) return res.status(401).send("Invalid username or password");

  const session = await createSession(user._id, req.get("user-agent") || "");

  const accessToken = createAccessToken({
    user,
    session
  });

  const refreshToken = sign(session, {
    expiresIn: config.get("refreshTokenTtl"), // 1y
  })

  return res.send({ accessToken, refreshToken });
}
