import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
// import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import BurgerBuilderReducer from "./store/reducers/BurgerBuilderReducer";
// import ContactDataReducer from "./store/reducers/ContactDataReducer";
// import thunk from "redux-thunk";
// import AuthReducer from "./store/reducers/AuthReducer";

// const rootReducer = combineReducers({
//   builder: BurgerBuilderReducer,
//   form: ContactDataReducer,
//   auth: AuthReducer
// });

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );
const app = (
  // <Provider store={store}>
  // <BrowserRouter>
  <App />
  // </BrowserRouter>
  // </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
