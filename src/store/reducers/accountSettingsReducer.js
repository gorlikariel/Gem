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
        label: "Email"
      },
      value: "",
      touched: false,
      validation: {
        required: true,
        valid: false
      }
    }
  },
  initialized: false,
  isFormValid: false,
  loading: false,
  submitted: false,
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ACCOUNT_SETTINGS_CHANGED:
      return {
        ...state,
        form: action.form,
        isFormValid: action.isFormValid
      };

    case actionTypes.INIT_ACCOUNT_SETTINGS:
      return {
        ...state,
        form: {
          ...state.form,
          name: {
            ...state.form.name,
            elementConfig: { ...state.form.name.elementConfig },
            validation: { ...state.form.name.validation },
            value: action.settings.name
          },
          userName: {
            ...state.form.userName,
            elementConfig: { ...state.form.userName.elementConfig },
            validation: { ...state.form.userName.validation },
            value: action.settings.username
          },
          email: {
            ...state.form.email,
            elementConfig: { ...state.form.email.elementConfig },
            validation: { ...state.form.email.validation },
            value: action.settings.email
          }
        },
        loading: false,
        initialized: true
      };
    case actionTypes.SUBMIT_ACCOUNT_SETTINGS:
      return {
        ...state,
        loading: false
      };
    case actionTypes.LOADING_ACCOUNT_SETTINGS:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};
