import { useState, useEffect } from "react";
import axios from "axios";
import Share from "../share/Share";
import Post from "../post";
import "./feed.css";

interface UserProps {
  username?: string;
}

const Feed:React.FC<UserProps> = (username) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/profile/" + username.username)
        : await axios.get("posts/profile/" + username);
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feed__container">
        <Share />
        {posts.map((p,i) => (
          <Post key={i} {...p} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
