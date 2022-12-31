import React from 'react'
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native'
import { Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'

const styles = StyleSheet.create({
  infoWrapper: {},
  infoBioTop: {},
  infoBioBottom: {}
})

function Profil() {
  const nav = useNavigation()

  return (
    <ScrollView className='flex'>
      <View className='flex h-screen'>
        <View className='bg-slate-300 relative t.z0 h-[60vh]'>
          <View className='bg-white p-1 rounded-full absolute left-8 top-12'>
            <Icon style={{ paddingLeft: 10 }} name='arrow-back-ios' />
          </View>
          <Text>image</Text>
        </View>
        <View className='bg-white space-y-10 px-6 py-12 top-[50vh] w-full rounded-t-3xl absolute t.z10 h-[50vh]'>
          <View className='border-b pb-4 space-y-4 border-slate-300'>
            <Text className='text-4xl'>Rafly Junizar</Text>
            <Text className='text-2xl'>SDN 1 Midang</Text>
          </View>
          <View className='space-y-4'>
            <View className='flex flex-row space-x-4 items-center'>
              <Icon name='edit' size={30} />
              <Text className='text-2xl'>Edit Profil</Text>
            </View>
            <View className='flex flex-row space-x-4 items-center'>
              <Icon name='info' size={30} />
              <Text className='text-2xl'>Tentang Aplikasi</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
export default Profil
