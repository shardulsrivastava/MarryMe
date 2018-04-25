import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View } from 'react-native';
import { AppStyles, AppColors } from '../../styles';
import { Divider, Text } from 'react-native-elements';
import { Spacer, NavBar } from '../ui';

// Components
import HomeCard from './HomeCard';
import PlaceModal from './Modals/PlaceModalHoc';
import DateModal from './Modals/DateModalHoc';

const Home = ({
  city,
  weddingDate,
  placeModalVisible,
  setPlaceModalVisible,
  dateModalVisible,
  setDateModalVisible,
  goToBudget,
  maxBudget,
  budgetTotal,
  goToEventList,
  todos,
}) => {
  const toDate = Date.parse( weddingDate ) - Date.parse (new Date() );
  const daysToWedding = Math.floor( toDate / ( 1000 * 60 * 60 * 24 ) );


  return (<View style={ AppStyles.flex1 }>
    <NavBar
      title={{
        title: 'MarryMe.'
      }}
    />
    <ScrollView style={ [
      AppStyles.flex1,
      {
        padding: 10,
        backgroundColor: AppColors.app.white,
      },
    ] }
    >
      <Text h3 style={{	
       paddingBottom: 25,
       fontWeight: 'bold',	
       color: AppColors.app.black,	
      }}	
      >	
        Informácie	
      </Text>
      <HomeCard
        iconLeft
        icon={ 'ios-time-outline' }
        value={ weddingDate ? `o ${daysToWedding.toString()} dní` : 'Nastaviť dátum' }
        color={ '#A8EFEB' }
        onPress={ () => setDateModalVisible(true) }
      />
      <Spacer size={ 10 } />
      <HomeCard
        icon={ 'ios-pin-outline' }
        value={ city ? city : 'Nastaviť mesto' }
        color={ '#D6E5F3' }
        onPress={ () => setPlaceModalVisible(true) }
      />
      <Spacer size={ 10 } />
      <HomeCard
        iconLeft
        icon={ 'ios-cash-outline' }
        value={ maxBudget ? `${budgetTotal}€ / ${maxBudget}€` : 'Nastaviť rozpočet' }
        color={ '#EEB9DB' }
        onPress={ () => goToBudget() }
      />
      <Spacer size={ 10 } />
      <HomeCard
        icon={ 'ios-checkmark-circle-outline' }
        value={ `0 / ${todos.length}` }
        color={ '#D6D0E4' }
        onPress={ () => goToEventList() }
      />
    </ScrollView>

    <PlaceModal
      isVisible={ placeModalVisible }
      closeModal={ () => setPlaceModalVisible(false) }
    />
    <DateModal
      isVisible={ dateModalVisible }
      closeModal={ () => setDateModalVisible(false) }
    />
  </View>);
};

Home.propTypes = {
  city: PropTypes.string,
  weddingDate: PropTypes.string,
  placeModalVisible: PropTypes.bool,
  setPlaceModalVisible: PropTypes.func,
  dateModalVisible: PropTypes.bool,
  setDateModalVisible: PropTypes.func,
  goToBudget: PropTypes.func,
  maxBudget: PropTypes.number,
  budgetTotal: PropTypes.number,
  goToEventList: PropTypes.func,
  todos: PropTypes.array,
};

export default Home;
