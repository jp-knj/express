import { MoreVert } from "@material-ui/icons";
import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <div className="post__container">
        <div className="post__header">
          <div className="post__prepend">
            <img className="post__profile" src="/assets/person/1.jpeg" alt=""/>
            <span className="post__username">kenji tomita</span>
            <span className="post__date">08.01</span>
          </div>
          <div className="post__append">
            <MoreVert />
          </div>
        </div>
        <div className="post__body">
          <span className="post__text">Hello World</span>
          <img className="post__image" src="/assets/person/1.jpeg" alt="" />
        </div>
        <div className="post__footer">
          <div className="post__append">
            <img className="likeIcon" src="assets/like.png" alt="" />
            <img className="likeIcon" src="assets/heart.png" alt="" />
            <span className="post__likeCounter"> people like it</span>
          </div>
          <div className="post__append">
            <span className="post__comment">15</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
