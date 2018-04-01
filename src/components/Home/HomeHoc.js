import { compose, withHandlers } from 'recompose';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

const withLogged = connect(state => ({
  brideName: state.couple.bride,
  groomName: state.couple.groom,
}));

//components
import Home from './Home';

export default compose(
  withLogged,
)(Home);
