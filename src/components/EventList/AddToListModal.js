import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { AppStyles, AppColors } from '../../styles';
import { NavBar, Modal, Spacer } from '../ui';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, Input, Button } from 'react-native-elements';

const AddToListModal = ({
  isVisible,
  closeModal,
  loading,
  title,
  setTitle,
  addTodoItem,
}) => (
  <Modal
    visible={ isVisible }
    onRequestClose={ closeModal }
  >
     <NavBar
      title={{
        title: 'Pridať úlohu'
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
        Pridať do úloh
      </Text>
      <Input
        placeholder={ 'Názov úlohy' }
        value={ title }
        onChangeText={ value => setTitle(value) }
        containerStyle={ AppStyles.loginInputContainer }
        inputStyle={ AppStyles.loginInput }
      />
      <Spacer size={ 15 } />
      <Button
        title='Pridať'
        loading={ loading }
        onPress={ () => addTodoItem() }
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

AddToListModal.propTypes = { 
  isVisible: PropTypes.bool,
  closeModal: PropTypes.func,
  loading: PropTypes.bool,
  title: PropTypes.string,
  setTitle: PropTypes.func,
  addTodoItem: PropTypes.func,
};

export default AddToListModal;
