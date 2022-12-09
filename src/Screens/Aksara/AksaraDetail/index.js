import React, {useState} from 'react'
import { View, ScrollView } from 'react-native'
import { listAksara } from '../../../Util/ListAksara'
import { Text } from '@rneui/themed'
import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useNavigation, useRoute } from '@react-navigation/native'

import SolidColorHeader from '../../../components/SolidColorHeader'
import AksaraType from '../../../components/AksaraType'

const AksaraDetail =() => {
  const route = useRoute()
  const [color, setColor] = useState(route.params.a)
  const [index, setIndex] = useState(0)

  const styles = StyleSheet.create({
    tab:{
      fontSize:18,
      paddingHorizontal:15,
      color: color
    },
    tab2:{
      fontSize:18,
      paddingHorizontal:15,
      color:'black'
    }
  })

  const aksaraStack = createNativeStackNavigator()
  const navigation = useNavigation()
  const navigate = (target) => {
    navigation.navigate(target)
  }

  return (
    <View style={{flex:1}}>
      <SolidColorHeader color={color} title={'Aksara'} />
      <View style={{padding:10}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
        {listAksara.map((item, id) => {
          const go = item.title.replace('Aksara ','')
          return(
          <Text 
            key = {id} 
            onPress = {() => {setIndex(id), setColor(item.color), navigate(go)}} 
            style = {index === id ? styles.tab : styles.tab2 }>
            {item.title.replace('Aksara ','')}
          </Text>
          )
        })}
        </ScrollView>
      </View>
      <aksaraStack.Navigator screenOptions={{headerShown: false, animation:'slide_from_right'}}>
      {listAksara.map((item, id) => {
        return (
        <aksaraStack.Screen key={id} name={item.title.replace('Aksara ','')} children={() => <AksaraType title={item.title} describe={item.describe} />} />
        )
      })}
      </aksaraStack.Navigator>
    </View>
  )
}

export default AksaraDetail