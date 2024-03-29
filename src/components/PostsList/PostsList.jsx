import Post from "../Post/Post";
import "./PostsList.css";
import { useEffect, useState } from "react";

function PostsList({ categories, posts }) {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [freeSearch, setFreeSearch] = useState("");
  // console.log("cats: ", categories);
  console.log("posts: ", posts);
  useEffect(() => {
    setFilteredPosts([...posts]);
  }, [posts]);

  return (
    <div className="all-posts">
      <h1 className="main_tytle">This is my blog</h1>
      <div className="filtering_posts">
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
                posts.filter((post) => post?.body?.includes(freeSearch))
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
        <div className="onlyPosts">
          {filteredPosts
            .filter(
              (post) =>
                !selectedCategory || post.category_id === +selectedCategory
            )
            .map((post) => (
              <Post key={post.id} data={post} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default PostsList;
