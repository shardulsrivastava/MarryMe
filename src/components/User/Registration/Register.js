import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

//Components
import RegisterForm from './RegisterForm';

const Register = ({
  confirmRegistration,
  backToLogin,
  brideName,
  setBrideName,
  groomName,
  setGroomName,
  loading,
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
      brideName={ brideName }
      setBrideName={ setBrideName }
      groomName={ groomName }
      setGroomName={ setGroomName }
      confirmRegistration={ confirmRegistration }
      backToLogin={ backToLogin }
      loading={ loading }
    />
  </View>
);

Register.propTypes = {
  confirmRegistration: PropTypes.func,
  backToLogin: PropTypes.func,
  brideName: PropTypes.string,
  setBrideName: PropTypes.func,
  groomName: PropTypes.string,
  setGroomName: PropTypes.func,
  loading: PropTypes.bool,
};

export default Register;
