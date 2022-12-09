import React from 'react'
import { View, ScrollView } from 'react-native'
import { Text } from '@rneui/themed'

const AksaraType = ({title, describe}) => {
  return (
    <View style={{flex:1, padding:15}}>
      <View>
        <Text style={{fontSize:28}}>{title}</Text>
        <Text>{describe}</Text>
      </View>
      <ScrollView>

      </ScrollView>
    </View>
  )
}

export default AksaraType