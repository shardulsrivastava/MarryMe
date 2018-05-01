import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { AppStyles, AppColors } from '../../styles';
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

const EventListRow = ({ text, createdAt, status, onPressDelete, changeStatus }) => (
  <TouchableOpacity
    onPress={ () => null }
    activeOpacity={ 0.6 }
    style={ [
      AppStyles.simpleCard,
      { 
        backgroundColor: status ? '#C8E6C9' : '#FFCDD2',
        marginTop: 10,
        marginHorizontal: 10,
      }
    ] }
  >
    <View style={ [
      AppStyles.row,
      { justifyContent: 'space-between', alignItems: 'center' },
    ] }>
      <Text style={{ fontSize: 12 }}>
        { moment(createdAt).format('DD.MM.YYYY, HH:mm') }
      </Text>
      <View style={ AppStyles.row }>
        <TouchableOpacity
          onPress={ changeStatus }
          style={{ marginRight: 15 }}
        >
          <Icon
            name={ 'md-checkmark-circle-outline' }
            style={{ color: !status ? 'black' : 'gray' }}
            size={ 30 }
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ onPressDelete }
        >
          <Icon
            name={ 'ios-close' }
            size={ 30 }
          />
        </TouchableOpacity>
      </View>
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
        { text } 
      </Text>
    </View>
  </TouchableOpacity>
);

EventListRow.propTypes = {
  text: PropTypes.string,
  status: PropTypes.bool,
  onPressDelete: PropTypes.func,
  changeStatus: PropTypes.func,
};

export default EventListRow;
