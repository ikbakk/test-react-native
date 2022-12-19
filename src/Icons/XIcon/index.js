import React from 'react'
import { Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

const XIcon = ({ size, styles, pressIconHandle }) => {
  return (
    <Pressable onPress={pressIconHandle}>
      <Icon style={styles} name='x' size={size} />
    </Pressable>
  )
}

export default XIcon
