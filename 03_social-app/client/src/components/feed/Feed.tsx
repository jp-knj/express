import Share from "../share/Share";
import Post from "../post/Post";
import "./feed.css";

import { Posts } from "../../Data";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__container">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} desc={p.desc} photo={p.photo} date={p.photo} like={p.like} comment={p.comment}/>
        ))}
      </div>
    </div>
  );
}

export default Feed;
