import React from "react";
import "./NewPost.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const nav = useNavigate();

  const handleNewPost = () => {
    // console.log(`title ${title}`);
    // console.log(`Body ${body}`);
    //console.log(`user_id ${user_id}`);
    axios
      .post(
        "http://127.0.0.1:5000/posts",
        { title, body },
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
      <button type="submit">Submit</button>
    </form>
  );
}
