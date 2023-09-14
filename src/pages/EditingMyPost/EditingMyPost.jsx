import React, { useEffect } from "react";
import "./EditingMyPost.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import forge1 from "../../assets/images/forge_1.jpg";
import forge2 from "../../assets/images/forge_2.jpg";

export default function EditingMyPost({ categories, posts }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const nav = useNavigate();
  const { post_id } = useParams();

  useEffect(() => {
    const { title, body, categry_id } = posts.find(
      (post) => post.id === +post_id
    );

    setTitle(title);
    setBody(body);
    setSelectedCategory(categry_id || "");
  }, []);

  const hendelEditingMyPost = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://127.0.0.1:5000/updatedPost",
        { title, body, category: selectedCategory, post_id },
        { withCredentials: true }
      )
      .then((res) => {
        console.log("Response from the backend:", res.data);
        nav("/Home");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="main-baseTo-newPost">
      <img src={forge1} alt="My Image" />
      <form className="new-post-form" onSubmit={hendelEditingMyPost}>
        <h1>Editing your post</h1>
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
            <option value={""}>Select...</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
      <img src={forge2} alt="My Image" />
    </div>
  );
}
