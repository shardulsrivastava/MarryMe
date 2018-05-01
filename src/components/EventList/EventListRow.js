import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { AppStyles, AppColors } from '../../styles';
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

const EventListRow = ({ title, createdAt, onPressDelete }) => (
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
      { justifyContent: 'space-between' }
    ] }>
      <Text style={{ fontSize: 13 }}>
        { moment(createdAt).format('DD.MM.YYYY, HH:mm') }
      </Text>
      <TouchableOpacity
        onPress={ onPressDelete }
      >
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
    </View>
  </TouchableOpacity>
);

EventListRow.propTypes = {
  title: PropTypes.string,
  onPressDelete: PropTypes.func,
};

export default EventListRow;
