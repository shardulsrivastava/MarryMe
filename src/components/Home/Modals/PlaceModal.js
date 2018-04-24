import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { AppStyles, AppColors } from '../../../styles';
import { Text, Button } from 'react-native-elements';
import { Spacer, NavBar, Modal } from '../../ui';
import Icon from 'react-native-vector-icons/Ionicons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const PlaceModal = ({
  isVisible,
  closeModal,
  place,
  setPlace,
  loading,
  setAndSaveWeddingPlace,
}) => (
  <Modal
    visible={ isVisible }
    onRequestClose={ closeModal }
  >
     <NavBar
      title={{
        title: 'Nastaviť mesto'
      }}
      rightButton={
        <TouchableOpacity
          activeOpacity={ 0.6 }
          style={{
            alignSelf: 'center',
            paddingHorizontal: 20,
          }}
          onPress={ closeModal }
        >
          <Icon name={ 'md-close' } size={ 25 } color={ AppColors.app.black } />
        </TouchableOpacity>
      }
    />
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Text h4 style={{
        paddingBottom: 25,
        fontWeight: 'bold',
        color: AppColors.app.black,
      }}
      >
        Miesto svadby
      </Text>
      <GooglePlacesAutocomplete
        currentLocation={ false }
        placeholder={ 'Vybrať mesto' }
        minLength={ 2 }
        autoFocus={ false }
        debounce={ 200 }
        fetchDetails
        onPress={ (data, details = null) => {
          if (details && details.name) {
            setPlace(details.name);
          }
        } }
        listViewDisplayed={ 'auto' }
        query={{
          key: 'AIzaSyDgl9pNoQu8PNTkxItAhYrXNVTltGsNbcI',
          language: 'sk',
          types: '(cities)',
        }}
        styles={{
          container: {
            flex: 0,
            zIndex: 1,
          },
          textInputContainer: {
            width: 325,
            backgroundColor: 'transparent',
            borderTopWidth: 0,
            borderBottomWidth: 0,
            height: 65
          },
          textInput: {
            width: 300,
            borderWidth: 0.5,
            borderColor: 'gray',
            borderRadius: 80,
            height: 50,
          },
          description: {
            fontWeight: 'bold',
          },
          listView: {
            position: 'absolute',
            top: 50,
            backgroundColor: '#FFF',
            zIndex: 1,
          },
        }}
      />
      <Spacer size={ 15 } />
      <Button
        title='Nastaviť'
        loading={ loading }
        onPress={ () => setAndSaveWeddingPlace() }
        buttonStyle={ [
          AppStyles.confirmButton,
          {
            width: 300,
            backgroundColor: '#B9AAC2'
          }
        ] }
      />
    </View>
  </Modal>
);

PlaceModal.propTypes = {
  isVisible: PropTypes.bool,
  closeModal: PropTypes.func,
  place: PropTypes.string,
  setPlace: PropTypes.func,
  loading: PropTypes.bool,
  setAndSaveWeddingPlace: PropTypes.func,
};

export default PlaceModal;
