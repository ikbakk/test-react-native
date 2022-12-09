import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Aksara from './src/Screens/Aksara'
import Budaya from './src/Screens/Budaya'
import CeritaRakyat from './src/Screens/CeritaRakyat'
import EditProfil from './src/Screens/EditProfil'
import Home from './src/Screens/Home'
import Profil from './src/Screens/Profil'
import Terjemah from './src/Screens/Terjemah'

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar translucent={true}></StatusBar>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Profil' component={Profil} />
          <Stack.Screen name='Terjemah' component={Terjemah} />
          <Stack.Screen name='Aksara' component={Aksara} />
          <Stack.Screen name='Budaya' component={Budaya} />
          <Stack.Screen name='Cerita' component={CeritaRakyat} />
          <Stack.Screen name='EditProfil' component={EditProfil} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
