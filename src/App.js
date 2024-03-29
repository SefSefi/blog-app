import Nav from "./components/Nav/Nav";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import NewPost from "./pages/NewPost/NewPost";
import PostPage from "./pages/PostPage/PostPage";
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/Signup/Signup";
import EditingMyPost from "./pages/EditingMyPost/EditingMyPost";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const initApp = async () => {
      const postsFromServer = await axios.get("posts");
      setPosts(postsFromServer.data);

      const categoriesFromServer = await axios.get("category");
      setCategories(categoriesFromServer.data);
    };

    const id = setTimeout(initApp, 500);
    axios.defaults.baseURL = "http://127.0.0.1:5000";
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="App">
      <Nav {...{ setIsLoggedIn }} {...{ isLoggedIn }} />
      <div className="all">
        <Routes>
          <Route path="/home" element={<Home {...{ categories, posts }} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/newPost"
            element={
              isLoggedIn ? (
                <NewPost {...{ categories }} />
              ) : (
                <Navigate to="/home" />
              )
            }
          />
          <Route
            path="/EditingMyPost/:post_id"
            element={
              isLoggedIn ? (
                <EditingMyPost {...{ categories, posts }} />
              ) : (
                <Navigate to="/home" />
              )
            }
          />
          <Route path="/PostPage/:id" element={<PostPage {...{ posts }} />} />
          <Route path="/LogIn" element={<LogIn {...{ setIsLoggedIn }} />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
