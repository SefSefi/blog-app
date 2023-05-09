import "./Nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="nav-buttons">
        <div className="nav-padding">
          <NavLink to="/home">Home</NavLink>
        </div>
        <div className="nav-padding nav-left-border">
          <NavLink to="/About">About Me Page</NavLink>
        </div>
        <div className="nav-padding nav-left-border">
          <NavLink to="/newPost">New Post Page</NavLink>
        </div>
      </div>
      <div className="login-button">
        <NavLink to="/LogIn">Login</NavLink>
      </div>
    </nav>
  );
}

export default Nav;
