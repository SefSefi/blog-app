import Post from "../Post/Post";
import "./PostsList.css";
import { postsData } from "../../data";

function PostsList() {
  return (
    <div className="all-posts">
      <h1>This is my blog</h1>
      {postsData.map((post) => (
        <Post key={post.id} data={post} />
      ))}
    </div>
  );
}

export default PostsList;
