import React from 'react'
import { View, Pressable, StyleSheet, ScrollView } from 'react-native'
import { Header, Text, Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'

const styles = StyleSheet.create({
  infoWrapper: {},
  infoBioTop: {},
  infoBioBottom: {}
})

function Profil() {
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
    <ScrollView>
      <View>
        <View>
          <Text>uiashdjkfhsjkdfhsdkfhsdkfj</Text>
        </View>
        <View style={styles.infoWrapper}>
          <View style={styles.infoBioTop}>
            <Text h1>Rafly Junizar</Text>
            <Text h4>SDN 1 Midang</Text>
          </View>
          <View style={styles.infoBioBottom}>
            <Text h3>Edit Profil</Text>
            <Text h3>Tentang Aplikasi</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
export default Profil
