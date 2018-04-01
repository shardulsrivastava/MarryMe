import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { AppStyles } from '../../styles';

//Components
import HeaderAvatar from './HeaderAvatar';

const HomeHeader = ({ brideName, groomName }) => (
  <View style={ [
    AppStyles.row,
    {
      justifyContent: 'center',
      alignItems: 'center',
    },
  ] }
  >
    <HeaderAvatar
      image={ require('../../assets/images/brideavatar.png') }
      title={ brideName }
    />
    <HeaderAvatar
      image={ require('../../assets/images/groomavatar.png') }
      title={ groomName }
    />
  </View>
);

HomeHeader.propTypes = {
  brideName: PropTypes.string,
  groomName: PropTypes.string,
};

export default HomeHeader;
