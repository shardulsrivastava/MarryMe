import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { AppStyles, AppColors } from '../../styles';
import { NavBar, Modal, Spacer } from '../ui';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, Input, Button } from 'react-native-elements';

const BudgetModal = ({
  isVisible,
  closeModal,
  loading,
  title,
  setTitle,
  value,
  setValue,
  addItemToBudget,
}) => (
  <Modal
    visible={ isVisible }
    onRequestClose={ closeModal }
  >
     <NavBar
      title={{
        title: 'Pridať položku'
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
        Pridať do rozpočtu
      </Text>
      <Input
        placeholder={ 'Názov položky' }
        value={ title }
        onChangeText={ value => setTitle(value) }
        containerStyle={ AppStyles.loginInputContainer }
        inputStyle={ AppStyles.loginInput }
      />
      <Spacer size={ 10 } />
      <Input
        placeholder={ 'Hodnota v €' }
        value={ value }
        onChangeText={ value => setValue(value) }
        containerStyle={ AppStyles.loginInputContainer }
        inputStyle={ AppStyles.loginInput }
        keyboardType={ 'numeric' }
      />
      <Spacer size={ 15 } />
      <Button
        title='Pridať'
        loading={ loading }
        onPress={ () => addItemToBudget() }
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

BudgetModal.propTypes = { 
  isVisible: PropTypes.bool,
  closeModal: PropTypes.func,
  loading: PropTypes.bool,
  title: PropTypes.string,
  setTitle: PropTypes.func,
  value: PropTypes.string,
  setValue: PropTypes.func,
  addItemToBudget: PropTypes.func,
};

export default BudgetModal;
