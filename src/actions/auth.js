import axios from "axios";
import {
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
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

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Register a new user
export const register = ({ name, email, password }) => async (dispatch) => {
  try {
    const url = "https://arcane-oasis-30423.herokuapp.com/users/register";
    //const url = "https://go0oc.sse.codesandbox.io/login";
    //const url = "http://localhost:3000/users/login";
    const response = await axios.post(url, {
      name,
      email,
      password,
      text: "This is my first comment"
    });
    console.log(response);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL
    });
  }
};

//Login user
export const login = ({ email, password }) => async (dispatch) => {
  try {
    const url = "https://arcane-oasis-30423.herokuapp.com/users/login";
    //const url = "https://go0oc.sse.codesandbox.io/login";
    //const url = "http://localhost:3000/users/login";
    const response = await axios.post(url, {
      email,
      password
    });
    console.log(response);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Log Out
export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT
  });
};
