import express, { Request, Response } from "express";
import { get } from "lodash";


const app = express();

const GITHUB_CLIENT_ID = "";
const GITHUB_CLIENT_SECRET = "";
const secret = "shhhhhhhhhhhh";
const COOKIE_NAME = "github-jwt";

app.get("/api/auth/github", async (req: Request, res: Response) => {
  const code = get(req, "query.code");
  const path = get(req, "query.path", "/");

  if (!code) {
    throw new Error("No code!");
  }
});

app.listen(4000, () => {
  console.log("Server is listening");
});
