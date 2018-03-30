import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { AppStyles } from '../../styles';

const LoginForm = ({
  confirmLogin,
  goToRegister,
  email,
  setEmail,
  password,
  setPassword,
}) => {
  return (
    <View style={{ position: 'absolute' }}>
      <Text h1 style={{ alignSelf: 'center', fontWeight: 'bold' }}>Logo.</Text>
      <View style={{ height: 30 }} />
      <Input
        placeholder='e-mail'
        autoCapitalize={ 'none' }
        value={ email }
        onChangeText={ value => setEmail(value) }
        keyboardType={ 'email-address' }
        keyboardAppearance={ 'dark' }
        containerStyle={ AppStyles.loginInputContainer }
        inputStyle={ AppStyles.loginInput }
      />
      <View style={{ height: 5 }} />
      <Input
        placeholder='heslo'
        secureTextEntry
        autoCapitalize={ 'none' }
        value={ password }
        onChangeText={ value => setPassword(value) }
        keyboardAppearance={ 'dark' }
        containerStyle={ AppStyles.loginInputContainer }
        inputStyle={ AppStyles.loginInput }
      />
      <View style={{ height: 20 }} />
      <Button
        title='PRIHLÁSIŤ SA'
        onPress={ confirmLogin }
        buttonStyle={ AppStyles.loginConfirmButton }
      />
      <Button
        title='vytvoriť účet'
        clear
        onPress={ goToRegister }
        titleStyle={{
          color: 'black',
          fontSize: 15
        }}
      />
    </View>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string,
  setEmail: PropTypes.func,
  password: PropTypes.string,
  setPassword: PropTypes.func,
  confirmLogin: PropTypes.func,
  goToRegister: PropTypes.func,
};

export default LoginForm;
