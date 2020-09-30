import React, { useState } from "react";
import { Button, Form } from "../common";
import { addComment } from "../../actions/post";
import store from "../../store";

const CommentForm = ({ postId }) => {
  const [text, setText] = useState("");

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        store.dispatch(addComment(postId, { text }));
        setText("");
      }}
    >
      <textarea
        cols="35"
        rows="5"
        placeholder="Create a post"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="submit" value="Submit">
        Leave Comment
      </Button>
    </Form>
  );
};

export default CommentForm;
