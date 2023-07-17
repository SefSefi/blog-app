import React from "react";
import PostsList from "../../components/PostsList/PostsList";
import Side from "../../components/Side/Side";

export default function Home({ categories }) {
  return (
    <>
      <PostsList {...{ categories }} />
      <Side />
    </>
  );
}
