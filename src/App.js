import Nav from "./components/Nav/Nav";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import NewPost from "./pages/NewPost/NewPost";
import Post from "./pages/Post/Post";
import LogIn from "./pages/LogIn/LogIn";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Nav />
        <div className="all">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/newPost" element={<NewPost />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/*" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
