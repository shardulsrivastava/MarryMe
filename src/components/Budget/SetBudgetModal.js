import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { AppStyles, AppColors } from '../../styles';
import { Text, Button, Input } from 'react-native-elements';
import { Spacer, NavBar, Modal } from '../ui';
import Icon from 'react-native-vector-icons/Ionicons';

const SetBudgetModal = ({
  isVisible,
  closeModal,
  loading,
  budget,
  setBudget,
  setMaximalBudget,
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
      <Text h4 style={{
        paddingBottom: 25,
        fontWeight: 'bold',
        color: AppColors.app.black,
      }}
      >
        Rozpočet svadby
      </Text>
      <Input
        placeholder={ 'Hodnota v €' }
        value={ budget }
        onChangeText={ value => setBudget(value) }
        containerStyle={ AppStyles.loginInputContainer }
        inputStyle={ AppStyles.loginInput }
        keyboardType={ 'numeric' }
      />
      <Spacer size={ 15 } />
      <Button
        title='Nastaviť'
        loading={ loading }
        onPress={ () => setMaximalBudget() }
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

SetBudgetModal.propTypes = { 
  isVisible: PropTypes.bool,
  closeModal: PropTypes.func,
  loading: PropTypes.bool,
  budget: PropTypes.string,
  setBudget: PropTypes.func,
  setMaximalBudget: PropTypes.func,
};

export default SetBudgetModal;
