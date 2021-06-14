import { helpSignUp, helpSignIn, helpGoogleSignIn } from "../api";
import {
  LOGIN,
  REGISTER,
  GOOGLE_SIGN_IN,
  LOGIN_FAIL,
  REGISTER_FAIL,
} from "./types";

export const tokenConfig = (token) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  if (token) {
    config.headers["auth-token"] = token; /////*****/
  }
  return config;
};

export const signinAction = (formData, history) => async (dispatch) => {
  try {
    const { data } = await helpSignIn(formData);
    dispatch({ type: LOGIN, payload: data });
    history.push("/homepage");
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data,
    });
  }
};

export const googleSignInAction = (data, history) => async (dispatch) => {
  try {
    const res = await helpGoogleSignIn(data);
    dispatch({ type: GOOGLE_SIGN_IN, payload: res.data });
    history.push("/homepage");
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data,
    });
  }
};

export const signupAction = (formData, history) => async (dispatch) => {
  const { email, firstName, lastName, password } = formData;
  try {
    const { data } = await helpSignUp({ email, firstName, lastName, password });
    dispatch({ type: REGISTER, payload: data });
    history.push("/homepage");
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data,
    });
  }
};
