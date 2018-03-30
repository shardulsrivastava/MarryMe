import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
//import { navigation } from 'react-navigation';

const Login = ({ confirmLogin }) => {
  return (
    <View style={{flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'}}
    >
    <TouchableHighlight
      onPress={ () => confirmLogin() }
    >
      <Text style={{ fontSize:35, fontWeight: 'bold' }}>
        Login
      </Text>
    </TouchableHighlight>
    </View>
  );
};

Login.propTypes = {
  confirmLogin: PropTypes.func,
};

export default Login;
