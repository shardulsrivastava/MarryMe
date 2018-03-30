import { compose, withHandlers, withState } from 'recompose';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

//components
import Register from './Register';

const withRegistrationStates = compose(
  withState('name', 'setName', null),
  withState('email', 'setEmail', null),
  withState('password', 'setPassword', null),
);

const withGoBackHandlers =  withHandlers({
  confirmRegistration: props => () => {
    const { name, email, password } = props;
    console.log(name);
    console.log(email);
    console.log(password);
  },
  backToLogin: props => () => {
    const { navigation } = props;
    navigation.goBack();
  },
})

export default compose(
  withNavigation,
  withRegistrationStates,
  withGoBackHandlers,
)(Register);
