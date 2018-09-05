import * as actionTypes from './actionTypes';
import { newForm, formValidity } from './formUtility';
export const formChanged = (form, isFormValid) => {
  return {
    type: actionTypes.ACCOUNT_SETTINGS_CHANGED,
    form: form,
    isFormValid: isFormValid
  };
};

export const updateForm = (event, inputIdentifier) => {
  return (dispatch, prevState) => {
    const form = newForm(
      event,
      inputIdentifier,
      prevState().accountSettings.form
    );
    const isFormValid = formValidity(form);
    dispatch(formChanged(form, isFormValid));
  };
};
export const accountSettingsSubmitted = () => {
  return {
    type: actionTypes.SUBMIT_ACCOUNT_SETTINGS
  };
};
export const setAccountSettings = accountSettings => {
  return {
    type: actionTypes.INIT_ACCOUNT_SETTINGS,
    settings: accountSettings
  };
};
export const initAccountSettings = settings => {
  console.log(settings);
  return dispatch => {
    dispatch(setAccountSettings(settings));
  };
};
export const clearAccountSettings = () => {
  return {
    type: actionTypes.CLEAR_ACCOUNT_SETTINGS
  };
};
