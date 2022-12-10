import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Text, Button, Avatar } from '@rneui/themed'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SettingIcon from '../../Icons/Settings'
import AksaraSection from '../../components/AksaraSection'
import AksaraDetail from '../Aksara/AksaraDetail'
import Aksara from '../Aksara'
import Budaya from '../Budaya'
import BudayaSection from '../../components/BudayaSection'
import CeritaRakyatSection from '../../components/CeritaRakyatSection'
import CeritaRakyat from '../CeritaRakyat'
import EditProfil from '../EditProfil'


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
  const homeStack = createNativeStackNavigator()

  const navigate = (screen) => {
    navigation.navigate(screen)
  }

  const Terjemahkan = () => {
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

  const Header = () => {
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
              onPress={() => navigate('EditProfil')}
            />
          </View>
    )
  }

  return (
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:60}} style={styles.scrollView}>
        <Header />
        <Text style={styles.titleApp} >{`Mari Belajar\nMuatan Lokal!`}</Text>
        <Terjemahkan />
        <AksaraSection />
        <BudayaSection />
        <CeritaRakyatSection />
      </ScrollView>
  )
}


export default Home