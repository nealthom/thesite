const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
  isMe: null
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  console.log(action);
  switch (type) {
    case "REGISTER_SUCCESS":
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", payload.token);

      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };

    case "LOGOUT":
      console.log("logging out");
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
