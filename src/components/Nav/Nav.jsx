import "./Nav.css";
import { NavLink } from "react-router-dom";
import * as React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Nav({ setIsLoggedIn, isLoggedIn }) {
  const nav = useNavigate();
  const handleLogout = () => {
    axios
      .post("logout", null, {
        withCredentials: true,
      })
      .then((res) => {
        setIsLoggedIn(false);
        nav("/home");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <nav>
      <div className="nav-buttons">
        <div className="nav-padding">
          <NavLink to="/home">Home</NavLink>
        </div>
        <div className="nav-padding nav-left-border">
          <NavLink to="/About">About Me Page</NavLink>
        </div>
        {isLoggedIn && (
          <div className="nav-padding nav-left-border">
            <NavLink to="/newPost">New Post Page</NavLink>
          </div>
        )}
        {/* {isLoggedIn && (
          <div className="nav-padding nav-left-border">
            <NavLink to="/EditingMyPost">Editing My Post</NavLink>
          </div>
        )} */}
      </div>
      <div className="login-button">
        {isLoggedIn ? (
          <NavLink onClick={handleLogout}>Log out</NavLink>
        ) : (
          <NavLink to="/LogIn">Login</NavLink>
        )}
      </div>
    </nav>
  );
}

export default Nav;
