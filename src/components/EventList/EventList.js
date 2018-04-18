import React from 'react';
import { Text, View } from 'react-native';
import { AppStyles, AppColors } from '../../styles';
import { NavBar } from '../ui';

const EventList = () => (
  <View style={ [
    AppStyles.flex1,
    { backgroundColor: AppColors.app.white }
  ] }>
    <NavBar
      title={{
        title: 'Zoznam úloh'
      }}
    />
    <View
      style={ [
        AppStyles.flex1,
        { alignItems: 'center', justifyContent: 'center' }
      ] }
    >
      <Text style={{ fontSize:35, fontWeight: 'bold' }}>
        Čoskoro
      </Text>
    </View>
  </View>
);


export default EventList;
