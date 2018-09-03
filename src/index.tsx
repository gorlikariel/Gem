import App from "./App";
import * as React from "react";
import reduxThunk from "redux-thunk";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import pillReducer from "./store/reducers/pillReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware } from "redux";
import pillSettingsReducer from "./store/reducers/pillSettingsReducer";
import alarmSettingsReducer from "./store/reducers/alarmSettingsReducer";
import navigationStateReducer from "./store/reducers/navigationStateReducer";
import accountSettingsReducer from "./store/reducers/accountSettingsReducer";
import authReducer from "./store/reducers/authReducer";

const rootReducer = combineReducers({
  accountSettings: accountSettingsReducer,
  alarmSettings: alarmSettingsReducer,
  pillSettings: pillSettingsReducer,
  pill: pillReducer,
  topNavigation: navigationStateReducer,
  auth: authReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

const app = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
//init store in another file
