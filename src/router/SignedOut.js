import React from 'react';
import { StackNavigator } from 'react-navigation';

// Components
import Login from '../components/Couple/Login/LoginHoc';

const SignedOut = StackNavigator({
  Login: {
    screen: Login,
  },
}, {
  mode: 'modal',
  headerMode: 'none'
});

export default SignedOut;
