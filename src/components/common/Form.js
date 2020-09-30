import styled from "styled-components";
import { Button } from "./Button";

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: whitesmoke;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;

  .alt-text {
    text-align: center;
    margin: 10px 0;
  }

  > ${Button}:first-of-type {
    margin-top: 40px;
  }
`;

export { Form };
