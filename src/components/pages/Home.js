import React from "react";
import styled from "styled-components";
import { PageLayout } from "components/common";

const Content = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

export default function Home() {
  return (
    <PageLayout>
      <Content>
        Hi, I started this site as a way to work with the garage door open. Stay
        Tuned.
      </Content>
    </PageLayout>
  );
}
