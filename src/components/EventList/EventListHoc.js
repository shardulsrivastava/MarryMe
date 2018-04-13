import { compose, withState } from 'recompose';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

//components
import EventList from './EventList';

export default compose(
)(EventList);
