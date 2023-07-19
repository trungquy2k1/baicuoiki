import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
//import { Ionicons } from "@expo/vector-icons";

const Header = ({navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={require('./imgback.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
