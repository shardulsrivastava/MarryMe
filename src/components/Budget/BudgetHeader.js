import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { AppStyles, AppColors } from '../../styles';
import { NavBar } from '../ui';
import { Text } from 'react-native-elements';

const BudgetHeader = ({ value1, value2 }) => (
  <View style={ AppStyles.row }>
    <View style={{
      backgroundColor:'#A8EFEB',
      flex: 1,
      alignItems: 'center'
    }}>
      <Text style={{ padding: 10, fontSize: 17, fontWeight: 'bold' }}>
        MINUTÉ
      </Text>
      <View style={{
        backgroundColor:'#7ae2db',
        width: '100%',
        alignItems: 'center'
      }}>
        <Text style={{
          color: AppColors.app.black,
          fontSize: 20,
          padding: 20,
          fontWeight: '300'
        }}>
          { `${value1}€` }
        </Text>
      </View>
    </View>
    <View style={{ backgroundColor:'#4f4f51', flex: 1, alignItems: 'center' }}>
      <Text style={{
        padding: 10,
        fontSize: 17,
        fontWeight: 'bold',
        color: AppColors.app.white
      }}>
        ROZPOČET
      </Text>
      <View style={{ backgroundColor: '#313132', width: '100%', alignItems: 'center' }}>
        <Text style={{
          color: AppColors.app.white,
          fontSize: 20,
          padding: 20,
          fontWeight: '300'
        }}>
          { `${value2}€` }
        </Text>
      </View>
    </View>
      </View>
);

BudgetHeader.propTypes = {
  value1: PropTypes.number,
  value2: PropTypes.number,
};

export default BudgetHeader;
