import React from "react";
import { TextBox } from "components/common";

const CommentItem = ({ postId, comment: { _id, text, name, user, date } }) => {
  return (
    <TextBox>
      <p>{text}</p>
    </TextBox>
  );
};

export default CommentItem;
