import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { AppStyles, AppColors } from '../../../styles';

// Components
import { Spacer } from '../../ui';

const RegisterForm = ({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  confirmRegistration,
  backToLogin,
}) => (
  <View>
    <Text h3 style={{ fontWeight: 'bold' }}>
      Registrácia.
    </Text>
    <Spacer size={ 40 } />
    <Input
      placeholder={ 'Meno' }
      value={ name }
      onChangeText={ value => setName(value) }
      keyboardAppearance={ 'dark' }
      containerStyle={ AppStyles.loginInputContainer }
      inputStyle={ AppStyles.loginInput }
    />
     <Spacer size={ 10 } />
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
     <Spacer size={ 10 } />
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
     <Spacer size={ 30 } />
    <Button
      title='VYTVORIŤ ÚČET'
      onPress={ confirmRegistration }
      buttonStyle={ [
        AppStyles.loginConfirmButton,
        { backgroundColor: AppColors.brand.lightblue }
      ] }
    />
    <Button
      title='zrušiť registráciu'
      clear
      onPress={ backToLogin }
      titleStyle={{
        color: 'red',
        fontSize: 15
      }}
    />
  </View>
);

RegisterForm.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.func,
  email: PropTypes.string,
  setEmail: PropTypes.func,
  password: PropTypes.string,
  setPassword: PropTypes.func,
  confirmRegistration: PropTypes.func,
  backToLogin: PropTypes.func,
};

export default RegisterForm;
