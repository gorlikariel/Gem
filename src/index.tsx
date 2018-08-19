import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import accountSettingsReducer from "./store/reducers/accountSettingsReducer";
import alarmSettingsReducer from "./store/reducers/alarmSettingsReducer";
import pillSettingsReducer from "./store/reducers/pillSettingsReducer";
import * as firebase from "firebase";
const config = {
  apiKey: "AIzaSyBq_VbcsnwxgnTS05jOWVeqMhgNI40J1rU",
  authDomain: "bluemarble-a4f07.firebaseapp.com",
  databaseURL: "https://bluemarble-a4f07.firebaseio.com",
  projectId: "bluemarble-a4f07",
  storageBucket: "bluemarble-a4f07.appspot.com",
  messagingSenderId: "1048550758125"
};
firebase.initializeApp(config);
const rootReducer = combineReducers({
  accountSettings: accountSettingsReducer,
  alarmSettings: alarmSettingsReducer,
  pillSettings: pillSettingsReducer
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
