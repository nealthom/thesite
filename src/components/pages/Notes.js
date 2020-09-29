import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { PageLayout } from "components/common";

import hike from "../../img/hike.jpg";
import store from "../../store";
import { getPosts } from "../../actions/post";

const Content = styled.div`
  font-size: 2.5rem;
  background: black;
  border: solid white 3px;
  background-size: cover;
  border-radius: 5px;
  padding: 2rem;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    font-size: 3.25rem;
  }
`;

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
      <Content>
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
      </Content>
      {posts.map((post) => (
        <Content key={post._id}>
          {post.text}
          {new Date(post.date).toLocaleDateString()}
        </Content>
      ))}
    </PageLayout>
  );
}
