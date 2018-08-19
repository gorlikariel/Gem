import * as actionTypes from "./actionTypes";
import { newForm, formValidity } from "./formUtility";
import blueMarble from "../../axios/axiosInstance";
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

export const postPillSettings = form => {
  return dispatch => {
    const updatedSettings = {
      pillsInPack: form.pillsInPack.value,
      amountOfPacks: form.amountOfPacks.value
    };
    blueMarble
      .post("/settings.json", updatedSettings)
      .then(res => console.log(res.data.name))
      .catch(error => console.log(error));
  };
};
