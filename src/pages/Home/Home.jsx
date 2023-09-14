import React from "react";
import PostsList from "../../components/PostsList/PostsList";
import Side from "../../components/Side/Side";
import brushes from "../../assets/images/paint-brush-for-project.jpg";
import "./Home.css";

export default function Home({ categories, posts }) {
  return (
    <div class="all_home_page">
      <div class="main_home">
        <PostsList {...{ categories, posts }} />
        <div class="low_bar_img_brushes">
          <img src={brushes} alt="brush Image" />
        </div>
      </div>
      <Side />
    </div>
  );
}
