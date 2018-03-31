import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { AppStyles, AppColors } from '../../../styles';

// Components
import { Spacer } from '../../ui';

//Helpers
import I18n from '../../../i18n';

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
      <Spacer size={ 40 } />
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
        placeholder={ I18n.t('password') }
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
        title='PRIHLÁSIŤ SA'
        onPress={ confirmLogin }
        buttonStyle={ [
          AppStyles.loginConfirmButton,
          { backgroundColor: AppColors.brand.pink }
        ] }
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
