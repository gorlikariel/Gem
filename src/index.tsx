import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import accountSettingsReducer from "./store/reducers/accountSettingsReducer";
import alarmSettingsReducer from "./store/reducers/alarmSettingsReducer";
import pillSettingsReducer from "./store/reducers/pillSettingsReducer";

const rootReducer = combineReducers({
  accountSettings: accountSettingsReducer,
  alarmSettings: alarmSettingsReducer,
  pillSettings: pillSettingsReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const app = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
