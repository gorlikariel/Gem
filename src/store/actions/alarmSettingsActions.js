import * as actionTypes from "./actionTypes";
import { newForm, formValidity } from "./formUtility";

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
    console.log(settings);
    dispatch(setAlarmSettings(settings));
  };
};
