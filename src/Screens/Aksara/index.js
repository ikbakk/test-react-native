import React from 'react'
import { View, ScrollView } from 'react-native'
import { listAksara } from '../../Util/ListAksara'

import MoreHeader from '../../components/MoreHeader'
import RowCard from '../../components/RowCard'

function Aksara() {
  return (
    <View>
      <MoreHeader title={'Aksara'}/>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:30}} style={{paddingHorizontal:15}}>
      { listAksara.map((item,id) => { 
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
      </ScrollView>
    </View>
  )
}
export default Aksara