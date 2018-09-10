import * as actionTypes from '../actions/actionTypes';
const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  initialized: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        error: null,
        loading: true
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        error: null,
        loading: false
      };
    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        error: false,
        loading: false,
        token: null,
        userId: null
      };

    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      };

    default:
      return state;
  }
};
