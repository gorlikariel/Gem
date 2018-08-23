import * as actionTypes from "../actions/actionTypes";

const initialState = {
  form: {
    pillsInPack: {
      elementType: "input",
      elementConfig: {
        type: "number",
        label: "Pills in pack"
      },
      value: "28",
      touched: false,
      validation: {
        required: true,
        valid: false
      }
    },
    amountOfPacks: {
      elementType: "input",
      elementConfig: {
        type: "number",
        label: "Amount of packs"
      },
      value: "2",
      touched: false,
      validation: {
        required: true,
        valid: false
      }
    }
  },
  notifyWhenPillsRunOut: false,
  isFormValid: false,
  loading: false,
  submitted: false,
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PILL_SETTINGS_CHANGED:
      return {
        ...state,
        form: action.form,
        isFormValid: action.isFormValid
      };

    default:
      return state;
  }
};
