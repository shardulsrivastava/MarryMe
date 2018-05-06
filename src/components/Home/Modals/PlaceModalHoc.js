import { compose, withState, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Alert } from 'react-native';

//components
import PlaceModal from './PlaceModal';

// store
import { setPlaceCity } from '../../../store/actions';

const withPlaceModalStates = compose(
  withState('place', 'setPlace', null),
  withState('loading', 'setLoading', false),
);

const withReduxConnect = connect(
  state => ({}),
  dispatch => bindActionCreators({ setPlaceCity }, dispatch),
);

const withPlaceModalHandlers =  withHandlers({
  setAndSaveWeddingPlace: ({ setLoading, closeModal, place, setPlace, setPlaceCity }) => () => {
    setLoading(true);

    try {
      if ( !place ) {
        Alert.alert('Zadajte mesto');
      }

      if ( place ) {
        setPlaceCity({
          city: place,
        });
  
        Alert.alert('Mesto bolo nastavené');
        closeModal();
      }

      setPlace(null);
      setLoading(false);
    } catch(e) {
      console.log(e);
      setLoading(false);
    }
    
  },
})

export default compose(
  withReduxConnect,
  withPlaceModalStates,
  withPlaceModalHandlers,
)(PlaceModal);
