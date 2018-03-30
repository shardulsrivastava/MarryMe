import React from 'react';
import { StackNavigator } from 'react-navigation';

// Components
import Tabs from './Tabs';

const SignedIn = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
});

export default SignedIn;
