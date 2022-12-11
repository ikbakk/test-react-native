import React from 'react'
import { View, ScrollView } from 'react-native'
import { listCerita } from '../../Util/ListCeritaRakyat'

import SolidColorHeader from '../../components/SolidColorHeader'
import ColumnCard from '../../components/ColumnCard'

const CeritaRakyat = () => {
  return (
    <View style={{flexDirection:'column', flex:1}}>
      <SolidColorHeader color={'white'} title={'Cerita Rakyat'} target={'Home'} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:30}} style={{padding:15}}>
      { listCerita.map((item,id) => { 
            return (
              <ColumnCard
                key={id}
                title={item.title} 
                subtitle={item.subtitle} 
                img={item.img} 
                color={item.color} 
                height={210}
                width={300}
                pWidth={280}
                pHeight={120}
                tWidth={280}
                detail={item.detail}
              /> 
            )
          })
        }
      </ScrollView>
    </View>
  )
}
export default CeritaRakyat