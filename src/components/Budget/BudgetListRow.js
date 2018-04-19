import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { AppStyles, AppColors } from '../../styles';
import { Text } from 'react-native-elements';

const BudgetListRow = ({ title, value }) => (
  <TouchableOpacity
    onPress={ () => null }
    activeOpacity={ 0.6 }
    style={ [
      AppStyles.simpleCard,
      AppStyles.row,
      {
        marginTop: 10,
        marginHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
      }
    ] }
  >
    <Text
      style={{ fontSize: 16, color: AppColors.app.black }}
    >
      { title } 
    </Text>
    <Text
      style={{ fontSize: 18, fontWeight: 'bold', color: AppColors.app.black }}
    >
      { `${value}€` } 
    </Text>
  </TouchableOpacity>
);

BudgetListRow.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number,
};

export default BudgetListRow;
