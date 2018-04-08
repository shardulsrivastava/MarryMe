import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { AppStyles, AppColors } from '../../../styles';
import { Text } from 'react-native-elements';
import { Spacer, NavBar, Modal } from '../../ui';
import Icon from 'react-native-vector-icons/Ionicons';

const PlaceModal = ({ isVisible, closeModal }) => (
  <Modal
    visible={ isVisible }
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
      paddingHorizontal: 10,
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
    </View>
  </Modal>
);

PlaceModal.propTypes = {
  isVisible: PropTypes.bool,
  closeModal: PropTypes.func,
};

export default PlaceModal;
