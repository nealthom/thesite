import axios from "axios";
import { GET_POSTS, POST_ERROR, ADD_POST } from "./types";

export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://arcane-oasis-30423.herokuapp.com/posts"
    );
    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: { error }
    });
  }
};

export const addPost = (formData) => async (dispatch) => {
  try {
    const res = await axios.post(
      "https://arcane-oasis-30423.herokuapp.com/posts",
      formData
    );
    dispatch({
      type: ADD_POST,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: { error }
    });
  }
};
