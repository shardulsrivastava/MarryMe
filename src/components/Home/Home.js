import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View } from 'react-native';
import { AppStyles, AppColors } from '../../styles';
import { Divider, Text } from 'react-native-elements';
import { Spacer, NavBar } from '../ui';

// Components
import HomeHeader from './HomeHeader';
import HomeCard from './HomeCard';

const Home = ({ brideName, groomName, city }) => (
  <View style={ AppStyles.flex1 }>
    <NavBar
      title={{
        title: 'MarryMe.'
      }}
    />
    <ScrollView style={ [
      //AppStyles.flex1,
      {
        padding: 10,
        backgroundColor: AppColors.app.white,
      },
    ] }
    >
      <Text h2 style={{
        paddingBottom: 25,
        fontWeight: 'bold',
        color: AppColors.app.black,
      }}
      >
        Informácie
      </Text>
      <HomeHeader
        brideName={ brideName }
        groomName={ groomName }
      />
      <Divider style={{ backgroundColor: AppColors.brand.gray }} />
      <Spacer size={ 15 } />
      <HomeCard
        iconLeft
        icon={ 'alarm' }
        value={ 'o 15 dní' }
        color={ '#A8EFEB' }
        onPress={ () => console.log('time') }
      />
      <Spacer size={ 10 } />
      <HomeCard
        icon={ 'place' }
        value={ city ? city : 'Nastaviť mesto' }
        color={ '#D6E5F3' }
        onPress={ () => console.log('place') }
      />
      <Spacer size={ 10 } />
      <HomeCard
        iconLeft
        icon={ 'account-balance-wallet' }
        value={ '150€ / 3000€' }
        color={ '#EEB9DB' }
        onPress={ () => console.log('budget') }
      />
    </ScrollView>
  </View>
);

Home.propTypes = {
  brideName: PropTypes.string,
  groomName: PropTypes.string,
  city: PropTypes.string,
};

export default Home;
