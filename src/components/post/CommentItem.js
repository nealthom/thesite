import React from "react";
import { TextBox } from "components/common";

const CommentItem = ({ postId, comment: { _id, text, name, user, date } }) => {
  return (
    <TextBox>
      <p>
        {text}
        <br />
        <span>{name}</span>
        <br />
        <span>{new Date(date).toLocaleDateString()}</span>
      </p>
    </TextBox>
  );
};

export default CommentItem;
