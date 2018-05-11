import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { AppStyles, AppColors } from '../../styles';
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

const BudgetListRow = ({ title, value, onPressDelete }) => (
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
      { justifyContent: 'space-between', alignItems: 'center' },
    ] }
    >
      <View style={{ flex: 1, marginRight: 5 }}>
        <Text
          style={{ fontSize: 16, color: AppColors.app.black }}
        >
          { title } 
        </Text>
      </View>
      <View style={ [
        AppStyles.row,
        { alignItems: 'center', justifyContent: 'space-between' }
      ]}
      >
        <View
          style={{
            backgroundColor: '#B2EBF2',
            paddingVertical: 5,
            paddingHorizontal: 15,
            borderRadius: 50,
          }}
        >
          <Text
            style={{ fontSize: 18, fontWeight: 'bold', color: AppColors.app.black }}
          >
            { `${value}€` } 
          </Text>
        </View>
        <TouchableOpacity
          style={{ paddingLeft: 10 }}
          onPress={ onPressDelete }
        >
          <Icon
            name={ 'ios-close' }
            size={ 28 }
            style={{ color: '#EF5350' }}
          />
        </TouchableOpacity>
      </View>
    </View>
  </TouchableOpacity>
);

BudgetListRow.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number,
  onPressDelete: PropTypes.func,
};

export default BudgetListRow;
