import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Text, Button } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'


const ColumnCard = ({img, color, title, subtitle, height, pWidth, pHeight, tWidth, detail, target}) => {
  const styles = StyleSheet.create({
    button:{
      backgroundColor:`${color}`, 
      height:height,
      borderRadius:10,
      borderWidth:2,
      borderColor:'black',
      flexDirection:'row',
      justifyContent:'space-around'
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

  const nav = useNavigation()
  return (
    <Button 
      buttonStyle={styles.button}
      containerStyle={{padding:5}}
      onPress={() => nav.navigate('CardDetail', {img:img, title:title, subtitle:subtitle, detail:detail, target:target})}
      >
        <View style={{flexDirection:'column', alignItems:'center'}}>
          <Image 
            source={img}
            style={styles.img}
          />
            <View style={{paddingTop:10, flexDirection:'column', width:tWidth?tWidth:180}}>
                <Text style={{fontSize:22, color:'#ffffff',}}>{title}</Text>
                <Text style={{fontSize:16, color:'#ffffff',}}>{subtitle}</Text>
            </View>
        </View>
    </Button>
  )
}
export default ColumnCard