import React, {useState} from 'react'
import { View, ScrollView } from 'react-native'
import { Text } from '@rneui/themed'
import { useRoute } from '@react-navigation/native'

import ImageHeader from '../ImageHeader'

const ClmCardDetail = () => {
  const route = useRoute()
  return (
    <View>
      <ImageHeader img={route.params.img} subJudul={route.params.subtitle} title={route.params.title} target={route.params.target}/>
      <View style={{flexDirection:'column', flex:1}}>
        <ScrollView contentContainerStyle={{paddingBottom:30}} style={{padding:15}}>
          <Text>{route.params.detail}</Text>
        </ScrollView>
      </View>
    </View>
  )
}

export default ClmCardDetail