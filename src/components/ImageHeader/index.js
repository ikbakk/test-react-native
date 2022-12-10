import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Header, Text } from '@rneui/themed'
import '../../../assets/budaya/nyale.png'

const style = StyleSheet.create({
  judul:{
    color:'white',
    fontSize:38,
  },
  subJudul:{
    color:'white',
    fontSize:18,
  }
})

function ImageHeader({title, subJudul, img}) {

  const Judul = () => (
    <View style={{flexDirection:'column', marginLeft:-15,}}>
      <View style={{flexDirection:'row', width:305, height:80, alignItems:'flex-end'}}>
        <Text style={style.judul}>{title.replace('Upacara ','')}</Text>
      </View>
      <View style={{width:305, height:30}}>
        <Text style={style.subJudul}>{subJudul}</Text>
      </View>
    </View>
  )
  return (
    <View style={{borderColor:'black', borderWidth:3, borderRadius:10}}>
    <Header 
        statusBarProps={{translucent:true, backgroundColor:'#0000004D'}}
        leftComponent={{icon:'arrow-back'}}
        leftContainerStyle={{
          backgroundColor:'white',
          borderRadius:30,
          width:25,
          height:25,
          bottom:20,
          left:15,
        }}
        placement='left'
        centerComponent={Judul}
        centerContainerStyle={{
          width:200,
          height:110,
          top:20,
          left:-10,
        }}
        backgroundImage={img}
        backgroundImageStyle={{
          resizeMode:'cover',
          borderBottomLeftRadius:8,
          borderBottomRightRadius:8
        }}
        containerStyle={{
          height:220,
          backgroundColor:'#FFFFFF00',
          borderRadius:9,
        }}
    />
    </View>
  )
}

export default ImageHeader