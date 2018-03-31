import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';

// Components
import Home from '../components/Home';
import Profile from '../components/User/Profile/Profile';

const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home'
    }),
  },
  Profile: {
    screen: Profile,
    navigationOptions: ( navigation ) => ({
      title: 'Profile'
    }),
  },
}, {
  lazy: true,
  swipeEnabled: true,
  animationEnabled: true,
  tabBarPosition: 'bottom',
});

export default Tabs;
