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
      tabBarIcon: ({ tintColor }) => <Icon color={ tintColor } size={ 25 } name={ 'ios-home' } />,
    }),
  },
  Budget: {
    screen: Budget,
    navigationOptions: ({ navigation }) => ({
      title: 'Rozpočet',
      tabBarIcon: ({ tintColor }) => <Icon color={ tintColor } size={ 25 } name={ 'md-card' } />
    }),
  },
  EventList: {
    screen: EventList,
    navigationOptions: ({ navigation }) => ({
      title: 'Zoznam',
      tabBarIcon: ({ tintColor }) => <Icon color={ tintColor } size={ 25 } name={ 'md-list-box' } />
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
    activeTintColor: AppColors.brand.yellow,
    inactiveTintColor: 'gray',
  },
  lazy: true,
  swipeEnabled: true,
  animationEnabled: true,
  tabBarPosition: 'bottom',
  showIcon: true,
  showLabel: true
});

export default Tabs;
