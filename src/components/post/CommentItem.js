import React from "react";
import styled from "styled-components";
import { TextBox } from "components/common";

const StyledName = styled.span`
  font-size: 1.25rem;
`;

const StyledDate = styled.span`
  font-size: 1.25rem;
`;

const CommentItem = ({ postId, comment: { _id, text, name, user, date } }) => {
  return (
    <TextBox>
      <p>
        {text}
        <br />
        <StyledName>{name}</StyledName>
        <br />
        <StyledDate>{new Date(date).toLocaleString()}</StyledDate>
      </p>
    </TextBox>
  );
};

export default CommentItem;
