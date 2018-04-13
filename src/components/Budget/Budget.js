import React from 'react';
import { Text, View } from 'react-native';
import { AppStyles } from '../../styles';
import { NavBar } from '../ui';

const Budget = () => (
  <View style={ AppStyles.flex1 }>
    <NavBar
      title={{
        title: 'Rozpočet'
      }}
    />
    <Text style={{ fontSize:35, fontWeight: 'bold' }}>
      Čoskoro
    </Text>
  </View>
);


export default Budget;
