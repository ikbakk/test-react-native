import React from 'react'
import { Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

const SwapIcon = ({ size, styles, pressIconHandle }) => {
  return (
    <Pressable onPress={pressIconHandle}>
      <Icon style={styles} name={'swap'} size={size} />
    </Pressable>
  )
}

export default SwapIcon
