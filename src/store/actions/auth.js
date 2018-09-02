import * as actionTypes from "./actionTypes";
import axios from "axios";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = authData => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData: authData
  };
};

export const authFailed = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const auth = (email, password, isSignup) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    const url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/${
      isSignup ? "signupNewUser" : "verifyPassword"
    }?key=AIzaSyBq_VbcsnwxgnTS05jOWVeqMhgNI40J1rU`;
    async function tryAuth() {
      try {
        const authResponse = await axios.post(url, authData);
        console.log(authResponse);
        dispatch(authSuccess(authResponse.data));
      } catch (e) {
        console.error(e);
      }
    }
    tryAuth();
  };
};
