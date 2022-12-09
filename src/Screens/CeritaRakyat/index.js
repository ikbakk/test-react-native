import React from 'react'
import { View, ScrollView } from 'react-native'
import { listCerita } from '../../Util/ListCeritaRakyat'

import MoreHeader from '../../components/MoreHeader'
import ColumnCard from '../../components/ColumnCard'

const CeritaRakyat = () => {
  return (
    <View style={{flexDirection:'column', flex:1}}>
      <MoreHeader title={'Cerita Rakyat'} />
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
              /> 
            )
          })
        }
      </ScrollView>
    </View>
  )
}
export default CeritaRakyat