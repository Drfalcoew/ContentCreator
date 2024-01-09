import React from 'react';
import MainNavigator from './src/navigation/MainNavigator'; 
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import globalStyles from './Styles';

export default function App() {
  return (
    <SafeAreaProvider style={globalStyles.mainContainer}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}