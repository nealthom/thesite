import React from "react";
import styled from "styled-components";
import { PageLayout } from "components/common";
import hike from "../../img/hike.jpg";

const Content = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

const Styledimage = styled.img`
  width: 100%;
  height: 200px;
`;

const Styledlink = styled.a`
  color: blue;
  text-decoration: none;
`;

export default function Home() {
  return (
    <PageLayout>
      <Content>
        <p>Welcome to my world. It's under heavy construction. 8/28/20</p>
        <Styledimage src={hike} alt="hiking image" />
        I'm a hiking fanatic. This is from the{" "}
        <Styledlink
          href="https://lakeouachitavistatrail.org/WP/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LOVT
        </Styledlink>{" "}
        trail in Hot Springs, AR
      </Content>
    </PageLayout>
  );
}
