import { useNavigate } from "react-router-dom";
import "./Post.css";

function Post({ data }) {
  const navigate = useNavigate();

  const linkToPost = () => {
    navigate("/post/" + data.id);
  };

  return (
    <div className="post" onClick={linkToPost}>
      <div className="text-part">
        <h3>{data.title}</h3>
        <p className="post-content">{data.body}</p>
        <p className="post-publish-time">
          Published at {data.created_at}, by {data.username}
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
}

export default Post;
