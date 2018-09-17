import accountSettingsReducer from './accountSettingsReducer';
import alarmSettingsReducer from './alarmSettingsReducer';
import pillSettingsReducer from './pillSettingsReducer';
import pillReducer from './pillReducer';
import navigationStateReducer from './navigationStateReducer';
import authReducer from './authReducer';
import { combineReducers } from 'redux';
import * as actionTypes from '../actions/actionTypes';

const appReducer = combineReducers({
  accountSettings: accountSettingsReducer,
  alarmSettings: alarmSettingsReducer,
  pillSettings: pillSettingsReducer,
  pill: pillReducer,
  topNavigation: navigationStateReducer,
  auth: authReducer
});

//type these
const rootReducer = (state: any, action: any) => {
  if (action.type === actionTypes.AUTH_LOGOUT) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
