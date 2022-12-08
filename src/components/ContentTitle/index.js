import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button } from '@rneui/themed'

import ForwardArrow from '../../Icons/ForwardArrow'

const ContentTitle = ({judul, navigation, screen}) => {
  const styles = StyleSheet.create({
    sectionTitle:{
      fontSize:22, 
      marginBottom:15,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginBottom:15,
    },

    iconButton:{
      backgroundColor: '#FFFFF00',
    },
  })

  const navigate = (a) => {
    navigation.navigate(a)
  }

  return (
    <View style={styles.sectionTitle}>
    <Text style={{fontSize:22}}>{judul}</Text>
    <Button
      title={<ForwardArrow size={18} />}
      buttonStyle={styles.iconButton}
      onPress={() => navigate(screen)}
    />
  </View>
  )
}

export default ContentTitle