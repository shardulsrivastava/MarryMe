import { compose, withHandlers, withState, withProps } from 'recompose';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

//components
import Register from './Register';

const withGoBackHandlers =  withHandlers({
  backToLogin: props => () => {
    const { navigation } = props;
    navigation.goBack();
  },
})

export default compose(
  withNavigation,
  withGoBackHandlers,
)(Register);
