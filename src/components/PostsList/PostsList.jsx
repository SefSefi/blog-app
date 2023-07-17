import Post from "../Post/Post";
import "./PostsList.css";
import { useEffect, useState } from "react";
import axios from "axios";

function PostsList({ categories }) {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [freeSearch, setFreeSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/posts")
      .then((response) => {
        console.log("ALL POSTS: ", response);
        setPosts(response.data);
        setFilteredPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="all-posts">
      <h1>This is my blog</h1>
      <label>
        filter by content:
        <input
          type="text"
          value={freeSearch}
          onChange={(e) => setFreeSearch(e.target.value)}
        />
        <button
          type="button"
          onClick={() =>
            setFilteredPosts(
              posts.filter((post) => post.body.includes(freeSearch))
            )
          }
        >
          Submit
        </button>
      </label>
      <label>
        filter by category:
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select...</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </label>

      {filteredPosts
        .filter(
          (post) => !selectedCategory || post.category_id === +selectedCategory
        )
        .map((post) => (
          <Post key={post.id} data={post} />
        ))}
    </div>
  );
}

export default PostsList;
