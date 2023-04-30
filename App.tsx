/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Dashboard from './src/screen/private/dashboard/dashboard';
import {Provider} from 'react-redux';
import {store} from './src/ducks/store';
import Navigationstack from './src/navigations';
function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Navigationstack />
    </Provider>
  );
}

export default App;
