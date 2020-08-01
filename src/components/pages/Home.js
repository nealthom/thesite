import React from "react";
import styled from "styled-components";
import { PageLayout } from "components/common";

const Content = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

export default function Home() {
  return (
    <PageLayout>
      <Content>
        Hi, I started this site as a way to work with the garage door open. I
        have some ideas I am interested in working on and I want to share them.
        I am extremely interested in organizational and productivity systems as
        well as developing an extended mind so thats where I'll start. Stay
        tuned.
      </Content>
    </PageLayout>
  );
}
