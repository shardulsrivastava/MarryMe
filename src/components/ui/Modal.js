import React from 'react';
import { Modal as ReactNativeModal, View } from 'react-native';
import PropTypes from 'prop-types';
import { AppStyles, AppColors } from '../../styles';

const Modal = ({ visible, onRequestClose, children }) =>
  (<ReactNativeModal
    visible={ visible }
    animationType={ 'slide' }
    hardwareAccelerated
    onRequestClose={ onRequestClose }
    transparent
  >
    <View
      style={{
        ...AppStyles.flex1,
        backgroundColor: AppColors.app.white,
      }}
    >
      {children}
    </View>
  </ReactNativeModal>);

Modal.propTypes = {
  visible: PropTypes.bool,
  onRequestClose: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;