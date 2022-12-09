import React from 'react'
import { Header } from '@rneui/themed'

function SolidColorHeader({title, color}) {
  return (
    <Header 
        statusBarProps={{translucent:true, backgroundColor:'#fff0'}}
        leftComponent={{icon:'arrow-back'}}
        centerComponent={{
          text:title, 
          style:{
            fontSize:28
        }}}
        containerStyle={{
          backgroundColor:color,
          height:120,
        }}
    />
  )
}

export default SolidColorHeader