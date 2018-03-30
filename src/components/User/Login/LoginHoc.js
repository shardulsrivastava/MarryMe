import { compose, withHandlers, withState } from 'recompose';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { AsyncStorage } from 'react-native';

//components
import Login from './Login';

const withLoginStates = compose(
  withState('email', 'setEmail', null),
  withState('password', 'setPassword', null),
);

const withConfirmLoginHandlers =  withHandlers({
  confirmLogin: props => () => {
    const { email, password } = props;
    console.log(email);
    console.log(password);
  },
  goToRegister: props => () => {
    const { navigation } = props;
    navigation.navigate('Register');
  },
})

export default compose(
  withNavigation,
  withLoginStates,
  withConfirmLoginHandlers,
)(Login);
