import * as actionTypes from '../actions/actionTypes';

const initialState = {
  form: {
    pillsInPack: {
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
    amountOfPacks: {
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

    case actionTypes.INIT_PILL_SETTINGS:
      return {
        ...state,
        form: {
          ...state.form,
          pillsInPack: {
            ...state.form.pillsInPack,
            elementConfig: { ...state.form.pillsInPack.elementConfig },
            validation: { ...state.form.pillsInPack.validation },
            value: action.settings.pillsinpack
          },
          amountOfPacks: {
            ...state.form.amountOfPacks,
            elementConfig: { ...state.form.amountOfPacks.elementConfig },
            validation: { ...state.form.amountOfPacks.validation },
            value: action.settings.amountofpacks
          }
        },
        notifyWhenPillsRunOut: action.settings.notifymewhenpillsrunout,
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
