import { compose, withState, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Alert } from 'react-native';

//components
import DateModal from './DateModal';

// store
import { setWeddingDate } from '../../../store/actions';

const withDateModalStates = compose(
  withState('date', 'setDate', null),
  withState('loading', 'setLoading', false),
);

const withReduxConnect = connect(
  state => ({}),
  dispatch => bindActionCreators({ setWeddingDate }, dispatch),
);

const withDateModalHandlers =  withHandlers({
  setAndSaveWeddingDate: ({ setLoading, closeModal, setDate, date, setWeddingDate }) => () => {
    setLoading(true);

    try {
      if ( !date ) {
        Alert.alert('Zadajte dátum');
      }

      if ( date ) {
        setWeddingDate({
          weddingDate: date,
        });
  
        Alert.alert('Dátum svadby bol nastavený');
        closeModal();
      }

      setDate(null);
      setLoading(false);
    } catch(e) {
      console.log(e);
      setLoading(false);
    }
    
  },
});

export default compose(
  withReduxConnect,
  withDateModalStates,
  withDateModalHandlers,
)(DateModal);
