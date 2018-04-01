import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import { AppStyles, AppColors } from '../../styles';
import { Divider } from 'react-native-elements';

// Components
import HomeHeader from './HomeHeader';

const Home = ({ brideName, groomName }) => (
  <ScrollView style={ [
    AppStyles.flex1,
    {
      padding: 10,
      backgroundColor: '#F1F1F1',
    },
  ] }
  >
    <HomeHeader
      brideName={ brideName }
      groomName={ groomName }
    />
    <Divider style={{ backgroundColor: AppColors.brand.gray }} />
  </ScrollView>
);

Home.propTypes = {
  brideName: PropTypes.string,
  groomName: PropTypes.string,
};

export default Home;
