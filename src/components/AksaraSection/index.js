import React from 'react'
import { View, StyleSheet } from 'react-native'
import { listAksara } from '../../Util/ListAksara'
import { Button } from '@rneui/themed'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'

import RowCard from '../RowCard'
import ContentTitle from '../../components/ContentTitle'
import AksaraType from '../AksaraType'

const AksaraSection = () => {
  const styles = StyleSheet.create({
    sectionContainer:{
      flexDirection:'column',
      paddingBottom:10,
    },
  })
  const navigation = useNavigation()
  
  const aksaraStack = createNativeStackNavigator()

  const first3 = listAksara.slice(0, 3)
  return(
    <View style={styles.sectionContainer}>
      <ContentTitle screen={'Aksara'} judul={'Aksara'} />
      <View style={{flexDirection:'column'}}>
        { first3.map((item,id) => { 
            return (
              <RowCard
                key={id}
                title={item.title} 
                color={item.color} 
                img={item.img} 
                totalChar={item.totalChar} 
              /> 
            )
          })
        }
      </View>
      <Button 
        title={'Lihat Selengkapnya'}
        titleStyle={{color:'#ababab'}}
        buttonStyle={{backgroundColor: '#FFFFFF00', borderRadius:10}}
        onPress={() => navigation.navigate('Aksara')}
      />
    </View>
  )
}

export default AksaraSection