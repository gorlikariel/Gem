import * as actionTypes from "./actionTypes";

export const setTopNavigationState = config => {
  return {
    type: actionTypes.SET_TOP_NAVIGATION_STATE,
    config: config
  };
};
