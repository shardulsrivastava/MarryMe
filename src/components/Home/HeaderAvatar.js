import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Text, Avatar } from 'react-native-elements';
import { AppColors } from '../../styles';

const HeaderAvatar = ({ image, title }) => (
  <View style={{
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  }}>
    <Avatar
      large
      rounded
      source={ image }
    />
    <Text style={{
      fontSize: 17,
      fontWeight: '600',
      color: AppColors.app.black,
    }}>
      { title }
    </Text>
  </View>
);

HeaderAvatar.propTypes = {
  image: PropTypes.number,
  title: PropTypes.string,
};

export default HeaderAvatar;
