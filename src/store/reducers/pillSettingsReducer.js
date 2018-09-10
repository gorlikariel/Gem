import * as actionTypes from '../actions/actionTypes';

const initialState = {
  form: {
    pillsinpack: {
      elementType: 'input',
      elementConfig: {
        type: 'number',
        label: 'Pills in pack'
      },
      value: '',
      touched: false,
      validation: {
        required: true,
        valid: false,
        isNumeric: true
      }
    },
    amountofpacks: {
      elementType: 'input',
      elementConfig: {
        type: 'number',
        label: 'Amount of packs'
      },
      value: '',
      touched: false,
      validation: {
        required: true,
        valid: false,
        isNumeric: true
      }
    }
  },
  initialized: false,
  notifywhenpillsrunout: false,
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

    case actionTypes.INIT_PILL_SETTINGS:
      return {
        ...state,
        form: {
          ...state.form,
          pillsinpack: {
            ...state.form.pillsinpack,
            elementConfig: { ...state.form.pillsinpack.elementConfig },
            validation: { ...state.form.pillsinpack.validation },
            value: action.settings.pillsinpack
          },
          amountofpacks: {
            ...state.form.amountofpacks,
            elementConfig: { ...state.form.amountofpacks.elementConfig },
            validation: { ...state.form.amountofpacks.validation },
            value: action.settings.amountofpacks
          }
        },
        notifywhenpillsrunout: action.settings.notifymewhenpillsrunout,
        loading: false,
        initialized: true
      };
    case actionTypes.SUBMIT_PILL_SETTINGS:
      return {
        ...state,
        loading: false
      };
    case actionTypes.LOADING_PILL_SETTINGS:
      return {
        ...state,
        loading: true
      };
    case actionTypes.CLEAR_PILL_SETTINGS:
      return {
        ...initialState
      };

    default:
      return state;
  }
};
