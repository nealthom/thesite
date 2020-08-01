import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  background: #d3d3d3;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 4px;
  margin-bottom: 16px;
  a {
    color: blue;
    text-decoration: none;
  }

  @media (min-width: 768px) {
    min-height: 250px;
    margin-right: 10px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: black;
  }
`;

export function Card({ children }) {
  return (
    <CardWrapper>
      <div>{children}</div>
    </CardWrapper>
  );
}
