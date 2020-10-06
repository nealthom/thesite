import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { TextBox } from "components/common";

const StyledDate = styled.span`
  font-size: 1.25rem;
`;

const PostItem = ({
  post: { _id, text, name, user, comments, date },
  showActions
}) => {
  return (
    <TextBox>
      <StyledDate>{new Date(date).toLocaleString()}</StyledDate>
      <br />
      <p>{text}</p>

      {showActions && <Link to={`/posts/${_id}`}>Discussion</Link>}
    </TextBox>
  );
};

export default PostItem;
