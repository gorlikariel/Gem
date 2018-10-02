import * as actionTypes from './actionTypes';
import firebase, { getAndStoreNotificationToken } from '../../firebase';
import { getHourStamp } from '../../util/firebaseUtil';
const database = firebase.database();

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
export const loading = () => {
  return {
    type: actionTypes.LOADING_PILL_BUTTON
  };
};
export const tryTakingPill = () => {
  const userId = localStorage.getItem('userId');
  return dispatch => {
    dispatch(loading());
    database
      .ref(`users/${userId}/dailyPill/taken`)
      .set(true)
      .then(res => {
        dispatch(pillTaken());
        database
          .ref(`users/${userId}/dailyPill/lasttimetaken`)
          .set(getHourStamp());
      })
      .catch(err => console.log(err));
  };
};

export const tryUndoPill = () => {
  const userId = localStorage.getItem('userId');
  return dispatch => {
    dispatch(loading());
    database
      .ref(`users/${userId}/dailyPill/taken`)
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
  return dispatch => {
    getAndStoreNotificationToken();
    dispatch(initSuccess(isTaken));
  };
};
