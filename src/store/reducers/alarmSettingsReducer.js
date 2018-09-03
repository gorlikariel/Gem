import * as actionTypes from "../actions/actionTypes";

const initialState = {
  form: {
    pillHour: {
      elementType: "input",
      elementConfig: {
        type: "time",
        label: "Pill hour"
      },
      value: "",
      touched: false,
      validation: {
        required: true,
        valid: false
      }
    },
    snoozeEvery: {
      elementType: "input",
      elementConfig: {
        type: "number",
        label: "Snooze every"
      },
      value: "",
      touched: false,
      validation: {
        required: true,
        valid: false,
        isNumeric: true
      }
    }
  },
  initialized: false,
  isFormValid: false,
  isFormFilled: false,
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

    case actionTypes.INIT_ALARM_SETTINGS:
      return {
        ...state,
        form: {
          ...state.form,
          pillHour: {
            ...state.form.pillHour,
            elementConfig: { ...state.form.pillHour.elementConfig },
            validation: { ...state.form.pillHour.validation },
            value: action.settings.pillhour
          },
          snoozeEvery: {
            ...state.form.snoozeEvery,
            elementConfig: { ...state.form.snoozeEvery.elementConfig },
            validation: { ...state.form.snoozeEvery.validation },
            value: action.settings.snoozeevry
          }
        },
        loading: false,
        isFormFilled: action.settings.snoozeevry && action.settings.pillhour,
        initialized: true
      };
    case actionTypes.SUBMIT_ALARM_SETTINGS:
      return {
        ...state,
        loading: false
      };
    case actionTypes.LOADING_ALARM_SETTINGS:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};
