import * as actionTypes from "./actionTypes";
import axios from "axios";
import { MAP_FIELDS } from "../../util/registerPageUtil";

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
export const dispatchLogout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("expirationDate");
  return dispatch => {
    dispatch(dispatchLogout());
  };
};

// export const checkAuthTimeout = expiresIn => {
//   return dispatch => {
//     setTimeout(() => {
//       logout();
//     }, expiresIn);
//   };
// };

export const auth = (userData, isSignup) => {
  return dispatch => {
    console.log("amountofpacks: " + userData[MAP_FIELDS.amountOfPacks]);
    dispatch(authStart());
    const authData = {
      email: "email",
      password: "password",
      returnSecureToken: true
    };
    const url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/${
      isSignup ? "signupNewUser" : "verifyPassword"
    }?key=AIzaSyBq_VbcsnwxgnTS05jOWVeqMhgNI40J1rU`;
    console.log(url);
    async function tryAuth() {
      try {
        const response = await axios.post(url, authData);
        console.log(response);
        //saving user id, token and expiration time in localStorage
        // ============================================================
        localStorage.setItem("token", response.data.idToken);
        localStorage.setItem("userId", response.data.localId);
        const expirationDate = new Date(
          new Date().getTime() + response.data.expiresIn * 1000
        ).getTime();
        console.log("expirationDate: " + expirationDate);
        localStorage.setItem("expirationDate", expirationDate);
        // ============================================================
        dispatch(authSuccess(response.data.idToken, response.data.localId));
      } catch (e) {
        console.error(e.response.data.error.message);
        dispatch(authFailed(e.response.data.error));
      }
    }
    tryAuth();
  };
};
export const logIn = (token, id, expiration) => {
  const timeToExpire = (expiration - new Date().getTime()) * 1000;
  console.log("timeToExpire: " + timeToExpire);
  return dispatch => {
    dispatch(authSuccess(token, id));
  };
};

export const checkIfAuth = () => {
  return dispatch => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("NO TOKEN, LOGGIN OUT");
      // dispatch(logout());
    } else {
      const expirationDate = localStorage.getItem("expirationDate");
      const userId = localStorage.getItem("userId");
      console.log(expirationDate, " loggingin");
      dispatch(logIn(token, userId, expirationDate));
    }
  };
};
