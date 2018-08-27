import * as actionTypes from "./actionTypes";
import { newForm, formValidity } from "./formUtility";
import firebase from "../../firebase";
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
export const loading = () => {
  return {
    type: actionTypes.LOADING_ALARM_SETTINGS
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
export const initAlarmSettings = () => {
  return dispatch => {
    dispatch(loading());
    database
      .ref()
      .child("settings/alarm")
      .once("value")
      .then(res => {
        const settings = { ...res.val() };
        dispatch(setAlarmSettings(settings));
        console.log(settings);
      })
      .catch(err => console.log(err));
  };
};
