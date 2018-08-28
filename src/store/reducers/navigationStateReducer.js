import * as actionTypes from "../actions/actionTypes";
import * as util from "../../firebaseUtil/firebaseUtil";

const initialState = {
  showLeftArrow: null,
  showSubmit: null,
  showSettingsIcon: null,
  title: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TOP_NAVIGATION_STATE:
      return {
        ...state,
        showLeftArrow: action.config.showLeftArrow,
        showSubmit: action.config.showSubmit,
        showSettingsIcon: action.config.showSettingsIcon,
        title: action.config.title
      };

    default:
      return state;
  }
};
