import * as actionTypes from './actionTypes';
import axios from 'axios';
import firebase from '../../firebase';
import { formatUserObject, MAP_FIELDS } from '../../util/registerPageUtil';
const database = firebase.database();

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
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  localStorage.removeItem('expirationDate');
  return dispatch => {
    dispatch(dispatchLogout());
  };
};

export const auth = (userDataArray, isSignup) => {
  const userObject = formatUserObject(userDataArray);
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: userDataArray[MAP_FIELDS.email],
      password: userDataArray[MAP_FIELDS.password],
      returnSecureToken: true
    };
    const url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/${
      isSignup ? 'signupNewUser' : 'verifyPassword'
    }?key=AIzaSyBq_VbcsnwxgnTS05jOWVeqMhgNI40J1rU`;

    async function tryAuth(userObject) {
      try {
        const response = await axios.post(url, authData);
        const { idToken, localId, expiresIn } = await response.data;
        localStorage.setItem('token', idToken);
        localStorage.setItem('userId', localId);
        const expirationDate = new Date(
          new Date().getTime() + expiresIn * 1000
        ).getTime();
        localStorage.setItem('expirationDate', expirationDate);
        if (isSignup) {
          const postUserObject = (idToken, localId) => {
            database.ref('users/' + localId).set(userObject);
            dispatch(authSuccess(idToken, localId));
          };
          postUserObject(idToken, localId);
        } else {
          dispatch(authSuccess(idToken, localId));
        }
      } catch (e) {
        console.error(e.response.data.error.message);
        dispatch(authFailed(e.response.data.error));
      }
    }
    tryAuth(userObject);
  };
};
export const logIn = (token, id, expiration) => {
  const timeToExpire = (expiration - new Date().getTime()) * 1000;
  return dispatch => {
    dispatch(authSuccess(token, id));
  };
};

export const checkIfAuth = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('NO TOKEN, LOGGIN OUT');
      // dispatch(logout());
    } else {
      const expirationDate = localStorage.getItem('expirationDate');
      const userId = localStorage.getItem('userId');
      dispatch(logIn(token, userId, expirationDate));
    }
  };
};

export const triggerToastOpen = () => {
  return {
    type: actionTypes.NOTIFICATION_TOAST_OPEN
  };
};
export const notificationToastClosed = () => {
  return {
    type: actionTypes.NOTIFICATION_TOAST_CLOSED
  };
};
export const notificationToastOpen = () => {
  return dispatch => {
    dispatch(triggerToastOpen());
    setTimeout(() => {
      dispatch(notificationToastClosed());
    }, 5000);
  };
};
