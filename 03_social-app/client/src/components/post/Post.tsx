import { useState } from "react";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../Data";
import "./post.css";

interface PostProps {
  // id?: string,
  desc?: string,
  photo: string,
  date: string,
  userId?: number,
  like: number,
  comment: number
}

const Post: React.FC<PostProps> = (post) => {
  const [like, setLike] = useState<number>(post.like);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  }
  return (
    <div className="post">
      <div className="post__container">
        <div className="post__header">
          <div className="post__prepend">
            <img className="post__profile" src={post.photo} alt=""/>
            <span className="post__username">{Users.filter((u) => u.id === post.userId)[0].username}</span>
            <span className="post__date">{post.date}</span>
          </div>
          <div className="post__append">
            <MoreVert />
          </div>
        </div>
        <div className="post__body">
          <span className="post__text">{post.desc}</span>
          <img className="post__image" src={post.photo} alt="" />
        </div>
        <div className="post__footer">
          <div className="post__append">
            <img className="likeIcon" src="assets/like.png" alt="" onClick={likeHandler}/>
            <img className="likeIcon" src="assets/heart.png" alt="" />
            <span className="post__likeCounter">{like} people like it</span>
          </div>
          <div className="post__append">
            <span className="post__comment">{post.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
