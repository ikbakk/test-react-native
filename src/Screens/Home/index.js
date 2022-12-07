import React from 'react'
import { View, ScrollView } from 'react-native'
import { Text, Button, Avatar } from '@rneui/themed'
import SettingIcon from '../../Icons/Settings'

function Home() {
  return (
    <ScrollView style={{marginHorizontal:30}}>
      <View
        style={{
          flexDirection:'row',
          justifyContent: 'space-around',
          alignItems:'center',
          height:100,
        }}
      >
        <Avatar size={40} rounded title='RJ' containerStyle={{ backgroundColor: 'purple',}} /> 
        <Text style={{width:300,fontSize:18}}>Hai, Rafly Junizar!</Text>
        <SettingIcon size={22} />
      </View>
      <Text style={{marginVertical:30, width:300, lineHeight:50, fontSize:40}} >Mari Belajar Muatan Lokal!</Text>
      <View style={{marginBottom:30}} >
        <Text style={{fontSize:22, paddingBottom:5}}>Coba Terjemahkan Kata</Text>
        <Button 
          title='Terjemahkan kata!'
          buttonStyle={{backgroundColor:'#93D564', borderRadius:10, borderColor:'black', borderWidth:2, paddingVertical:15}}
        />
      </View>
      <View>
        <Text style={{fontSize:22, paddingBottom:10}}>Aksara</Text>
      </View>
    </ScrollView>
  )
}
export default Home