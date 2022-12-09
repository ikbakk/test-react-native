import React from 'react'
import { Header } from '@rneui/themed'

function MoreHeader({title}) {
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
          backgroundColor:'white',
          height:120,
        }}
    />
  )
}

export default MoreHeader