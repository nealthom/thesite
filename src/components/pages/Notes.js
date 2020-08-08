import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { PageLayout } from "components/common";

const Content = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

export default function Notes() {
  useEffect(() => {
    async function getData() {
      const url = "https://arcane-oasis-30423.herokuapp.com/test";
      const response = await axios.get(url);
      console.log(response.data.msg);
    }
    getData();
  }, []);
  return (
    <PageLayout>
      <Content>These are the notes.</Content>
    </PageLayout>
  );
}
