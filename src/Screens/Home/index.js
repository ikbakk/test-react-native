import React from 'react'
import { View, ScrollView } from 'react-native'
import { Text, Button, Avatar } from '@rneui/themed'

import SettingIcon from '../../Icons/Settings'
import ForwardArrow from '../../Icons/ForwardArrow'
import ListAksara from '../../components/ListAksara'

const Home = () => {
  const aksaraUtama = '../../../assets/aksara/aksara_utama.png'
  const aksaraGantungan = '../../../assets/aksara/aksara_gantungan.png'
  const aksaraSandangan = '../../../assets/aksara/aksara_sandangan.png'
  return (
    <ScrollView 
      showsVerticalScrollIndicator={false} 
      showsHorizontalScrollIndicator={false} 
      style={{paddingHorizontal:30}}>
        <View
          style={{
            flexDirection:'row',
            justifyContent: 'space-around',
            alignItems:'center',
            height:100,
          }}
        >
          <Button
          title={<Avatar size={40} rounded title='RJ'/> }
          buttonStyle={{borderRadius:20, width:40, height:40,}}
          />
          <Text style={{width:300, fontSize:18, marginLeft:8}}>Hai, Rafly Junizar!</Text>
          <Button
              title={<SettingIcon size={22} />}
              type='clear'
              buttonStyle={{}}
          />
        </View>
        <Text style={{marginVertical:30, width:300, lineHeight:50, fontSize:40}} >Mari Belajar Muatan Lokal!</Text>
        <View style={{marginBottom:30}} >
          <Text style={{fontSize:22, marginBottom:15}}>Coba Terjemahkan Kata</Text>
          <Button 
            title='Terjemahkan kata!'
            buttonStyle={{backgroundColor:'#93D564', borderRadius:10, borderColor:'black', borderWidth:2, paddingVertical:15}}
          />
        </View>
        <View>
          <View 
            style={{
              flexDirection:'row',
              justifyContent:'space-between',
              alignItems:'center',
              marginBottom:15
            }}
          >
            <Text style={{fontSize:22}}>Aksara</Text>
            <Button
              title={<ForwardArrow size={18} />}
              type='clear'
              buttonStyle={{}}
            />
          </View>
          <View style={{flexDirection:'column'}}>
            <ListAksara title={'Aksara Utama'} color={'#77BEF5'} img={require(aksaraUtama)} totalChar={'18 Karakter'} />
            <ListAksara title={'Aksara Gantungan'} color={'#CD5D58'} img={require(aksaraGantungan)} totalChar={'18 Karakter'} />
            <ListAksara title={'Aksara Sandangan'} color={'#FCBE7E'} img={require(aksaraSandangan)} totalChar={'8 Karakter'} />
          </View>
          <Button 
            title={'Lihat Selengkapnya'}
            buttonStyle={{backgroundColor: '#FFFFFF00', borderRadius:10}}
            titleStyle={{color:'#ababab'}}
          />
        </View>
    </ScrollView>
  )
}
export default Home