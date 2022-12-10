import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { listCerita } from '../../Util/ListCeritaRakyat'

import ColumnCard from '../ColumnCard'
import ContentTitle from '../ContentTitle'

const BudayaSection = () => {
  const styles = StyleSheet.create({
    sectionContainerColumn:{
      flexDirection:'column',
      paddingBottom:30,
    },
  })

  const first3 = listCerita.slice(0, 3)
  
  return (
    <View style={styles.sectionContainerColumn}>
      <ContentTitle screen={'Cerita'} judul={'Cerita Rakyat'} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      { first3.map((item,id) => { 
            return (
              <ColumnCard 
                key={id}
                title={item.title} 
                subtitle={item.subtitle} 
                img={item.img} 
                color={item.color} 
                height={210}
                pHeight={120}
                pWidth={180}
                detail={item.detail}
              /> 
            )
          })
        }
      </ScrollView>
  </View>
  )
}

export default BudayaSection