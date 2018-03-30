import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
//import { navigation } from 'react-navigation';

const Register = ({ backToLogin }) => {
  return (
    <View style={{flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'}}
    >
    <TouchableHighlight
      onPress={ () => backToLogin() }
    >
      <Text style={{ fontSize:35, fontWeight: 'bold' }}>
        Register
      </Text>
    </TouchableHighlight>
    </View>
  );
};

Register.propTypes = {
  backToLogin: PropTypes.func,
};

export default Register;
