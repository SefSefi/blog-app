import React from "react";
import "./NewPost.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import chicks from "../../assets/images/concrete-chick-2223348_1280.jpg";

export default function NewPost({ categories }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const nav = useNavigate();
  const handleNewPost = () => {
    axios
      .post(
        "posts",
        { title, body, category: selectedCategory },
        { withCredentizs: true }
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
    <div className="baseFor-newPost">
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
      <div className="footer-picture">
        <img src={chicks} alt="chicks Image" />
      </div>
    </div>
  );
}
