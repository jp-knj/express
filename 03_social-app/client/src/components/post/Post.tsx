import { MoreVert } from "@material-ui/icons";
import "./post.css";

interface PostProps {
  // id: string,
  desc?: string,
  photo: string,
  date: string,
  userId?: number,
  like: number,
  comment: number
}

const Post: React.FC<PostProps> = (props) => {
  const {  desc, photo, date,like, comment} = props;
  return (
    <div className="post">
      <div className="post__container">
        <div className="post__header">
          <div className="post__prepend">
            <img className="post__profile" src={photo} alt=""/>
            <span className="post__username">Kenji Tomita</span>
            <span className="post__date">{date}</span>
          </div>
          <div className="post__append">
            <MoreVert />
          </div>
        </div>
        <div className="post__body">
          <span className="post__text">{desc}</span>
          <img className="post__image" src={photo} alt="" />
        </div>
        <div className="post__footer">
          <div className="post__append">
            <img className="likeIcon" src="assets/like.png" alt="" />
            <img className="likeIcon" src="assets/heart.png" alt="" />
            <span className="post__likeCounter">{like} people like it</span>
          </div>
          <div className="post__append">
            <span className="post__comment">{comment}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
