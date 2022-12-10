import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Profil from './src/Screens/Profil'
import Terjemah from './src/Screens/Terjemah'
import StackHome from './src/Navigators/HomeStackNav'

const Stack = createNativeStackNavigator()

export default function App() {

  const MainStack = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name='Home' component={Home} /> */}
      <Stack.Screen name='Profil' component={Profil} />
      <Stack.Screen name='Terjemah' component={Terjemah} />
    </Stack.Navigator>
  )

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar translucent={true}></StatusBar>
        <StackHome />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
