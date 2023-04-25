import './Nav.css';

function Nav() {
    return (
        <nav>
        <div className = "nav-buttons">
            <div className = "simple-buttons"><a href="url">Home</a></div>
            <div className = "with-borders"><a href="url">About Me</a></div>
            <div className = "simple-buttons"><a href="url">Contact Me</a></div>
        </div>
        <div className = "login-button">
            <a href="url">Login</a>
        </div>
      </nav>
    )
}

export default Nav;