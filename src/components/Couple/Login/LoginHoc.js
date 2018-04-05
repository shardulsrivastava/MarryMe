import { compose, withHandlers } from 'recompose';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

//components
import Login from './Login';

const withAppVersion = connect(state => ({
  appVersion: state.app.version,
}));

const withConfirmLoginHandlers =  withHandlers({
  goToRegister: props => () => {
    const { navigation } = props;
    navigation.navigate('Register');
  },
})

export default compose(
  withAppVersion,
  withNavigation,
  withConfirmLoginHandlers,
)(Login);
