import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContent } from './src/drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <DrawerContent></DrawerContent>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

