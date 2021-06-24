import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { MoreVert } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./post.css";

interface PostProps {
  id: number;
  desc?: string,
  img: string,
  date: string,
  userId: number,
  likes: number,
  comment: number,
  createdAt: number
}

interface UserProps {
  profilePicture?: string,
  coverPicture?: string,
  followers?: Array<string>,
  followings?: Array<string>,
  isAdmin?: boolean,
  _id?: string,
  city?: string,
  username: string,
  email?: string,
  createdAt: string
}
const Post: React.FC<PostProps> = (post) => {
  const [like, setLike] = useState<number>(post.likes);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const initialUserState = {
    username: "",
    profilePicture: "person/noAvatar.png"
};
  const [user, setUser] = useState(initialUserState);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  }

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUsers();
  }, [post.userId]);

  return (
    <div className="post">
      <div className="post__container">
        <div className="post__header">
          <div className="post__prepend">
            <Link to={`profile/${user.username}`}>
            <img
              className="post__profile"
              src={PF + user.profilePicture}
              alt=""
              />
            </Link>
            <span className="post__username">{user.username}</span>
            <span className="post__date">{format(post.createdAt)}</span>
          </div>
          <div className="post__append">
            <MoreVert />
          </div>
        </div>
        <div className="post__body">
          <span className="post__text">{post?.desc}</span>
          <img className="post__image" src={PF+post.img} alt="" />
        </div>
        <div className="post__footer">
          <div className="post__append">
            <img className="likeIcon" src={`${PF}/like.png`} alt="" onClick={likeHandler} />
            <img className="likeIcon" src={`${PF}/heart.png`} alt="" />
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
