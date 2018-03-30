import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

// routes
import SignedIn from './router/SignedIn';
import SignedOut from './router/SignedOut';

const App = ({ userLogged = false }) => (
  <View style={{ flex: 1 }}>
    <StatusBar
      barStyle={ 'dark-content' }
    />
    { userLogged ? <SignedIn /> : <SignedOut /> }
  </View>
);

 export default App;