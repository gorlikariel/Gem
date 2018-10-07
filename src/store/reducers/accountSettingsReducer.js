import * as actionTypes from '../actions/actionTypes';

const initialState = {
  form: {
    name: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        label: 'Name'
      },
      value: '',
      touched: false,
      validation: {
        required: true,
        valid: false
      }
    },
    username: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        label: 'Username'
      },
      value: '',
      touched: false,
      validation: {
        required: true,
        valid: false
      }
    },
    email: {
      elementType: 'input',
      elementConfig: {
        type: 'email',
        label: 'Email'
      },
      value: '',
      touched: false,
      validation: {
        required: true,
        valid: false,
        isEmail: true
      }
    },
    password: {
      elementType: 'input',
      elementConfig: {
        type: 'password',
        label: 'Password'
      },
      value: '',
      touched: false,
      validation: {
        required: true,
        valid: false,
        minLength: 6,
        maxLength: 15
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
          username: {
            ...state.form.username,
            elementConfig: { ...state.form.username.elementConfig },
            validation: { ...state.form.username.validation },
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
    case actionTypes.CLEAR_ACCOUNT_SETTINGS:
      return {
        ...initialState
      };

    default:
      return state;
  }
};
