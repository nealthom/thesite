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

export default function Dashboard() {
  return (
    <PageLayout>
      <Content>This is my dashboard</Content>
    </PageLayout>
  );
}
