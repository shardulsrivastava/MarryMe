import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, FlatList } from 'react-native';
import { AppStyles, AppColors } from '../../styles';
import { NavBar } from '../ui';
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

// Components
import BudgetHeader from './BudgetHeader';
import BudgetModal from './BudgetModalHoc';
import SetBudgetModal from './SetBudgetModalHoc';
import BudgetListRow from './BudgetListRow';

const Budget = ({
  budgetModalVisible,
  setBudgetModalVisible,
  maxBudget,
  maxBudgetModalVisible,
  setMaxBudgetModalVisible,
  budgetData,
  budgetTotal,
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
    <FlatList
      data={ budgetData }
      ListEmptyComponent={ () => <Text h4 style={{ alignSelf: 'center', marginTop: 20 }}>Prázdny zoznam</Text> }
      ListHeaderComponent={ () => (<BudgetHeader
        value1={ budgetTotal }
        value2={ maxBudget }
        setMaxBudget={ () => setMaxBudgetModalVisible(true) }
      />) }
      keyExtractor={ budgetItem => budgetItem.id }
      renderItem={ budget => (<BudgetListRow
        title={ budget.item.budgetTitle }
        value={ budget.item.budgetValue }
      />) }
      style={ AppStyles.flex1 }
    />
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

Budget.propTypes = { 
  budgetModalVisible: PropTypes.bool,
  setBudgetModalVisible: PropTypes.func,
  maxBudget: PropTypes.number,
  maxBudgetModalVisible: PropTypes.bool,
  setMaxBudgetModalVisible: PropTypes.func,
  budgetData: PropTypes.array,
  budgetTotal: PropTypes.number,
};

export default Budget;
