import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

//Components
import RegisterForm from './RegisterForm';

const Register = ({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  confirmRegistration,
  backToLogin
}) => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F1F1F1',
    }}
  >
    <RegisterForm
      name={ name }
      setName={ setName }
      email={ email }
      setEmail={ setEmail }
      password={ password }
      setPassword={ setPassword }
      confirmRegistration={ confirmRegistration }
      backToLogin={ backToLogin }
    />
  </View>
);

Register.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.func,
  email: PropTypes.string,
  setEmail: PropTypes.func,
  password: PropTypes.string,
  setPassword: PropTypes.func,
  confirmRegistration: PropTypes.func,
  backToLogin: PropTypes.func,
};

export default Register;
