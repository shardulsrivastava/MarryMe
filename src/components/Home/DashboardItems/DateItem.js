import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';
import { AppStyles, AppColors } from '../../../styles';
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

const DateItem = ({ onPress, date, toDate }) => (
  <TouchableOpacity
    onPress={ onPress }
    style={ [
      AppStyles.shadowCard,
      {
        alignItems: 'center',
        backgroundColor: '#A8EFEB',
      }
    ] }
  >
    {!date ? <Text>
      Nastaviť dátum svadby
    </Text> : <View style={{ alignItems: 'center' }}>
      <Text
        style={{ fontSize: 16 }}
      >
        { moment(date).format('DD.MM.YYYY') }
      </Text>
      <View style={{ backgroundColor: '#000' }} />
      <Text
        style={{
          fontSize: 28,
          color: AppColors.app.black,
          marginTop: 10,
          fontWeight: 'bold',
        }}
      >
        { toDate.toUpperCase() }
      </Text>
    </View>}
  </TouchableOpacity>
);

DateItem.propTypes = {
  onPress: PropTypes.func,
  date: PropTypes.string,
  toDate: PropTypes.string,
};

export default DateItem;
