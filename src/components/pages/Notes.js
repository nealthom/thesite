import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { PageLayout, TextBox } from "components/common";

import hike from "../../img/hike.jpg";
import store from "../../store";
import { getPosts } from "../../actions/post";

import PostItem from "../posts/PostItem";

const Styledimage = styled.img`
  width: 100%;
  padding: 2rem;
`;

const Styledlink = styled.a`
  color: blue;
  text-decoration: none;
`;

export default function Notes() {
  useEffect(() => {
    store.dispatch(getPosts());
  }, []);

  const posts = useSelector((state) => state.post.posts);

  return (
    <PageLayout>
      <TextBox>
        {" "}
        <Styledimage src={hike} alt="hiking image" />
        I'm a hiking fanatic. This is from the{" "}
        <Styledlink
          href="https://lakeouachitavistatrail.org/WP/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LOViT
        </Styledlink>{" "}
        trail in Hot Springs, AR
      </TextBox>
      {posts.map((post) => (
        <PostItem key={post._id} post={post} showActions />
      ))}
    </PageLayout>
  );
}
