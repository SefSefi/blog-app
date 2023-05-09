import React, { useEffect, useState } from "react";
import { postsData } from "../../data";
import { useParams } from "react-router-dom";

export default function Post() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const data = postsData.find((p) => p.id === +id);
    if (data) setPost(data);
  }, [setPost]);

  if (post)
    return (
      <div className="post">
        <div className="text-part">
          <h3>{post.title}</h3>
          <p className="post-content" dangerouslySetInnerHTML={post.content} />
          <p className="post-publish-time">
            Published {post.time} ago by {post.name}
          </p>
        </div>
        <div className="picture-part">
          <div className="the-picture">
            <div className="the-1-x"></div>
            <div className="the-2-x"></div>
          </div>
        </div>
      </div>
    );
  else return <div>Loading...</div>;
}
