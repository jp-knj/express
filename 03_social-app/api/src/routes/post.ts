import { Express, Request, Response } from "express";
import log from "../logger";
import Post from "../models/Post";
import User from "../models/Post";

export default function (app: Express) {

  // @description create a post
  // @route       POST /api/post/
  // @access      Public
  app.post("/api/posts/",
  async (req: Request, res: Response) => {
    const newPost = new Post(req.body);
    try {
      const savedPost = await newPost.save();
      res.status(200).json(savedPost);
      } catch (e) {
      res.status(500).json(e);
      }
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

  // @description get timeline posts
  // @route       POST /api/auth/register
  // @access      Public
}
