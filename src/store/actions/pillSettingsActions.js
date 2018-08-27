import * as actionTypes from "./actionTypes";
import { newForm, formValidity } from "./formUtility";
import firebase from "../../firebase";
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

export const loading = () => {
  return {
    type: actionTypes.LOADING_PILL_SETTINGS
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
export const initPillSettings = () => {
  return dispatch => {
    dispatch(loading());
    database
      .ref()
      .child("settings/pill")
      .once("value")
      .then(res => {
        const settings = { ...res.val() };
        dispatch(setPillSettings(settings));
      })
      .catch(err => console.log(err));
  };
};
