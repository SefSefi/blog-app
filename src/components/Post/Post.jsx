import { useNavigate } from "react-router-dom";
import "./Post.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

function Post({ data }) {
  const navigate = useNavigate();
  const nav = useNavigate();

  const handleEdit = (e) => {
    e.stopPropagation();
    console.log("edit!: ", data);
    nav(`/EditingMyPost/${data.id}`);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    console.log("delete!");
  };

  const linkToPost = () => {
    navigate("/PostPage/" + data.id);
  };

  return (
    <div className="post" onClick={linkToPost}>
      <div className="text-part">
        <h3>{data.title}</h3>
        <p className="post-content">{data.body}</p>
        <p className="post-publish-time">
          Published at {data.created_at}, by {data.username}
        </p>
        <div className="post-btn-container">
          <button className="bottun-editing" onClick={handleEdit}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
          <button className="bottun-delete-post" onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
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
