import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { AppStyles, AppColors } from '../../../styles';
import { Text, Button } from 'react-native-elements';
import { Spacer, NavBar, Modal } from '../../ui';
import Icon from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-datepicker';

const DateModal = ({ isVisible, closeModal }) => (
  <Modal
    visible={ isVisible }
  >
     <NavBar
      title={{
        title: 'Nastaviť dátum'
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
        Dátum svadby
      </Text>
      <DatePicker
        style={{ width: 300 }}
        showIcon={ false }
        date={ null }
        mode={ 'date' }
        placeholder={ 'dátum svadby' }
        format={ 'YYYY-MM-DD' }
        minDate={ new Date() }
        confirmBtnText={ 'Potvrdiť' }
        cancelBtnText={ 'Zrušiť' }
        customStyles={{
          dateInput: {
            ...AppStyles.dateInputStyle,
          }
        }}
        onDateChange={ () => null }
      />
      <Spacer size={ 15 } />
      <Button
      title='Nastaviť'
      //loading={ loading }
      //onPress={ confirmRegistration }
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

DateModal.propTypes = { 
  isVisible: PropTypes.bool,
  closeModal: PropTypes.func,
};

export default DateModal;
