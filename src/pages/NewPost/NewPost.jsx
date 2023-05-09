import React from "react";
import "./NewPost.css";

export default function NewPost() {
  return (
    <form className="new-post-form">
      <h1>New Post</h1>
      <label>
        <input placeholder="title:" type="text" id="fname" name="fname" />
      </label>
      <label>
        <textarea
          placeholder="content:"
          id="content"
          name="content"
          rows="10"
          cols="50"
        ></textarea>
      </label>
      <button type="button">Submit</button>
    </form>
  );
}
