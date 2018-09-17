import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers/rootReducer';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
);
export const dispatch = store.dispatch;
export default store;
