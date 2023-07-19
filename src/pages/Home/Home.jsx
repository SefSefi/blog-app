import React from "react";
import PostsList from "../../components/PostsList/PostsList";
import Side from "../../components/Side/Side";

export default function Home({ categories, posts }) {
  return (
    <>
      <PostsList {...{ categories, posts }} />
      <Side />
    </>
  );
}
