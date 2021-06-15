import { MoreVert } from "@material-ui/icons";
import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <div className="post__container">
        <div className="post__header">
          <div className="post__prepend">
            <img
              className="post__auther-image"
              src=""
              alt=""
            />
            <span className="post__author">
            </span>
            <span className="post__date"></span>
          </div>
          <div className="post__append">
            <MoreVert />
          </div>
        </div>
        <div className="post__body">
          <span className="post__text"></span>
          <img className="post_image" src="" alt="" />
        </div>
        <div className="post__footer">
          <div className="post__prepend">
            <img className="likeIcon" src="assets/like.png" alt="" />
            <img className="likeIcon" src="assets/heart.png" alt="" />
            <span className=""></span>
          </div>
          <div className="post__append">
            <span className="post__comment"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
