import Nav from "./components/Nav/Nav";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import NewPost from "./pages/NewPost/NewPost";
import Post from "./pages/PostPage/PostPage";
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <div>
        <Nav {...{ setIsLoggedIn }} {...{ isLoggedIn }} />
        <div className="all">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/newPost"
              element={isLoggedIn ? <NewPost /> : <Navigate to="/home" />}
            />
            <Route path="/post" element={<Post />} />
            {/* <Route path="/post/:id" element={<Post />} /> */}
            <Route path="/LogIn" element={<LogIn {...{ setIsLoggedIn }} />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/*" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
