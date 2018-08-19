import * as actionTypes from "../actions/actionTypes";

const initialState = {
  form: {
    pillHour: {
      elementType: "input",
      elementConfig: {
        type: "time",
        label: "Pill hour"
      },
      value: "18:00",
      touched: false,
      validation: {
        required: true,
        valid: false
      }
    },
    snoozeEvery: {
      elementType: "input",
      elementConfig: {
        type: "text",
        label: "Snooze every"
      },
      value: "5 Minutes",
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
    case actionTypes.ALARM_SETTINGS_CHANGED:
      return {
        ...state,
        form: action.form,
        isFormValid: action.isFormValid
      };

    default:
      return state;
  }
};
