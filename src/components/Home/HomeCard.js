import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { AppStyles, AppColors } from '../../styles';
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeCard = ({
  iconLeft,
  value,
  color,
  icon,
  onPress,
}) => {
  if ( iconLeft ) {
    return(
      <TouchableOpacity
        onPress={ onPress }
        activeOpacity={ 0.6 }
        style={ [
          AppStyles.simpleCard,
          AppStyles.row,
          {
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: color,
          }
        ] }
      >
        <Icon
          name={ icon }
          size={ 50 }
          color={ 'rgba(0,0,0,0.7)' }
          />
        <Text
          style={{ fontSize: 23, fontWeight: '200', color: AppColors.app.black }}
        >
          { value }
        </Text>
      </TouchableOpacity>
    );
  } else {
    return(
      <TouchableOpacity
        onPress={ onPress }
        activeOpacity={ 0.6 }
        style={ [
          AppStyles.simpleCard,
          AppStyles.row,
          {
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: color,
          }
        ] }
      >
        <Text
        style={{ fontSize: 23, fontWeight: '200', color: AppColors.app.black }}
        >
          { value } 
        </Text>
        <Icon
          name={ icon }
          size={ 50 }
          color={ 'rgba(0,0,0,0.7)' }
        />
      </TouchableOpacity>
    );
  }
};

HomeCard.propTypes = {
  iconLeft: PropTypes.bool,
  value: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
  onPress: PropTypes.func,
};

export default HomeCard;
