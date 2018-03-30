import React from 'react';
import { StackNavigator } from 'react-navigation';

// Components
import Login from '../components/Login/LoginHoc';
import Register from '../components/Registration/RegisterHoc';

const SignedOut = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
  Register: {
    screen: Register,
    navigationOptions: ({ navigation }) => ({
      title: 'Registruj sa',
    }),
  },
});

export default SignedOut;
