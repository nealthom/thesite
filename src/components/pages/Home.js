import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { PageLayout } from "components/common";

const Content = styled.div`
  font-size: 2.5rem;
  background: black;
  border: white solid 3px;
  background-size: cover;
  padding: 2rem;
  @media (min-width: 768px) {
    font-size: 3.25rem;
  }
`;

export default function Home() {
  const user = useSelector((state) =>
    state.auth.user ? state.auth.user.name : null
  );

  return (
    <PageLayout>
      <Content>
        Welcome {user ? user : "Visitor"}, I'm Thomas Neal, Have a look at my
        feed. More coming soon...
      </Content>
    </PageLayout>
  );
}
