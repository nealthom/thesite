import React from "react";
import { Link } from "react-router-dom";

const PostItem = ({ post: { _id, text, name, user, comments, date } }) => {
  return (
    <div>
      <p>{text}</p>
      <p>{date}</p>
      <Link to={`/posts/${_id}`}>Discussion</Link>
    </div>
  );
};

export default PostItem;
