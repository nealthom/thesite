import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../common";
import { addPost } from "../../actions/post";
import store from "../../store";

const PostForm = () => {
  const [text, setText] = useState("");

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
