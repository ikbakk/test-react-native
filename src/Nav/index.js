import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../Screens/Home'
import Terjemah from '../Screens/Terjemah'
import Profil from '../Screens/Profil'

const Nav = () => {
  const Tab = createBottomTabNavigator()

  return (
          <Tab.Navigator screenOptions={{ 
              headerShown: false,
              tabBarActiveTintColor: '#93D564',
              tabBarStyle: {paddingHorizontal:40, paddingVertical:10},
              tabBarLabelStyle: {fontSize:14}
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
  )
}