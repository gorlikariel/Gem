import * as actionTypes from "../actions/actionTypes";

const initialState = {
  form: {
    name: {
      elementType: "input",
      elementConfig: {
        type: "text",
        label: "Name"
      },
      value: "",
      touched: false,
      validation: {
        required: true,
        valid: false
      }
    },
    userName: {
      elementType: "input",
      elementConfig: {
        type: "text",
        label: "Username"
      },
      value: "",
      touched: false,
      validation: {
        required: true,
        valid: false
      }
    },
    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        label: "Email address"
      },
      value: "",
      touched: false,
      validation: {
        required: true,
        valid: false
      }
    }
  },
  isFormValid: false,
  loading: false,
  submitted: false,
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FORM_CHANGED:
      return {
        ...state,
        settingsForm: action.form,
        isFormValid: action.isFormValid
      };

    
    default:
      return state;
  }
};
