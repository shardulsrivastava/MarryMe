import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { AppStyles, AppColors } from '../../styles';
import { NavBar } from '../ui';
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

// Components
import BudgetHeader from './BudgetHeader';
import BudgetModal from './BudgetModalHoc';
import SetBudgetModal from './SetBudgetModalHoc';

const value1 = 0;

const Budget = ({
  budgetModalVisible,
  setBudgetModalVisible,
  maxBudget,
  maxBudgetModalVisible,
  setMaxBudgetModalVisible,
}) => (
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
          <Icon name={ 'ios-add' } size={ 30 } color={ AppColors.app.black } />
        </TouchableOpacity>
      }
    />
    <View style={ AppStyles.flex1 }>
      <BudgetHeader
        value1={ value1 }
        value2={ maxBudget }
        setMaxBudget={ () => setMaxBudgetModalVisible(true) }
      />
    </View>
    <BudgetModal
      isVisible={ budgetModalVisible }
      closeModal={ () => setBudgetModalVisible(false) }
    />
    <SetBudgetModal
      isVisible={ maxBudgetModalVisible }
      closeModal={ () => setMaxBudgetModalVisible(false) }
    />
  </View>
);

BudgetModal.propTypes = { 
  budgetModalVisible: PropTypes.bool,
  setBudgetModalVisible: PropTypes.func,
  maxBudget: PropTypes.number,
  maxBudgetModalVisible: PropTypes.bool,
  setMaxBudgetModalVisible: PropTypes.func,
};

export default Budget;
