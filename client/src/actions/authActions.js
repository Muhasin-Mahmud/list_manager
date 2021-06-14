import { helpSignUp, helpSignIn, helpGoogleSignIn } from "../api";
import { LOGIN, LOGOUT, REGISTER, GOOGLE_SIGN_IN } from "./types";

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
    console.log(error);
  }
};
export const googleSignInAction = (data, history) => async (dispatch) => {
  try {
    const res = await helpGoogleSignIn(data);
    dispatch({ type: GOOGLE_SIGN_IN, payload: res.data });
    history.push("/homepage");
  } catch (error) {
    dispatch({
      type: "LOGIN_FAIL",
      payload: error.response.data,
    });
  }
};
export const signupAction = (formData, history) => async (dispatch) => {
  try {
    const { data } = await helpSignUp(formData);
    dispatch({ type: REGISTER, payload: data });
    history.push("/homepage");
  } catch (error) {
    dispatch({
      type: "REGISTER_FAIL",
      payload: error.response.data,
    });
  }
};
