import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Text, Button } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'

const RowCard = ({ title, img, color, totalChar, urutan }) => {

  const styles = StyleSheet.create({
    aksaraItem:{
      backgroundColor:`${color}`, 
      flexDirection:'row',
      justifyContent:'flex-start',
      paddingVertical:15, 
      paddingHorizontal:20,
      height:100, 
      borderRadius:10,
      borderWidth:2,
      borderColor:'black',
    },

    img:{
      width:80, 
      height:60, 
      backgroundColor:'#ffffff', 
      borderWidth:1,
      borderRadius:10,
      borderColor:'black', 
      resizeMode:'contain',
    },
    
    tab:{
      fontSize:18,
      paddingHorizontal:15,
      color: color
    },
    
    tab2:{
      fontSize:18,
      paddingHorizontal:15,
      color:'black'
    }
  })

  const navigation = useNavigation()
  return (
    <Button 
      buttonStyle={styles.aksaraItem}
      containerStyle={{padding:5}}
      onPress={() => navigation.navigate('AksaraDetail', {screen: title.replace('Aksara ',''), a: color, b: urutan})}
      >
        <View style={{flexDirection:'row', alignItems:'center', }}>
          <Image 
            source={img}
            style={styles.img}
          />
            <View style={{paddingHorizontal:20}}>
              <Text style={{fontSize:22, paddingBottom:5, color:'#ffffff',}} >{title}</Text>
              <Text style={{fontSize:16, paddingTop:5, color:'#ffffff'}}>{totalChar}</Text>
            </View>
        </View>
    </Button>
  )
}
export default RowCard