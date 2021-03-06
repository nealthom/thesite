import React, { useState } from "react";
import { Button, Form } from "../common";
import { addPost } from "../../actions/post";
import store from "../../store";

const PostForm = () => {
  const [text, setText] = useState("");

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        store.dispatch(addPost({ text }));
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
        POST
      </Button>
    </Form>
  );
};

export default PostForm;
