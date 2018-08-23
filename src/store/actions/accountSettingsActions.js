import * as actionTypes from "./actionTypes";
import { newForm, formValidity } from "./formUtility";
import firebase from "../../firebase";
const database = firebase.database();
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
export const loading = () => {
  return {
    type: actionTypes.LOADING_ACCOUNT_SETTINGS
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
export const initAccountSettings = () => {
  return dispatch => {
    dispatch(loading());
    database
      .ref()
      .child("settings/account")
      .once("value")
      .then(res => {
        const settings = { ...res.val() };
        dispatch(setAccountSettings(settings));
      })
      .catch(err => console.log(err));
  };
};
