import axios from "axios";
import {
  USER_LOADED,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT,
  AUTH_ERROR
} from "../actions/types";
import setAuthToken from "../utils/setAuthToken";

//Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get(
      "https://arcane-oasis-30423.herokuapp.com/users/me"
    );
    // const res = await axios.get("https://go0oc.sse.codesandbox.io/users/me");
    console.log(res);
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: AUTH_ERROR
    });
  }
};
