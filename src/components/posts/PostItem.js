import React from "react";
import { Link } from "react-router-dom";
import { TextBox } from "components/common";

const PostItem = ({
  post: { _id, text, name, user, comments, date },
  showActions
}) => {
  return (
    <TextBox>
      <p>{text}</p>
      <p>{new Date(date).toLocaleString()}</p>
      {showActions && <Link to={`/posts/${_id}`}>Discussion</Link>}
    </TextBox>
  );
};

export default PostItem;
