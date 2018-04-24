import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { AppStyles, AppColors } from '../../styles';
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

const BudgetListRow = ({ title, value }) => (
  <TouchableOpacity
    onPress={ () => null }
    activeOpacity={ 0.6 }
    style={ [
      AppStyles.simpleCard,
      { 
        backgroundColor: '#F0F0F0',
        marginTop: 10,
        marginHorizontal: 10,
      }
    ] }
  >
    <View style={ [
      AppStyles.row,
      { justifyContent: 'flex-end' }
    ] }>
      <TouchableOpacity>
        <Icon
          name={ 'ios-close' }
          size={ 30 }
        />
      </TouchableOpacity>
    </View>
    <View style={ [
      AppStyles.row,
      {
        justifyContent: 'space-between',
        paddingTop: 5,
      },
    ] }>
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
    </View>
  </TouchableOpacity>
);

BudgetListRow.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number,
};

export default BudgetListRow;
