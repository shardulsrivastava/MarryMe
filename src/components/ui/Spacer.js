import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const Spacer = ({ size }) => (
  <View style={{ height: size }} />
);

Spacer.propTypes = {
  size: PropTypes.number,
};

export default Spacer;
