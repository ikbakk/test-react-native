import React, { useState } from 'react'
import { View, Image, StyleSheet, ScrollView, Pressable } from 'react-native'
import { Text, Input, Icon } from '@rneui/themed'
import { kata } from '../../Util/ListKata'

import SwapIcon from '../../Icons/SwapIcon'
import XIcon from '../../Icons/XIcon'

import SolidColorHeader from '../../components/SolidColorHeader'
import '../../../assets/aksara/aksara_utama.png'

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: 20,
    paddingHorizontal: 15,
    marginBottom: 50,
    borderColor: 'black',
    borderWidth: 1
  },
  image: {
    resizeMode: 'contain',
    width: 32,
    height: 32
  },
  imageCont: {
    backgroundColor: '#000000',
    width: 36,
    height: 36,
    borderRadius: 20
  },
  langText: {
    marginHorizontal: 5
  },
  langCont: {
    backgroundColor: '#93D564',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#000000',
    borderWidth: 2,
    padding: 5
  },
  langContWrap: {
    flex: 1,
    flexDirection: 'row'
  },
  swapIcon: {
    marginHorizontal: 5,
    marginVertical: 20
  },
  translateBox: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 20
  },
  textAreaTitle: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 5
  },
  textTitle: { alignSelf: 'flex-end', flex: 1 },
  textTitleBahasa: { fontWeight: 'bold' },
  textInputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 150,
    borderWidth: 2,
    borderRadius: 10
  },
  textInputValue: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  }
})

const TranslateBox = ({ params, boolean }) => {
  const {
    sasak,
    textInput,
    textOutput,
    setTextInput,
    setTextOutput,
    kata,
    bahasaSwap,
    clearHandle
  } = params

  const getKeyByValue = (object, value) => {
    const result = Object.keys(object).find((key) => object[key] === value)
    if (result !== undefined) {
      return result
    } else {
      return 'Tidak ada kata'
    }
  }

  const idToSasak =
    typeof kata[textInput.toLowerCase()] == 'string'
      ? kata[textInput.toLowerCase()].charAt(0).toUpperCase() +
        kata[textInput.toLowerCase()].slice(1)
      : 'Tidak ada kata'

  const sasakToId =
    getKeyByValue(kata, textOutput.toLowerCase()).charAt(0).toUpperCase() +
    getKeyByValue(kata, textOutput.toLowerCase()).slice(1)

  const sendHandle = () => {
    setTextOutput(idToSasak)
  }
  const TranslateBoxTitle = () => {
    return (
      <View style={styles.textAreaTitle}>
        <Text style={styles.textTitle}>Diterjemahkan dari</Text>
        <Text style={styles.textTitleBahasa}>{bahasaSwap(boolean)}</Text>
      </View>
    )
  }
  console.log(idToSasak.length)
  return (
    <View style={styles.translateBox}>
      <TranslateBoxTitle />
      <View style={styles.textInputContainer}>
        <View style={styles.textInputValue}>
          <Text style={{ fontSize: 24 }}>
            {sasak === boolean ? sasakToId : textOutput}
          </Text>
          <XIcon pressIconHandle={clearHandle} size={20} />
        </View>
        <Input
          containerStyle={{
            flex: 1,
            justifyContent: 'flex-end'
          }}
          clearTextOnFocus={true}
          errorMessage={`${
            sasak === boolean ? idToSasak.length : textInput.length
          } / 500`}
          errorStyle={{ color: 'black' }}
          maxLength={500}
          onChangeText={(newText) => setTextInput(newText)}
          defaultValue={sasak === boolean ? idToSasak : sasakToId}
          placeholder='Masukkan kata'
          rightIcon={<Icon onPress={sendHandle} name='send' type='material' />}
        />
      </View>
    </View>
  )
}

function Terjemah() {
  const [sasak, setSasak] = useState(true)
  const [textInput, setTextInput] = useState('')
  const [textOutput, setTextOutput] = useState('Tidak ada kata')

  const bahasaSwap = (bool) => {
    const bahasa = sasak === bool ? 'Sasak' : 'Bahasa Indonesia'
    return bahasa
  }

  const swapHandle = () => {
    setSasak(!sasak)
  }

  const clearHandle = () => {
    setTextOutput('')
    setTextInput('')
  }
  const params = {
    sasak: sasak,
    textInput: textInput,
    textOutput: textOutput,
    setTextInput: setTextInput,
    setTextOutput: setTextOutput,
    kata: kata,
    bahasaSwap: bahasaSwap,
    clearHandle: clearHandle
  }

  const LangContainter = ({ bool }) => {
    return (
      <View style={styles.langCont}>
        <View>
          <View style={styles.imageCont}>
            <Image
              style={styles.image}
              source={require('../../../assets/aksara/aksara_utama.png')}></Image>
          </View>
        </View>
        <Text style={styles.langText}>{bahasaSwap(bool)}</Text>
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <SolidColorHeader target={'Home'} title='Terjemahan' color='#93D564' />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        style={styles.scrollView}>
        <View style={styles.langContWrap}>
          <LangContainter bool={true} />
          <SwapIcon
            pressIconHandle={swapHandle}
            styles={styles.swapIcon}
            size={22}
          />
          <LangContainter bool={false} />
        </View>
        <TranslateBox params={params} boolean={true} />
        <TranslateBox params={params} boolean={false} />
      </ScrollView>
    </View>
  )
}
export default Terjemah
