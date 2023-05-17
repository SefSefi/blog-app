import React, { useEffect, useState } from "react";
import { postsData } from "../../data";
import { useParams } from "react-router-dom";
import "./PostPage.css";

export default function PostPage() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const data = postsData.find((p) => p.id === +id);
    if (data) setPost(data);
  }, [setPost]);

  if (post)
    return (
      <div className="PostPage-frame">
        <div className="PostPage-content">
          <div className="">
            <h3 className ="PostPage-h3">{post.title}</h3>
            <p className="" dangerouslySetInnerHTML={post.content} />
            <p className="">
              Published {post.time} ago by {post.name}
            </p>
          </div>
          <div className=" PostPage-picture-position">
            <div className="the-picture">
              <div className="the-1-x"></div>
              <div className="the-2-x"></div>
            </div>
          </div>
        </div>
      </div>
    );
  else return <div>Loading...</div>;
}
