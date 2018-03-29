import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import { navigation } from 'react-navigation';

const Home = () => {
  return (
    <View style={{flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'}}>
      <TouchableHighlight
        onPress={ () => navigation.navigate('Nieco') }
      >
        <Text style={{ fontSize:35, fontWeight: 'bold' }}>
          SKAP!
        </Text>
      </TouchableHighlight>
    </View>
  );
};

export default Home;
