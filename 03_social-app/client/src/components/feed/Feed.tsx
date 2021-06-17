import Share from "../share/Share";
import Post from "../post/Post";
import "./feed.css";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__container">
        <Share />
        <Post/>
      </div>
    </div>
  );
}

export default Feed;
