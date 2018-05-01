import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { AppStyles, AppColors } from '../../styles';
import { NavBar } from '../ui';
import Icon from 'react-native-vector-icons/Ionicons';

// Components
import AddToListModal from './AddToListModalHoc';
import EventListRow from './EventListRow';

const EventList = ({
  listModalVisible,
  setListModalVisible,
  todoData,
  deleteItem,
}) => (
  <View style={ [
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
    <FlatList
      data={ todoData }
      ListEmptyComponent={ () => <Text h4 style={{ alignSelf: 'center', marginTop: 20 }}>Prázdny zoznam</Text> }
      keyExtractor={ todoItem => todoItem.id }
      renderItem={ todo => (<EventListRow
        createdAt={ todo.item.createdat }
        title={ todo.item.text }
        onPressDelete={ () => deleteItem({ id: todo.item.id }) }
      />) }
      style={ AppStyles.flex1 }
    />

    <AddToListModal
      isVisible={ listModalVisible }
      closeModal={ () => setListModalVisible(false) }
    />
  </View>
);

EventList.propTypes = { 
  listModalVisible: PropTypes.bool,
  setListModalVisible: PropTypes.func,
  todoData: PropTypes.array,
  deleteItem: PropTypes.func,
};


export default EventList;
