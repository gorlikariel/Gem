import * as actionTypes from "./actionTypes";
import firebase from "../../firebase";
const database = firebase.database();

export const loading = () => {
  return {
    type: actionTypes.LOADING_PILL_BUTTON
  };
};
export const pillTaken = () => {
  return {
    type: actionTypes.TAKE_PILL
  };
};

export const tryTakingPill = () => {
  return dispatch => {
    dispatch(loading());
    database
      .ref("dailyPill/taken")
      .set("true")
      .then(res => dispatch(pillTaken()))
      .catch(err => console.log(err));
  };
};

export const initSuccess = isPillTaken => {
  return {
    type: actionTypes.INIT_PILL_BUTTON,
    isPillTaken: isPillTaken
  };
};

export const initPillButton = () => {
  return dispatch => {
    dispatch(loading());
    database
      .ref()
      .child("dailyPill/taken")
      .once("value")
      .then(res => dispatch(initSuccess(res.val())))
      .catch(err => console.log(err));
  };
};
