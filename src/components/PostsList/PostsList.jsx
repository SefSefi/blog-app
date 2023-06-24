import Post from "../Post/Post";
import "./PostsList.css";
import { useEffect, useState } from "react";
import axios from "axios";

function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/posts")
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="all-posts">
      <h1>This is my blog</h1>
      {posts.map((post) => (
        <Post key={post.id} data={post} />
      ))}
    </div>
  );
}

export default PostsList;
