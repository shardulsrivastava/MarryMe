import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, Platform } from 'react-native';
import { AppStyles, AppColors } from '../../styles';
import { Divider, Text } from 'react-native-elements';
import { Spacer, NavBar } from '../ui';

// Components
import HomeCard from './HomeCard';
import DateModal from './Modals/DateModalHoc';
import DateItem from './DashboardItems/DateItem';

const Home = ({
  weddingDate,
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
  const isAndroid = Platform.OS === 'android' ? true : false;
  const doneTodos = todos.filter(item => item.completed == true);

  return (<View style={ AppStyles.flex1 }>
    <NavBar
      title={<Text style={{ fontSize: 18, color: '#444444' }}>MarryMe.</Text>}
    />
    <ScrollView style={ [
      AppStyles.flex1,
      {
        padding: 10,
        backgroundColor: AppColors.app.white,
      },
    ] }
    >
      <DateItem
        onPress={ () => setDateModalVisible(true) }
        date={ weddingDate }
        toDate={ `o ${daysToWedding.toString()} dní` }
      />
      <Spacer size={ 10 } />
      <HomeCard
        icon={ 'ios-cash-outline' }
        value={ maxBudget ? `${budgetTotal}€ / ${maxBudget}€` : 'Nastaviť rozpočet' }
        color={ '#EEB9DB' }
        onPress={ () => goToBudget() }
      />
      <Spacer size={ 10 } />
      <HomeCard
        iconLeft
        icon={ 'ios-checkmark-circle-outline' }
        value={ `${doneTodos.length} / ${todos.length}` }
        color={ '#D6D0E4' }
        onPress={ () => goToEventList() }
      />
    </ScrollView>

    <DateModal
      isVisible={ dateModalVisible }
      closeModal={ () => setDateModalVisible(false) }
    />
  </View>);
};

Home.propTypes = {
  weddingDate: PropTypes.string,
  dateModalVisible: PropTypes.bool,
  setDateModalVisible: PropTypes.func,
  goToBudget: PropTypes.func,
  maxBudget: PropTypes.number,
  budgetTotal: PropTypes.number,
  goToEventList: PropTypes.func,
  todos: PropTypes.array,
};

export default Home;
