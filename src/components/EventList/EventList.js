import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, FlatList } from 'react-native';
import { AppStyles, AppColors } from '../../styles';
import { NavBar } from '../ui';
import { Text, SearchBar, ButtonGroup } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

// Components
import AddToListModal from './AddToListModalHoc';
import EventListRow from './EventListRow';

const filterTodos = (todos, searchTodo, btnIndex) => {
  if ( todos && todos.length > 0 ) {
    return todos.filter((item) => {
      const search = String(searchTodo).toLowerCase()
        .replace(/[\u0300-\u036f]/g, '');
      return String(item.text).toLowerCase()
        .replace(/[\u0300-\u036f]/g, '')
        .includes(search);
    });
  }
};

const buttons = ['Nedokončené', 'Hotové'];

const EventList = ({
  listModalVisible,
  setListModalVisible,
  todoData,
  deleteItem,
  toogleItem,
  searchTodo,
  setFilter,
  btnGroupState,
  setBtnGroupState,
}) => {
  const doneTodos = todoData.filter(item => item.completed === true);
  const unfinishedTodos = todoData.filter(item => item.completed === false);

  return (<View style={ [
    AppStyles.flex1,
    { backgroundColor: AppColors.app.white }
  ] }>
    <NavBar
      title={{
        title: 'Zoznam úloh'
      }}
      rightButton={
        <TouchableOpacity
          activeOpacity={ 0.6 }
          style={{
            alignSelf: 'center',
            paddingHorizontal: 20,
          }}
          onPress={ () => setListModalVisible(true) }
        >
          <Icon name={ 'ios-add' } size={ 30 } color={ AppColors.app.black } />
        </TouchableOpacity>
      }
    />
    <SearchBar
      lightTheme
      inputStyle={{ backgroundColor: '#F9F9F9', color: '#666666' }}
      onChangeText={ value => setFilter(value) }
      placeholder={ 'Vyhľadať položku' }
    />
    <ButtonGroup
      onPress={ index => setBtnGroupState({ ...btnGroupState, index }) }
      selectedIndex={ btnGroupState.index }
      buttons={ buttons }
    />
    {btnGroupState.index === 0 ? <FlatList
      data={ filterTodos(unfinishedTodos, searchTodo, btnGroupState.index) }
      ListEmptyComponent={ () => <Text h4 style={{ alignSelf: 'center', marginTop: 20 }}>Prázdny zoznam</Text> }
      keyExtractor={ todoItem => todoItem.id }
      renderItem={ todo => (<EventListRow
        createdAt={ todo.item.createdat }
        text={ todo.item.text }
        status={ todo.item.completed }
        changeStatus={ () => toogleItem({ id: todo.item.id }) }
        onPressDelete={ () => deleteItem({ id: todo.item.id }) }
      />) }
      style={ AppStyles.flex1 }
      /> : <FlatList
      data={ filterTodos(doneTodos, searchTodo, btnGroupState.index) }
      ListEmptyComponent={ () => <Text h4 style={{ alignSelf: 'center', marginTop: 20 }}>Prázdny zoznam</Text> }
      keyExtractor={ todoItem => todoItem.id }
      renderItem={ todo => (<EventListRow
        createdAt={ todo.item.createdat }
        text={ todo.item.text }
        status={ todo.item.completed }
        changeStatus={ () => toogleItem({ id: todo.item.id }) }
        onPressDelete={ () => deleteItem({ id: todo.item.id }) }
      />) }
      style={ AppStyles.flex1 }
      /> }
    

    <AddToListModal
      isVisible={ listModalVisible }
      closeModal={ () => setListModalVisible(false) }
    />
  </View>);
};

EventList.propTypes = { 
  listModalVisible: PropTypes.bool,
  setListModalVisible: PropTypes.func,
  todoData: PropTypes.array,
  deleteItem: PropTypes.func,
  toogleItem: PropTypes.func,
  searchTodo: PropTypes.string,
  setFilter: PropTypes.func,
  btnGroupState: PropTypes.object,
  setBtnGroupState: PropTypes.func,
};


export default EventList;
