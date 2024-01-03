import React from 'react';
import MainContainer from './src/navigation/MainContainer'; 
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import globalStyles from './Styles';

export default function App() {
  return (
    <SafeAreaProvider style={globalStyles.mainContainer}>
      <NavigationContainer>
        <MainContainer />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}