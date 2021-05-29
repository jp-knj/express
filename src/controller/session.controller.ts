import { Request, Response } from "express";
import config from "config";
import { get } from "lodash";
import { sign } from "../utils/jwt.utils";
import { createAccessToken, createSession, updateSession } from '../service/session.service';
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

export async function invalidateUserSessionHandler(req: Request, res: Response) {
  const sessionId = get(req, "user.session");
  await updateSession({ _id: sessionId }, { valid: false });
  return res.sendStatus(200);
}
