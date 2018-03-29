import React from 'react';
import { StackNavigator } from 'react-navigation';

// Components
import Home from '../components/Tabs/Home';
import Tabs from './Tabs';

export const SignedIn = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home'
    }),
  },
});

