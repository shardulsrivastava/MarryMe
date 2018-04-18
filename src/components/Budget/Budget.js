import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { AppStyles, AppColors } from '../../styles';
import { NavBar } from '../ui';
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

// Components
import BudgetHeader from './BudgetHeader';
import BudgetModal from './BudgetModal';

const value1 = 150;
const value2 = 3000;

const Budget = ({ budgetModalVisible, setBudgetModalVisible }) => (
  <View style={ [
    AppStyles.flex1,
    { backgroundColor: AppColors.app.white }
  ] }>
    <NavBar
      title={{
        title: 'Rozpočet'
      }}
      rightButton={
        <TouchableOpacity
          activeOpacity={ 0.6 }
          style={{
            alignSelf: 'center',
            paddingHorizontal: 20,
          }}
          onPress={ () => setBudgetModalVisible(true) }
        >
          <Icon name={ 'ios-settings-outline' } size={ 25 } color={ AppColors.app.black } />
        </TouchableOpacity>
      }
    />
    <View style={ AppStyles.flex1 }>
      <BudgetHeader
        value1={ value1 }
        value2={ value2 }
      />
    </View>
    <BudgetModal
      isVisible={ budgetModalVisible }
      closeModal={ () => setBudgetModalVisible(false) }
    />
  </View>
);

BudgetModal.propTypes = { 
  budgetModalVisible: PropTypes.bool,
  setBudgetModalVisible: PropTypes.func,
};

export default Budget;
