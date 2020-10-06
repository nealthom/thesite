import styled from "styled-components";

const TextBox = styled.div`
  font-size: 2.5rem;
  background: black;
  border: white solid 3px;
  background-size: cover;
  border-radius: 5px;
  padding: 2rem;
  margin-bottom: 2rem;

  > a {
    color: blue;
    text-decoration: none;
  }
  @media (min-width: 768px) {
    font-size: 3.25rem;
  }
`;

export { TextBox };
