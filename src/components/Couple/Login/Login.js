import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { Spacer } from '../../ui';
import { Button, Text } from 'react-native-elements';
import { AppStyles, AppColors } from '../../../styles';

const Login = ({ goToRegister, appVersion }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
      }}
    >
      { console.log(appVersion) }
     <Image
        source={require('../../../assets/images/loginbg.png')}
        style={{
          flex: 1,
          resizeMode: 'cover',
        }}
      />
      <View style={{ position: 'absolute' }}>
        <View style={{ flexDirection: 'row' }}>
          <Text h1 style={{ fontWeight: 'bold', color: AppColors.brand.lightblue }}>MERRY</Text>
          <Text h1 style={{ fontWeight: 'bold', color: AppColors.brand.blue }}>ME!</Text>
        </View>
        <Text h5 style={{ fontWeight: '100' }}>mobilný plánovač svadby</Text>
        <Spacer size={ 40 } />
        <Button
          title='POĎME NA TO!'
          onPress={ goToRegister }
          buttonStyle={ [
            AppStyles.loginConfirmButton,
            { backgroundColor: AppColors.brand.pink }
          ] }
        />
        <Text
          style={{
            alignSelf: 'center',
            marginTop: 50,
            fontSize: 11
          }}
        >
          { `version ${appVersion}` }
        </Text>
      </View>
    </View>
  );
};

Login.propTypes = {
  goToRegister: PropTypes.func,
  appVersion: PropTypes.string,
};

export default Login;
