import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
//import { navigation } from 'react-navigation';

const Profile = () => {
  return (
    <View style={{flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'}}>
        <Text style={{ fontSize:35, fontWeight: 'bold' }}>
          PROFILE
        </Text>
    </View>
  );
};

export default Profile;
