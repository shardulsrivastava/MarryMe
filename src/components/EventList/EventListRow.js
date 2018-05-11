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
        backgroundColor: '#F0F0F0',
        marginTop: 10,
        marginHorizontal: 10,
      }
    ] }
  >
    <View style={ [
      AppStyles.row,
      { alignItems: 'center' },
    ] }
    >
      <TouchableOpacity
          onPress={ changeStatus }
          style={{ paddingRight: 10 }}
        >
        <Icon
          name={ 'ios-checkmark-circle' }
          size={ 35 }
          style={{ color: !status ? '#E57373' : '#81C784' }}
        />
      </TouchableOpacity>

      <View style={ [
        AppStyles.row,
        { justifyContent: 'space-between', alignItems: 'center', flex: 1 },
      ] }>
        <View style={{ flex: 1, marginRight: 5 }}>
          <Text style={{ fontSize: 11 }}>
            { moment(createdAt).format('DD.MM.YYYY, HH:mm') }
          </Text>
          <Text
            style={{ fontSize: 16, color: AppColors.app.black }}
          >
            { text } 
          </Text>
        </View>
        <TouchableOpacity
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

EventListRow.propTypes = {
  text: PropTypes.string,
  status: PropTypes.bool,
  onPressDelete: PropTypes.func,
  changeStatus: PropTypes.func,
};

export default EventListRow;
