import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"

import Home from "../../Screens/Home"
import Aksara from "../../Screens/Aksara"
import AksaraDetail from "../../Screens/Aksara/AksaraDetail"
import Budaya from "../../Screens/Budaya"
import CeritaRakyat from "../../Screens/CeritaRakyat"
import EditProfil from "../../Screens/EditProfil"
import ClmCardDetail from '../../components/ColumnCardDetail'

const homeStack = createNativeStackNavigator()

const StackHome = () => (
  <homeStack.Navigator screenOptions={{headerShown:false}}>
    <homeStack.Screen name='Home'  component={Home} />
    <homeStack.Screen name="AksaraDetail" component={AksaraDetail} />
    <homeStack.Screen name='Aksara' component={Aksara} />
    <homeStack.Screen name='Budaya' component={Budaya} />
    <homeStack.Screen name='Cerita' component={CeritaRakyat} />
    <homeStack.Screen name='EditProfil' component={EditProfil} />
    <homeStack.Screen name="CardDetail" component={ClmCardDetail} />
  </homeStack.Navigator>
)

export default StackHome