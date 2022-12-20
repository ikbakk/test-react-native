import React, { useState } from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import { Header, Text, Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'

const style = StyleSheet.create({
  judul: {
    color: 'white',
    fontSize: 38
  },
  subJudul: {
    color: 'white',
    fontSize: 18
  }
})

function ImageHeader({ title, subJudul, img, target }) {
  const Judul = () => (
    <View style={{ flexDirection: 'column', marginLeft: -15 }}>
      <View
        style={{
          flexDirection: 'row',
          width: 305,
          height: 80,
          alignItems: 'flex-end'
        }}>
        <Text style={style.judul}>{title?.replace('Upacara ', '')}</Text>
      </View>
      <View style={{ width: 305, height: 30 }}>
        <Text style={style.subJudul}>{subJudul}</Text>
      </View>
    </View>
  )

  const nav = useNavigation()

  const IconA = () => {
    return (
      <Pressable
        style={{
          backgroundColor: 'white',
          width: 30,
          height: 30,
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderRadius: 20
        }}
        onPress={() => nav.goBack()}>
        <Icon style={{ left: 8, top: 2 }} name='arrow-back-ios' />
      </Pressable>
    )
  }

  return (
    <View style={{ borderColor: 'black', borderWidth: 3, borderRadius: 10 }}>
      <Header
        statusBarProps={{ translucent: true, backgroundColor: '#0000004D' }}
        leftContainerStyle={{
          bottom: 20,
          left: 15
        }}
        placement='left'
        centerContainerStyle={{
          width: 200,
          height: 110,
          top: 20,
          left: -10
        }}
        backgroundImage={img}
        backgroundImageStyle={{
          resizeMode: 'cover',
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8
        }}
        containerStyle={{
          height: 220,
          backgroundColor: '#FFFFFF00',
          borderRadius: 9
        }}>
        <IconA />
        <Judul />
      </Header>
    </View>
  )
}

export default ImageHeader
