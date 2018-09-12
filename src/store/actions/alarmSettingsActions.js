import * as actionTypes from './actionTypes';
import { newForm, formValidity } from './formUtility';
import firebase from '../../firebase';
import { formToKeyValuePairs } from '../actions/formUtility';
const database = firebase.database();

export const formChanged = (form, isFormValid) => {
  return {
    type: actionTypes.ALARM_SETTINGS_CHANGED,
    form: form,
    isFormValid: isFormValid
  };
};

export const updateForm = (event, inputIdentifier) => {
  return (dispatch, prevState) => {
    const form = newForm(
      event,
      inputIdentifier,
      prevState().alarmSettings.form
    );
    const isFormValid = formValidity(form);
    dispatch(formChanged(form, isFormValid));
  };
};
export const alarmSettingsSubmitted = () => {
  return {
    type: actionTypes.SUBMIT_ALARM_SETTINGS
  };
};
export const setAlarmSettings = alarmSettings => {
  return {
    type: actionTypes.INIT_ALARM_SETTINGS,
    settings: alarmSettings
  };
};
export const initAlarmSettings = settings => {
  return dispatch => {
    dispatch(setAlarmSettings(settings));
  };
};
export const clearAlarmSettings = () => {
  return {
    type: actionTypes.CLEAR_ALARM_SETTINGS
  };
};
export const tryUpdatingAlarmSettings = () => {
  return (dispatch, prevState) => {
    const userId = localStorage.getItem('userId');
    const form = prevState().alarmSettings.form;
    const settings = formToKeyValuePairs(form);
    database
      .ref(`users/${userId}/settings/alarm`)
      .set(settings)
      .then(res => dispatch(alarmSettingsSubmitted()))
      .catch(err => console.log(err));
  };
};
