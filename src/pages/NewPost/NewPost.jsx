import React from "react";
import "./NewPost.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewPost({ categories }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

  const nav = useNavigate();

  const handleNewPost = () => {
    axios
      .post(
        "http://127.0.0.1:5000/posts",
        { title, body, category: selectedCategory },
        { withCredentials: true }
      )
      .then((res) => {
        // console.log("Response from the backend:", res.data);
        nav("/Home");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form className="new-post-form" onSubmit={handleNewPost}>
      <h1>New Post</h1>
      <label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title:"
          type="text"
          id="fname"
          name="fname"
        />
      </label>
      <label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="content:"
          id="content"
          name="content"
          rows="10"
          cols="50"
        ></textarea>
      </label>
      <label>
        Choose category:
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
