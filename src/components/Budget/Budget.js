import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { AppStyles, AppColors } from '../../styles';
import { NavBar } from '../ui';
import { Text, SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

// Components
import BudgetHeader from './BudgetHeader';
import BudgetModal from './BudgetModalHoc';
import SetBudgetModal from './SetBudgetModalHoc';
import BudgetListRow from './BudgetListRow';

const filterBudgets = (budgets, searchItem) => {
  if ( budgets && budgets.length > 0 ) {
    return budgets.filter((item) => {
      const search = String(searchItem).toLowerCase()
        .replace(/[\u0300-\u036f]/g, '');
      return String(item.budgetTitle).toLowerCase()
        .replace(/[\u0300-\u036f]/g, '')
        .includes(search);
    });
  }
};

const Budget = ({
  budgetModalVisible,
  setBudgetModalVisible,
  maxBudget,
  maxBudgetModalVisible,
  setMaxBudgetModalVisible,
  budgetData,
  budgetTotal,
  deleteItem,
  setFilter,
  searchBudgetItem,
}) => (
  <ScrollView style={ [
    AppStyles.flex1,
    { backgroundColor: AppColors.app.white, paddingBottom: 15 }
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
    <BudgetHeader
      value1={ budgetTotal }
      value2={ maxBudget }
      onChangeSearchText={ value => setFilter(value) }
      setMaxBudget={ () => setMaxBudgetModalVisible(true) }
    />
    <FlatList
      data={ filterBudgets(budgetData, searchBudgetItem) }
      ListEmptyComponent={ () => <Text h4 style={{ alignSelf: 'center', marginTop: 20 }}>Prázdny zoznam</Text> }
      //ListHeaderComponent={ () => () }
      keyExtractor={ budgetItem => budgetItem.id }
      renderItem={ budget => (<BudgetListRow
        title={ budget.item.budgetTitle }
        value={ budget.item.budgetValue }
        onPressDelete={ () => deleteItem({
          id: budget.item.id,
          value: budget.item.budgetValue,
        }) }
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
  </ScrollView>
);

Budget.propTypes = { 
  budgetModalVisible: PropTypes.bool,
  setBudgetModalVisible: PropTypes.func,
  maxBudget: PropTypes.number,
  maxBudgetModalVisible: PropTypes.bool,
  setMaxBudgetModalVisible: PropTypes.func,
  budgetData: PropTypes.array,
  budgetTotal: PropTypes.number,
  deleteItem: PropTypes.func,
  searchBudgetItem: PropTypes.string,
  setFilter: PropTypes.func,
};

export default Budget;
