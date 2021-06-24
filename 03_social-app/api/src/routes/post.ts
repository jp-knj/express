import { Express, Request, Response } from "express";
import log from "../logger";
import Post from "../models/Post";
import User from "../models/User";

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
  // @route       PUT /api/posts/:id/like
  // @access      Public
  app.put("/api/posts/:id/like",
    async (req: Request, res: Response) => {
      try {
        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)) {
          await post.updateOne({ $push: { likes: req.body.userId } });
          res.status(200).json("The Post has been liked")
        } else {
          await post.updateOne({ $pull: { likes: req.body.userId } });
          res.status(200).json("The post has been disliked");
        }
      } catch (e) {
        res.status(500).json(e);
      }
    }
  )

  // @description get a post
  // @route       POST /api/auth/register
  // @access      Public
  app.get("/api/posts/:id/",
    async (req: Request, res: Response) => {
      try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
      } catch (e) {
        res.status(500).json(e);
      }
    }
  )

  // @description get timeline posts
  // @route       POST /api/posts/profile/:username
  // @access      Public
  app.get("/api/profile/:username",
    async (req: Request, res: Response) => {
      try {
        const user = await User.findOne({ username: req.params.username });
        const posts = await Post.find({ userId: user._id})
        res.status(200).json(posts);
      } catch (e) {
        res.status(500).json(e);
      }
    }
  )
  // app.get("/api/timeline/:user",
  //   async (req: Request, res: Response) => {
  //     try {
  //       const user = await User.findOne({ username: req.params.username });
  //       const posts = await Post.find({ userId: user._id})
  //       res.status(200).json(posts);
  //     } catch (e) {
  //       res.status(500).json(e);
  //     }
  //   }
  // )
}
