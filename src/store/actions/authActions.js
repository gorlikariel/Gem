import * as actionTypes from "./actionTypes";
import axios from "axios";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    userId: userId
  };
};

export const authFailed = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const checkAuthTimeout = expiresIn => {
  console.log(expiresIn * 1000);
  return dispatch => {};
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
    console.log(url);
    async function tryAuth() {
      try {
        const authResponse = await axios.post(url, authData);
        console.log(authResponse);
        dispatch(
          authSuccess(authResponse.data.idToken, authResponse.data.localId)
        );
        dispatch(checkAuthTimeout(authResponse.data.expiresIn));
      } catch (e) {
        console.error(e);
        dispatch(authFailed(e.response.data.error));
      }
    }
    tryAuth();
  };
};
