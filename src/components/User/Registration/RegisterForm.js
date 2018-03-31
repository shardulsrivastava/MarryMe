import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { AppStyles, AppColors } from '../../../styles';

// Components
import { Spacer } from '../../ui';

const RegisterForm = ({
  confirmRegistration,
  backToLogin,
  brideName,
  setBrideName,
  groomName,
  setGroomName,
  loading,
}) => (
  <View>
    <Text h4 style={{ fontWeight: 'bold' }}>
      Prihlásiť sa.
    </Text>
    <Spacer size={ 30 } />
    <Input
      placeholder={ 'Meno nevesty' }
      value={ brideName }
      onChangeText={ value => setBrideName(value) }
      containerStyle={ AppStyles.loginInputContainer }
      inputStyle={ AppStyles.loginInput }
    />
    <Spacer size={ 10 } />
    <Input
      placeholder={ 'Meno ženícha' }
      value={ groomName }
      onChangeText={ value => setGroomName(value) }
      containerStyle={ AppStyles.loginInputContainer }
      inputStyle={ AppStyles.loginInput }
    />
    <Spacer size={ 30 } />
    <Button
      title='PRIHLÁSIŤ SA'
      loading={ loading }
      onPress={ confirmRegistration }
      buttonStyle={ [
        AppStyles.loginConfirmButton,
        { backgroundColor: AppColors.brand.lightblue }
      ] }
    />
    <Button
      title='zrušiť prihlásenie'
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
  confirmRegistration: PropTypes.func,
  backToLogin: PropTypes.func,
  brideName: PropTypes.string,
  setBrideName: PropTypes.func,
  groomName: PropTypes.string,
  setGroomName: PropTypes.func,
  loading: PropTypes.bool,
};

export default RegisterForm;
