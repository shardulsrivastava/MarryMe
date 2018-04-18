import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { AppStyles, AppColors } from '../../styles';
import { NavBar, Modal } from '../ui';
import Icon from 'react-native-vector-icons/Ionicons';

const BudgetModal = ({
  isVisible,
  closeModal,
}) => (
  <Modal
    visible={ isVisible }
  >
     <NavBar
      title={{
        title: 'Nastaviť rozpočet'
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
    </View>
  </Modal>
);

BudgetModal.propTypes = { 
  isVisible: PropTypes.bool,
  closeModal: PropTypes.func,
};

export default BudgetModal;
