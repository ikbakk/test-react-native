import React from 'react'
import { View, Image } from 'react-native'
import { Text, Button } from '@rneui/themed'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const ListAksara = ({ title, img, color, totalChar}) => {
  return (
    <Button 
      buttonStyle={{
        backgroundColor:`${color}`, 
        paddingVertical:15, 
        height:110, 
        justifyContent:'space-between',
        borderRadius:10,
        borderWidth:2,
        borderColor:'black',
        }}
      containerStyle={{paddingBottom:10}}
      >
        <TouchableWithoutFeedback style={{flexDirection:'row', alignItems:'center'}}>
          <Image 
            source={img}
            style={{
              width:80, 
              height:60, 
              backgroundColor:'#ffffff', 
              borderWidth:1,
              borderRadius:10,
              borderColor:'black', 
              resizeMode:'contain',
              marginLeft:40,
              marginRight:10
            }}
          />
          <TouchableWithoutFeedback style={{marginLeft:20}}>
            <Text style={{fontSize:22, paddingBottom:3, color:'#ffffff',}} >{title}</Text>
            <Text style={{fontSize:16, paddingTop:3, color:'#ffffff'}}>{totalChar}</Text>
          </TouchableWithoutFeedback>
        </TouchableWithoutFeedback>
    </Button>
  )
}
export default ListAksara