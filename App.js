import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import TabBarIconHome from './src/Icons/Home'
import TabBarIconTerjemah from './src/Icons/Terjemah'
import TabBarIconProfil from './src/Icons/Profil'

import Home from './src/Screens/Home'
import Terjemah from './src/Screens/Terjemah'
import Profil from './src/Screens/Profil'

export default function App() {
  const Tab = createBottomTabNavigator()
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{ 
          headerShown: false,
          tabBarActiveTintColor: 'green',
          tabBarStyle: {height:80, paddingHorizontal:40, paddingBottom:10, paddingTop:5},
          tabBarLabelStyle: {fontSize:14, marginTop:-10, paddingBottom:5}
        }}>
          <Tab.Screen 
            name='Home'
            options={{
              tabBarIcon: ({color}) => <TabBarIconHome size={24} color={color} />
            }}>
              {() => <Home judul='Home' />}
          </Tab.Screen>
          <Tab.Screen 
            name='Terjemah'
            options={{
              tabBarIcon: ({color}) => <TabBarIconTerjemah size={24} color={color} />
            }}>
              {() => <Terjemah />}
          </Tab.Screen>
          <Tab.Screen 
            name='Profil'
            options={{
              tabBarIcon: ({color}) => <TabBarIconProfil size={24} color={color} />
            }}>
              {() => <Profil />}
          </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}
