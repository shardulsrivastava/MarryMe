import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
//import { navigation } from 'react-navigation';

const Nieco = () => {
  return (
    <View style={{flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'}}
    >
      <Text style={{ fontSize:35, fontWeight: 'bold' }}>
        Nieco
      </Text>
    </View>
  );
};

export default Nieco;
