import {
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  LOGIN_FAIL
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
  isMe: null
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
        isMe: payload.isMe
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      const isMe = payload.user.isMe;

      return {
        ...state,
        ...payload,
        isMe: isMe,
        isAuthenticated: true,
        loading: false
      };

    case LOGOUT:
    case AUTH_ERROR:
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        isMe: false
      };
    default:
      return state;
  }
}
