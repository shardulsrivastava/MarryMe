import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';
import { AppStyles, AppColors } from '../../styles';
import { NavBar } from '../ui';
import Icon from 'react-native-vector-icons/Ionicons';

// Components
import AddToListModal from './AddToListModalHoc';

const EventList = ({
  listModalVisible,
  setListModalVisible,
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
    <View
      style={ [
        AppStyles.flex1,
        { alignItems: 'center', justifyContent: 'center' }
      ] }
    >
      <Text style={{ fontSize:35, fontWeight: 'bold' }}>
        Čoskoro
      </Text>
    </View>

    <AddToListModal
      isVisible={ listModalVisible }
      closeModal={ () => setListModalVisible(false) }
    />
  </View>
);

EventList.propTypes = { 
  listModalVisible: PropTypes.bool,
  setListModalVisible: PropTypes.func,
};


export default EventList;
