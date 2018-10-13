export const newForm = (event, inputIdentifier, Form) => {
  const updatedForm = {
    ...Form
  };
  const updatedFormElement = {
    ...updatedForm[inputIdentifier],
    touched: true,
    value: event.target.value
  };
  updatedFormElement.validation.valid = checkValidity(
    updatedFormElement.value,
    updatedFormElement.validation
  );
  updatedForm[inputIdentifier] = updatedFormElement;

  return updatedForm;
};

const checkValidity = (value, rules) => {
  let isValid = true;
  if (rules.required) {
    isValid = value.trim() !== '' && isValid;
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
  if (rules.isEmail) {
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(String(value).toLowerCase());
  }

  return isValid;
};
export const formValidity = form => {
  let formIsValid = false;

  for (let inputIdentifier in form) {
    formIsValid = form[inputIdentifier].validation.valid;
    if (!formIsValid) {
      break;
    }
  }
  return formIsValid;
};

export const formatErrorMessage = message =>
  message.toLowerCase().replace(/_/g, ' ');

export const formToKeyValuePairs = form => {
  let newForm = { ...form };
  for (const key in newForm) {
    key === 'password'
      ? delete newForm.password
      : (newForm[key] = newForm[key].value);
  }
  return newForm;
};
