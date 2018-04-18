import { createStore, combineReducers, compose } from 'redux';
import { autoRehydrate } from 'redux-persist';
import {
  coupleReducer,
  initReducer,
  placeReducer,
  dateReducer,
  budgetReducer,
} from './reducers';

export default createStore(
  combineReducers({
    app: initReducer,
    couple: coupleReducer,
    place: placeReducer,
    date: dateReducer,
    budget: budgetReducer,
  }),
  {},
  compose(
    autoRehydrate(),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);
