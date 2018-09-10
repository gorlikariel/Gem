import * as actionTypes from './actionTypes';
import { newForm, formValidity } from './formUtility';
import { formToKeyValuePairs } from '../actions/formUtility';
import firebase from '../../firebase';
const database = firebase.database();

export const formChanged = (form, isFormValid) => {
  return {
    type: actionTypes.PILL_SETTINGS_CHANGED,
    form: form,
    isFormValid: isFormValid
  };
};

export const updateForm = (event, inputIdentifier) => {
  return (dispatch, prevState) => {
    const form = newForm(event, inputIdentifier, prevState().pillSettings.form);
    const isFormValid = formValidity(form);
    dispatch(formChanged(form, isFormValid));
  };
};

export const pillSettingsSubmitted = () => {
  return {
    type: actionTypes.SUBMIT_PILL_SETTINGS
  };
};
export const setPillSettings = pillSettings => {
  return {
    type: actionTypes.INIT_PILL_SETTINGS,
    settings: pillSettings
  };
};
export const initPillSettings = settings => {
  return dispatch => {
    dispatch(setPillSettings(settings));
  };
};
export const clearPillSettings = () => {
  return {
    type: actionTypes.CLEAR_PILL_SETTINGS
  };
};
export const tryUpdatingPillSettings = () => {
  return (dispatch, prevState) => {
    const userId = localStorage.getItem('userId');
    const form = prevState().pillSettings.form;
    const settings = formToKeyValuePairs(form);
    database
      .ref(`users/${userId}/settings/pill`)
      .set(settings)
      .then(res => dispatch(pillSettingsSubmitted()))
      .catch(err => console.log(err));
  };
};
