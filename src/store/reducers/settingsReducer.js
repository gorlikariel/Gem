import * as actionTypes from "../actions/actionTypes";

const initialState = {
  settingsForm: {
    name: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Your Name"
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
        placeholder: "Your Street"
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
        placeholder: "Your Email"
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

    case actionTypes.PURCHASE_SUCCESS:
      return {
        ...state,
        loading: false,
        purchased: true
      };

    case actionTypes.PURCHASE_FAILED:
      return {
        ...state,
        loading: false,
        error: false
      };

    case actionTypes.START_PURCHASE:
      return {
        ...state,
        loading: true,
        error: false
      };

    case actionTypes.PURCHASE_INIT:
      return {
        ...state,
        purchased: false
      };

    case actionTypes.START_FETCHING_ORDERS:
      return {
        ...state,
        loading: true,
        error: false
      };

    case actionTypes.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.orders,
        loading: false,
        error: false
      };

    case actionTypes.FETCH_ORDERS_FAILED:
      return {
        ...state,
        loading: false,
        error: true
      };

    default:
      return state;
  }
};
