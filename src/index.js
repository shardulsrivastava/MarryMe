import React from 'react';
import { View, StatusBar, AppRegistry, AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { setAppReady } from '../src/store/actions';
import store from './store/store';
import Layout from './router/Layout';


persistStore(
  store,
  {
    storage: AsyncStorage,
    whitelist: [
      'couple',
      'app',
      'place',
      'date',
      'budget',
      'todo',
    ],
  },
  () => {
    store.dispatch(setAppReady())
  }
);

const App = ({ logged = false }) => {
  return (
    <Provider store={ store }>
      <Layout />
    </Provider>
  );
};

AppRegistry.registerComponent('MarryMe', () => App);