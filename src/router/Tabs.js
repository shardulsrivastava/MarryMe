import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppColors } from '../styles';
import { Platform } from 'react-native';

// Components
import Home from '../components/Home/HomeHoc';
import Budget from '../components/Budget/Budget';
import EventList from '../components/EventList/EventList';

const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Domov',
      tabBarIcon: ({ focused, tintColor }) => <Icon
        color={ tintColor }
        size={ 25 }
        name={ focused ? 'ios-home' : 'ios-home-outline' } />,
    }),
  },
  Budget: {
    screen: Budget,
    navigationOptions: ({ navigation }) => ({
      title: 'Rozpočet',
      tabBarIcon: ({ focused, tintColor }) => <Icon
        color={ tintColor }
        size={ 25 }
        name={ focused? 'md-card' : 'ios-card-outline' } />
    }),
  },
  EventList: {
    screen: EventList,
    navigationOptions: ({ navigation }) => ({
      title: 'Zoznam',
      tabBarIcon: ({ focused, tintColor }) => <Icon
        color={ tintColor }
        size={ 25 }
        name={ focused ? 'md-list-box' : 'ios-list-box-outline' } />
    }),
  },
}, {
  tabBarOptions: {
    style: {
      backgroundColor: Platform.OS === 'ios' ? 'transparent'
      : AppColors.app.white,
      borderTopWidth: 0,
      height: 50,
    },
    tabStyle: {
      height: 50,
      opacity: 1,
    },
    indicatorStyle: {
      height: 0,
    },
    activeTintColor: AppColors.app.black,
    inactiveTintColor: 'gray',
    showIcon: true,
    showLabel: false,
  },
  lazy: true,
  swipeEnabled: true,
  animationEnabled: true,
  tabBarPosition: 'bottom',
});

export default Tabs;
