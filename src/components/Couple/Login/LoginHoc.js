import { compose, withHandlers, withState } from 'recompose';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//components
import Login from './Login';

// store
import { setLoggedCouple } from '../../../store/actions';

const withReduxConnect = connect(
  state => ({}),
  dispatch => bindActionCreators({ setLoggedCouple }, dispatch),
);

const withLoginStates = compose(
  withState('loading', 'setLoading', false),
  withState('status', 'setStatus', null)
);

const withAppVersion = connect(state => ({
  appVersion: state.app.version,
}));

const withConfirmLoginHandlers =  withHandlers({
  continueToApp: ({ setLoggedCouple, setLoading, status, setStatus }) => () => {
    setLoading(true);

    try {
      setStatus('logged');

      setLoggedCouple({
        status: 'logged',
      });

      setLoading(false);
    } catch(e) {
      console.log(e);
      setLoading(false);
    }
    
  },
})

export default compose(
  withReduxConnect,
  withAppVersion,
  withNavigation,
  withLoginStates,
  withConfirmLoginHandlers,
)(Login);
