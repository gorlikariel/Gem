import * as actionTypes from "./actionTypes";

export const pillTaken = () => {
  return {
    type: actionTypes.TAKE_PILL
  };
};

export const undoPill = () => {
  return {
    type: actionTypes.UNDO_PILL
  };
};

export const tryTakingPill = () => {
  return dispatch => {
    dispatch(loading());
    database
      .ref("dailyPill/taken")
      .set(true)
      .then(res => dispatch(pillTaken()))
      .catch(err => console.log(err));
  };
};

export const tryUndoPill = () => {
  return dispatch => {
    dispatch(loading());
    database
      .ref("dailyPill/taken")
      .set(false)
      .then(res => dispatch(undoPill()))
      .catch(err => console.log(err));
  };
};

export const initSuccess = isPillTaken => {
  return {
    type: actionTypes.INIT_PILL_BUTTON,
    isPillTaken: isPillTaken
  };
};

export const initPillButton = isTaken => {
  console.log(isTaken);
  return dispatch => {
    dispatch(initSuccess(isTaken));
  };
};
