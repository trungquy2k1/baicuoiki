/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import Chitietsp from './Screen/Chitietsp';
import Dathang from './Screen/DathangTsx';
import HomeScreen from './Screen/HomeScreen/HomeScreen';
import Category from './Screen/Category';
import Product from './Screen/Product';
import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
//const Stack = createStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="Chitietsp" component={Chitietsp} />
    //     <Stack.Screen name="Dathang" component={Dathang} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <Product />
  );
};
export default App;
