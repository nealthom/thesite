import React from "react";

const CommentItem = ({ postId, comment: { _id, text, name, user, date } }) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

export default CommentItem;
