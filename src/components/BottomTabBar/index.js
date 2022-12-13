import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

import Home from "../../Screens/Home";
import Profil from "../../Screens/Profil";
import TabBarIconHome from "../../Icons/Home";
import TabBarIconProfil from "../../Icons/Profil";
import TabBarIconTerjemah from "../../Icons/Terjemah";
import StackHome from "../../Navigators/HomeStackNav";
import Terjemah from "../../Screens/Terjemah";

const Nav = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#93D564",
        tabBarStyle: { paddingHorizontal: 40, position: "absolute" },
        tabBarLabelStyle: { fontSize: 14 },
      }}>
      <Tab.Screen
        name="HomeAwal"
        options={{
          tabBarIcon: ({ color }) => <TabBarIconHome size={24} color={color} />,
          tabBarLabel: "Home",
        }}
        component={StackHome}></Tab.Screen>
      <Tab.Screen
        name="Terjemah"
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIconTerjemah size={24} color={color} />
          ),
        }}
        component={Terjemah}></Tab.Screen>
      <Tab.Screen
        name="Profil"
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIconProfil size={24} color={color} />
          ),
        }}
        component={Profil}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default Nav;
