import React, { useEffect, useState } from "react";
import axios from "axios";

import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("posts/timeline/6293adc8236b16b458869436");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <Share />

        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
