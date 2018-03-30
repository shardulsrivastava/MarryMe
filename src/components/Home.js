import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

const Home = () => (
  <View style={{flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'}}>
    <TouchableHighlight
      onPress={ () => null }
    >
      <Text style={{ fontSize:35, fontWeight: 'bold' }}>
        Home
      </Text>
    </TouchableHighlight>
  </View>
);


export default Home;
