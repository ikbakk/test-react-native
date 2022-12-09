import React from 'react'
import { View, ScrollView } from 'react-native'
import { listBudaya } from '../../Util/ListBudaya'

import MoreHeader from '../../components/MoreHeader'
import ColumnCard from '../../components/ColumnCard'

const Budaya = () => {
  return (
    <View>
      <MoreHeader title={'Budaya dan Adat'} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:30}} style={{paddingHorizontal:15}}>
      { listBudaya.map((item,id) => { 
            return (
              <ColumnCard
                key={id}
                title={item.title} 
                subtitle={item.subtitle} 
                img={item.img} 
                color={item.color} 
                height={180}
                width={300}
                pWidth={280}
                pHeight={90}
                tWidth={280}
              /> 
            )
          })
        }
      </ScrollView>
    </View>
  )
}
export default Budaya