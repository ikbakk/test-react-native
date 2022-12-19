import React from 'react'
import { View, ScrollView } from 'react-native'
import { listAksara } from '../../Util/ListAksara'

import SolidColorHeader from '../../components/SolidColorHeader'
import RowCard from '../../components/RowCard'

function Aksara() {
  return (
    <View style={{ flexDirection: 'column', flex: 1 }}>
      <SolidColorHeader target={'Home'} color={'white'} title={'Aksara'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
        style={{ padding: 15, marginBottom: 50 }}>
        {listAksara.map((item, id) => {
          return (
            <RowCard
              key={id}
              title={item.title}
              color={item.color}
              img={item.img}
              totalChar={item.totalChar}
              item={item}
              urutan={item.urutan}
            />
          )
        })}
      </ScrollView>
    </View>
  )
}
export default Aksara
