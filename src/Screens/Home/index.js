import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Text, Button, Avatar } from '@rneui/themed'

import SettingIcon from '../../Icons/Settings'
import ListAksara from '../../components/ListAksara'
import ContentTitle from '../../components/ContentTitle'
import ColumnCard from '../../components/ColumnCard'

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

  sectionContainer:{
    flexDirection:'column',
    paddingBottom:10,
  },

  sectionContainerColumn:{
    flexDirection:'column',
    paddingBottom:30,
  },

  sectionTitle:{
    fontSize:22, 
    marginBottom:15,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:15
  }
})

const Home = () => {
  const aksaraUtama = '../../../assets/aksara/aksara_utama.png'
  const aksaraGantungan = '../../../assets/aksara/aksara_gantungan.png'
  const aksaraSandangan = '../../../assets/aksara/aksara_sandangan.png'
  const reboBontong = '../../../assets/budaya/reboBontong.png'
  const nyale = '../../../assets/budaya/nyale.png'
  const rS = '../../../assets/budaya/roahSegare.png'

  return (
    <ScrollView 
      showsVerticalScrollIndicator={false} 
      showsHorizontalScrollIndicator={false} 
      contentContainerStyle={{paddingBottom:60}}
      style={styles.scrollView}>
        
        <View style={styles.header}>
          <Button
            title={<Avatar size={40} rounded title='RJ'/> }
            buttonStyle={styles.avatar}
          />
          <Text style={styles.name}>Hai, Rafly Junizar!</Text>
          <Button
            title={<SettingIcon size={22} />}
            buttonStyle={styles.iconButton}
          />
        </View>

        <Text style={styles.titleApp} >{`Mari Belajar\nMuatan Lokal!`}</Text>

        <View style={styles.sectionContainer} >
          <Text style={styles.sectionTitle}>Coba Terjemahkan Kata</Text>
          <Button 
            title='Terjemahkan kata!'
            buttonStyle={{backgroundColor:'#93D564', borderRadius:10, borderColor:'black', borderWidth:2, paddingVertical:15}}
          />
        </View>

        <View style={styles.sectionContainer}>
          <ContentTitle judul={'Aksara'} />
          <View style={{flexDirection:'column'}}>
            <ListAksara title={'Aksara Utama'} color={'#77BEF5'} img={require(aksaraUtama)} totalChar={'18 Karakter'} />
            <ListAksara title={'Aksara Gantungan'} color={'#CD5D58'} img={require(aksaraGantungan)} totalChar={'18 Karakter'} />
            <ListAksara title={'Aksara Sandangan'} color={'#FCBE7E'} img={require(aksaraSandangan)} totalChar={'8 Karakter'} />
          </View>
          <Button 
            title={'Lihat Selengkapnya'}
            titleStyle={{color:'#ababab'}}
            buttonStyle={{backgroundColor: '#FFFFFF00', borderRadius:10}}
          />
        </View>

        <View style={styles.sectionContainerColumn}>
          <ContentTitle judul={'Budaya dan Adat'} />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <ColumnCard title={'Upacara Rebo Bontong'} subtitle={'Pringgabaya, Lombok Timur'} img={require(reboBontong)} color={'#93D564'} />
              <ColumnCard title={'Bau Nyale'} subtitle={'Kuta, Lombok Tengah'} img={require(rS)} color={'#93D564'} />
              <ColumnCard title={'Roah Segare'} subtitle={'Kuranji Dalang, Lombok Timur'} img={require(rS)} color={'#93D564'} />
          </ScrollView>
        </View>

    </ScrollView>
  )
}


export default Home