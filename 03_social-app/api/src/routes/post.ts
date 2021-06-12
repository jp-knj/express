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
  // @route       PUT /api/posts/:id",
  // @access      Public
  app.put("/api/posts/:id",
    async (req: Request, res: Response) => {
      try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
          await post.updateOne({ $set: req.body });
          res.status(200).json("the post have been update");
        } else {
          res.status(403).json("you can update only your post")
        }
      } catch (e) {
        res.status(500).json(e);
      }
    }
  )

  // @description delete a post
  // @route       Delete /api/posts/:id
  // @access      Public
  app.delete("/api/posts/:id",
    async (req: Request, res: Response) => {
      try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
          await post.deleteOne();
          res.status(200).json("the post have been deleted");
        } else {
          res.status(403).json("you can delete only your post")
        }
      } catch (e) {
        res.status(500).json(e);
      }
    }
  )

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
