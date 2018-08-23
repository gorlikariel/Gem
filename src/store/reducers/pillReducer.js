import * as actionTypes from "../actions/actionTypes";
import * as util from "../../firebaseUtil/firebaseUtil";

const initialState = {
  taken: false,
  hourOfTaking: "00:00",
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TAKE_PILL:
      return {
        ...state,
        taken: true,
        hourOfTaking: util.HOUR_STAMP,
        loading: false
      };
    case actionTypes.LOADING_PILL_BUTTON:
      return {
        ...state,
        loading: true
      };
    case actionTypes.INIT_PILL_BUTTON:
      return {
        ...state,
        taken: action.isPillTaken,
        loading: false
      };

    default:
      return state;
  }
};
