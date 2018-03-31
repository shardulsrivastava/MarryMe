import { createStore, combineReducers, compose } from 'redux';
import { autoRehydrate } from 'redux-persist';
import { userReducer } from './reducers';

export default createStore(
  combineReducers({
    user: userReducer,
  }),
  {},
  compose(
    //autoRehydrate(),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);