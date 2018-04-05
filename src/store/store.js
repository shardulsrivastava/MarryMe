import { createStore, combineReducers, compose } from 'redux';
import { autoRehydrate } from 'redux-persist';
import { coupleReducer, initReducer, placeReducer } from './reducers';

export default createStore(
  combineReducers({
    app: initReducer,
    couple: coupleReducer,
    place: placeReducer,
  }),
  {},
  compose(
    autoRehydrate(),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);
