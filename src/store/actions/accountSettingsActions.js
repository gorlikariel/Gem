import * as actionTypes from './actionTypes';
import { newForm, formValidity } from './formUtility';
import { formToKeyValuePairs } from '../actions/formUtility';
import firebase from '../../firebase';
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
  return dispatch => {
    dispatch(setAccountSettings(settings));
  };
};
export const clearAccountSettings = () => {
  return {
    type: actionTypes.CLEAR_ACCOUNT_SETTINGS
  };
};

export const tryUpadtingAccountSettings = () => {
  return (dispatch, prevState) => {
    const userId = localStorage.getItem('userId');
    const form = prevState().accountSettings.form;
    const settings = formToKeyValuePairs(form);
    database
      .ref(`users/${userId}/settings/account`)
      .set(settings)
      .then(res => dispatch(accountSettingsSubmitted()))
      .catch(err => console.log(err));
  };
};
