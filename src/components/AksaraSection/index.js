import React from 'react'
import { View, StyleSheet } from 'react-native'
import { listAksara } from '../../Util/ListAksara'
import { Button } from '@rneui/themed'

import RowCard from '../RowCard'
import ContentTitle from '../../components/ContentTitle'

const AksaraSection = ({navigation}) => {
  const styles = StyleSheet.create({
    sectionContainer:{
      flexDirection:'column',
      paddingBottom:10,
    },
  })

  const first3 = listAksara.slice(0, 3)
  return(
    <View style={styles.sectionContainer}>
      <ContentTitle navigation={navigation} screen={'Aksara'} judul={'Aksara'} />
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
      />
    </View>
  )
}

export default AksaraSection