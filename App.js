/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NativeBaseProvider } from 'native-base';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Routes from './src/router/Routes';

const App = () => {

  const backgroundStyle = {
    flex: 1,
    backgroundColor: "#fff"
  };

  return (
    <NativeBaseProvider>
      <SafeAreaView style={backgroundStyle}>
        <Routes />
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default App;
