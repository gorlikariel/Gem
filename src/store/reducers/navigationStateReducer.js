import * as actionTypes from '../actions/actionTypes';
import * as util from '../../util/firebaseUtil';

const initialState = {
  showLeftArrow: null,
  showSubmit: null,
  showSettingsIcon: null,
  title: null,
  backOnClick: null,
  onSubmit: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TOP_NAVIGATION_STATE:
      return {
        ...state,
        showLeftArrow: action.config.showLeftArrow,
        showSubmit: action.config.showSubmit,
        showSettingsIcon: action.config.showSettingsIcon,
        title: action.config.title,
        backOnClick: action.config.backOnClick,
        onSubmit: action.config.onSubmit
      };

    default:
      return state;
  }
};
