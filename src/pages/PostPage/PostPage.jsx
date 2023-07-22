import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PostPage.css";
import Comments from "../../components/Comments/Comments";

export default function PostPage({ posts }) {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const data = posts.find((p) => p.id === +id);
    if (data) setPost(data);
    console.log("post data: ", post);
  }, [setPost]);

  if (post)
    return (
      <div className="PostPage-frame">
        <div className="PostPage-content">
          <div>
            <h3 className="PostPage-h3">{post.title}</h3>
            <p>{post.body}</p>
            <p>
              Published at {post.created_at}
              <br />
              by {post.username}
            </p>
          </div>
        </div>
        <Comments {...{ post }} />
      </div>
    );
  else return <div>Loading...</div>;
}
