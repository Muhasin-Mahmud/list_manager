import { LOGIN, LOGOUT, REGISTER } from "../actions/types";

const loggedUser = localStorage.getItem("auth-user");

const initialState = {
  user: loggedUser ? JSON.parse(loggedUser) : {},
  isAuthenticated: loggedUser ? true : false,
  isLoading: false,
  token: null,
  errorMsg: ''
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {

    case "USER_LOADING":
      return {
        ...state,
        token: localStorage.getItem('auth-token'),
        isLoading: true
      }

    case "USER_LOADED":
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        errorMsg: '',
        user: { ...state.user, ...action.payload }
      }

    case REGISTER:
    case LOGIN:
      const { user, token } = action.payload;
      localStorage.setItem('auth-token', JSON.stringify(token));
      localStorage.setItem('auth-user', JSON.stringify(user));
      return {
        ...state,
        user: user,
        token: token,
        isAuthenticated: true,
        isLoading: false,
        errorMsg: '',
      };

    case LOGOUT:
      localStorage.removeItem('auth-token');
      localStorage.removeItem('auth-user');
      return {
        ...state,
        user: {},
        token: null,
        isAuthenticated: false,
        isLoading: false,
        errorMsg: '',
      };

    case "REGISTER_FAIL":
    case "LOGIN_FAIL":
      localStorage.removeItem('auth-token');
      localStorage.removeItem('auth-user');
      console.log('trying to send errrrrr', action.payload);
      return {
        ...state,
        user: {},
        token: null,
        isAuthenticated: false,
        isLoading: false,
        errorMsg: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
