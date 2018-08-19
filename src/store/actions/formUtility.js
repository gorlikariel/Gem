export const newForm = (event, inputIdentifier, Form) => {
  console.log(Form[inputIdentifier]);
  const updatedForm = {
    ...Form
  };
  const updatedFormElement = {
    ...updatedForm[inputIdentifier],
    // elementConfig: { ...updatedForm[inputIdentifier].elementConfig },
    // validation: { ...updatedForm[inputIdentifier].validation },
    touched: true,
    value: event.target.value
  };
  console.log(updatedFormElement);
  //   updatedFormElement.touched = true;
  //   updatedFormElement.value = event.target.value;
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
