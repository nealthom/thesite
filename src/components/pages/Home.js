import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { PageLayout } from "components/common";
import hike from "../../img/hike.jpg";

const Content = styled.div`
  font-size: 2.5rem;
  background: grey;
  background-size: cover;
  padding: 2rem;
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

export default function Home() {
  const user = useSelector((state) =>
    state.auth.user ? state.auth.user.name : null
  );

  return (
    <PageLayout>
      <Content>
        Welcome {user ? user : "Hope you are well"}
        <Styledimage src={hike} alt="hiking image" />
        I'm a hiking fanatic. This is from the
        <Styledlink
          href="https://lakeouachitavistatrail.org/WP/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LOViT
        </Styledlink>{" "}
        trail in Hot Springs, AR
      </Content>
    </PageLayout>
  );
}
