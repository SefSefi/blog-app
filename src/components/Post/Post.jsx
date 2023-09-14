import { useNavigate } from "react-router-dom";
import "./Post.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrash,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import { Axios } from "axios";
import axios from "axios";

function Post({ data }) {
  const navigate = useNavigate();
  const nav = useNavigate();

  const handleEdit = (e) => {
    e.stopPropagation();
    console.log("edit!: ", data);
    nav(`/EditingMyPost/${data.id}`);
  };

  const handleDelete = () => {
    console.log("delete post!");
    axios
      .delete(`deletePost`, {
        withCredentials: true,
        data: {
          post_id: data.id,
        },
      })
      .then((res) => {
        console.log("Response from the backend:", res.data);
        // nav("/Home");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handlecommet = () => {
    console.log("comment on post!");
  };

  const linkToPost = () => {
    navigate("/PostPage/" + data.id);
  };

  return (
    <div className="post" onClick={linkToPost}>
      <div className="text-part">
        <h3>{data.title}</h3>
        <p className="post-content">{data.body}</p>
        <div className="post-footer">
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
