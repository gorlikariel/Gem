import * as actionTypes from "./actionTypes";

export const formChanged = (form, isFormValid) => {
  return {
    type: actionTypes.FORM_CHANGED,
    form: form,
    isFormValid: isFormValid
  };
};
const newForm = (event, inputIdentifier, accountSettingsForm) => {
  const updatedaccountSettingsForm = {
    ...accountSettingsForm
  };
  const updatedFormElement = {
    ...updatedaccountSettingsForm[inputIdentifier]
  };
  updatedFormElement.touched = true;
  updatedFormElement.value = event.target.value;
  updatedFormElement.validation.valid = checkValidity(
    updatedFormElement.value,
    updatedFormElement.validation
  );
  updatedaccountSettingsForm[inputIdentifier] = updatedFormElement;

  return updatedaccountSettingsForm;
};
const formValidity = form => {
  let formIsValid = false;

  for (let inputIdentifier in form) {
    formIsValid = form[inputIdentifier].validation.valid;
    if (!formIsValid) {
      break;
    }
  }
  return formIsValid;
};
function checkValidity(value, rules) {
  let isValid = true;
  if (rules.required) {
    isValid = value.trim() !== "" && isValid;
  }
  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }
  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }
  if (rules.absoluteLength) {
    isValid = value.length == rules.absoluteLength && isValid;
  }

  return isValid;
}

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
