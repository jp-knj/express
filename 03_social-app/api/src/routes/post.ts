import { Express, Request, Response } from "express";
import log from "../logger";
import User from "../models/Post";

export default function (app: Express) {

  // @description create a post
  // @route       POST /api/auth/register
  // @access      Public
  app.post("/api/post/",
    async (req: Request, res: Response) => {
    }
  )
  // @description update a post
  // @route       POST /api/auth/register
  // @access      Public

  // @description update a post
  // @route       POST /api/auth/register
  // @access      Public

  // @description delete a post
  // @route       POST /api/auth/register
  // @access      Public

  // @description like a post
  // @route       POST /api/auth/register
  // @access      Public

  // @description get a post
  // @route       POST /api/auth/register
  // @access      Public

  // @description get all post
  // @route       POST /api/auth/register
  // @access      Public
}
