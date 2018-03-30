import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';

// Components
import LoginForm from './LoginForm';

const Login = ({
  confirmLogin,
  goToRegister,
  email,
  setEmail,
  password,
  setPassword,
}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F1F1F1',
      }}
    >
     {/* <Image
        source={require('urlobrazka')}
        style={{
          flex: 1,
          resizeMode: 'cover',
        }}
      /> */}
      <LoginForm
        email={ email }
        setEmail={ setEmail }
        password={ password }
        setPassword={ setPassword }
        confirmLogin={ confirmLogin }
        goToRegister={ goToRegister }
      />
    </View>
  );
};

Login.propTypes = {
  email: PropTypes.string,
  setEmail: PropTypes.func,
  password: PropTypes.string,
  setPassword: PropTypes.func,
  confirmLogin: PropTypes.func,
  goToRegister: PropTypes.func,
};

export default Login;
