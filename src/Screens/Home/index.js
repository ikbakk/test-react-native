import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Text, Button, Avatar } from '@rneui/themed'

import SettingIcon from '../../Icons/Settings'
import AksaraSection from '../../components/AksaraSection'
import BudayaSection from '../../components/BudayaSection'
import CeritaRakyatSection from '../../components/CeritaRakyatSection'


const styles = StyleSheet.create({
  scrollView:{
    paddingHorizontal:30, 
    paddingTop:50,
  },

  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    height:100,
  },

  avatar:{
    borderRadius:20, 
    width:40, 
    height:40,
  },

  name:{ 
    width:'50%', 
    fontSize:18,
  },

  iconButton:{
    backgroundColor: '#FFFFF00',
  },

  titleApp:{
    marginVertical:30, 
    lineHeight:50, 
    fontSize:48,
  },

  sectionTitle:{
    fontSize:22, 
    marginBottom:15,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:15,
  },
  
  sectionContainer:{
    flexDirection:'column',
    paddingBottom:30,
  },
})

const Home = ({navigation}) => {

  const navigate = (screen) => {
    navigation.navigate(screen)
  }

  const Terjemahkan = ({navigation}) => {
    return (
      <View style={styles.sectionContainer} >
        <Text style={styles.sectionTitle}>Coba Terjemahkan Kata</Text>
        <Button 
          title='Terjemahkan kata!'
          buttonStyle={{backgroundColor:'#93D564', borderRadius:10, borderColor:'black', borderWidth:2, paddingVertical:15}}
          onPress={() => navigate('Terjemah')}
        />
      </View>
    )
  }

  const Header = ({navigation}) => {
    return (
          <View style={styles.header}>
            <Button
              title={<Avatar size={40} rounded title='RJ'/> }
              buttonStyle={styles.avatar}
              onPress={() => navigate('Profil')}
            />
            <Text style={styles.name}>Hai, Rafly Junizar!</Text>
            <Button
              title={<SettingIcon size={22} />}
              buttonStyle={styles.iconButton}
            />
          </View>
    )
  }

  return (
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:60}} style={styles.scrollView}>
          <Header navigation={navigate} />
          <Text style={styles.titleApp} >{`Mari Belajar\nMuatan Lokal!`}</Text>
          <Terjemahkan navigation={navigate} />
          <AksaraSection navigation={navigation} />
          <BudayaSection navigation={navigation} />
          <CeritaRakyatSection navigation={navigation} />
      </ScrollView>
  )
}


export default Home