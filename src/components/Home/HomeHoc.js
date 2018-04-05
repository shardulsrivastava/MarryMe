import { compose, withHandlers } from 'recompose';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

const withLogged = connect(state => ({
  brideName: state.couple.bride,
  groomName: state.couple.groom,
}));

const withBasicInfo = connect(state => ({
  city: state.place.city,
}));

//components
import Home from './Home';

export default compose(
  withLogged,
  withBasicInfo,
)(Home);
