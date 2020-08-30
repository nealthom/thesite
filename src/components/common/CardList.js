import React from "react";
import styled from "styled-components";
import { Card } from "components/common";

const CardListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export function CardList({ results }) {
  return (
    <CardListWrapper>
      {results.map((data) => (
        <Card>{data}</Card>
      ))}
    </CardListWrapper>
  );
}
