import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Nav from './src/components/BottomTabBar'

export default function App() {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Nav />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
