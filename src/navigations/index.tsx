import React from 'react';
import {Text} from 'react-native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackHeaderProps,
} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import BottomTab from '@components/bottomTab/bottomTab';
import ItemSelected from '@screen/private/shop/itemSelected';

import {RootStackParams} from './type';
const Stacknav = createNativeStackNavigator<RootStackParams>();
const options: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'slide_from_right',
};

const Navigationstack = () => {
  return (
    <NavigationContainer>
      <Stacknav.Navigator initialRouteName="BottomTab" screenOptions={options}>
        <Stacknav.Screen component={BottomTab} name="BottomTab" />
        <Stacknav.Screen component={ItemSelected} name="ItemSelected" />
      </Stacknav.Navigator>
    </NavigationContainer>
  );
};
export default Navigationstack;
