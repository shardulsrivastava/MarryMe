import React from 'react';
import { View, StatusBar } from 'react-native';
import { compose } from 'recompose';
import { connect } from 'react-redux';

// routes
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';

const withLogged = connect(state => ({
  logged: state.couple.status,
  //logged: false,
}));

const Layout = ({ logged }) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={ '#d6e5f3' }
        barStyle={ 'dark-content' }
      />
      { logged ? <SignedIn /> : <SignedOut /> }
    </View>
  );
};

export default compose(
  withLogged
)(Layout);

