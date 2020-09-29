import React, { useState } from "react";

import { addPost } from "../../actions/post";
import store from "../../store";

const PostForm = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          store.dispatch(addPost({ text }));
          setText("");
        }}
      >
        <textarea
          cols="30"
          rows="5"
          placeholder="Create a post"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default PostForm;
