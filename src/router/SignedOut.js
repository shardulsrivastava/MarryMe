import React from 'react';
import { StackNavigator } from 'react-navigation';

// Components
import Login from '../components/Couple/Login/LoginHoc';
import Register from '../components/Couple/Registration/RegisterHoc';

const SignedOut = StackNavigator({
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register,
  },
}, {
  mode: 'modal',
  headerMode: 'none'
});

export default SignedOut;
