import * as actionTypes from "./actionTypes";
import { newForm, formValidity } from "./formUtility";
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
