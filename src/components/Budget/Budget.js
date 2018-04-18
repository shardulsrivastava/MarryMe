import React from 'react';
import { View } from 'react-native';
import { AppStyles, AppColors } from '../../styles';
import { NavBar } from '../ui';
import { Text } from 'react-native-elements';

// Components
import BudgetHeader from './BudgetHeader';

const value1 = 150;
const value2 = 3000;

const Budget = () => (
  <View style={ AppStyles.flex1 }>
    <NavBar
      title={{
        title: 'Rozpočet'
      }}
    />
    <View style={ AppStyles.flex1 }>
      <BudgetHeader
        value1={ value1 }
        value2={ value2 }
      />
    </View>
  </View>
);


export default Budget;
