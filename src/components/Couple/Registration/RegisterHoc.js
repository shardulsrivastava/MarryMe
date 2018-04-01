import { compose, withHandlers, withState } from 'recompose';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Alert } from 'react-native';

//components
import Register from './Register';

// store
import { setLoggedCouple } from '../../../store/actions';

const withReduxConnect = connect(
  state => ({}),
  dispatch => bindActionCreators({ setLoggedCouple }, dispatch),
);

const withRegistrationStates = compose(
  withState('brideName', 'setBrideName', null),
  withState('groomName', 'setGroomName', null),
  withState('loading', 'setLoading', false),
  withState('status', 'setStatus', null)
);

const withGoBackHandlers =  withHandlers({
  confirmRegistration: ({ setLoggedCouple, brideName, groomName, setLoading, status, setStatus }) => () => {
    setLoading(true);

    try {
      if ( !brideName || !groomName ) {
        Alert.alert('Pre pokračovanie vyplňte formulár');
        setStatus(null);
      }

      if ( brideName || groomName ) {
        setStatus('logged');
      }

      setLoggedCouple({
        bride: brideName,
        groom: groomName,
        status,
      });

      setLoading(false);
    } catch(e) {
      console.log(e);
      setLoading(false);
    }
    
  },
  backToLogin: props => () => {
    const { navigation } = props;
    navigation.goBack();
  },
})

export default compose(
  withReduxConnect,
  withNavigation,
  withRegistrationStates,
  withGoBackHandlers,
)(Register);
