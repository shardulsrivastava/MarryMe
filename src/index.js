import React from 'react';
import { View, StatusBar, AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import store from './store/store';

// routes
import SignedIn from './router/SignedIn';
import SignedOut from './router/SignedOut';

const App = ({ userLogged = false }) => {
  return (
    <Provider store={ store }>
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle={ 'dark-content' }
        />
        { userLogged ? <SignedIn /> : <SignedOut /> }
      </View>
    </Provider>
  );
};

AppRegistry.registerComponent('RnApp', () => App);