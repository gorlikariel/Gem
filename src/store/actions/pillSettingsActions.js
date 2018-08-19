import * as actionTypes from "./actionTypes";
import { newForm, formValidity } from "./formUtility";
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
