import React from "react";
import styled from "styled-components";
import { PageLayout } from "components/common";
import PostForm from "../posts/PostForm";

const Content = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

export default function Dashboard() {
  return (
    <PageLayout>
      <Content>
        <h1>Hello Thomas</h1>
      </Content>
      <PostForm />
    </PageLayout>
  );
}
