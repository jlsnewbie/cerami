import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Dashboard from '@screen/private/dashboard';
import Shop from '@screen/private/shop';

import {DashboardSubStackParams} from './type';

const Stacknav = createNativeStackNavigator<DashboardSubStackParams>();
const options: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'slide_from_right',
};

const DashboardNavigationstack = () => {
  return (
    <Stacknav.Navigator initialRouteName="Dashboard" screenOptions={options}>
      <Stacknav.Screen component={Dashboard} name="Dashboard" />
      <Stacknav.Screen component={Shop} name="Shop" />
    </Stacknav.Navigator>
  );
};
export default DashboardNavigationstack;
