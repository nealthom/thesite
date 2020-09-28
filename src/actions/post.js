import axios from "axios";
import { GET_POSTS, POST_ERROR } from "./types";

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
