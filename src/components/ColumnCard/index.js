import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Text, Button } from '@rneui/themed'


const ColumnCard = ({img, color, title, subtitle, height, pWidth, pHeight}) => {
  const styles = StyleSheet.create({
    button:{
      backgroundColor:`${color}`, 
      height:height,
      width:200, 
      borderRadius:10,
      borderWidth:2,
      borderColor:'black',
    },

    img:{
      width: pWidth? pWidth : 180, 
      height: pHeight? pHeight : 80, 
      backgroundColor:'#ffffff00', 
      borderWidth:1,
      borderRadius:10,
      borderColor:'black', 
      resizeMode:'cover',
    },
  })

  return (
    <Button 
      buttonStyle={styles.button}
      containerStyle={{padding:5}}
      >
        <View style={{flexDirection:'column', alignItems:'center', paddingTop:10}}>
          <Image 
            source={img}
            style={styles.img}
          />
            <View style={{paddingTop:10, flexDirection:'column', alignItems:'flex-start', width:180}}>
                <Text style={{fontSize:22, color:'#ffffff',}}>{title}</Text>
                <Text style={{fontSize:16, color:'#ffffff', alignSelf:'stretch'}}>{subtitle}</Text>
            </View>
        </View>
    </Button>
  )
}
export default ColumnCard