import "./Comments.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axios from "axios";

export default function Comments({ post }) {
  const [comment, setComment] = useState("");
  const handlePostComment = () => {
    axios
      .post(
        "http://127.0.0.1:5000/commentPost",
        { content: comment, post_id: post.id },
        { withCredentials: true }
      )
      .then((res) => {
        post.comments = res.data.comments;
        setComment("");
      })
      .catch((e) => console.err(e));
  };

  return (
    <div className="comments-container">
      <h3>Comments</h3>
      <ul className="comments-list">
        {post.comments.map((comment) => (
          <li key={comment.id} className="comment">
            <h4>{comment.author}</h4>
            <p>{comment.content}</p>
          </li>
        ))}
      </ul>
      <div className="new-comment-container">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write new comment..."
        />

        <button className="bottun-comment" onClick={handlePostComment}>
          <FontAwesomeIcon icon={faCommentDots} />
        </button>
      </div>
    </div>
  );
}
