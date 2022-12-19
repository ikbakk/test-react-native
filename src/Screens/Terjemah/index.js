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
    marginHorizontal: 5
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

const TranslateBoxTitle = ({ bahasaSwap }) => {
  return (
    <View style={styles.textAreaTitle}>
      <Text style={styles.textTitle}>Diterjemahkan dari</Text>
      <Text style={styles.textTitleBahasa}>{bahasaSwap}</Text>
    </View>
  )
}

const TranslateBox = ({
  textInput,
  setTextInput,
  bahasaSwap,
  clear,
  setTextOutput,
  output,
  kata,
  sasak
}) => {
  const getKeyByValue = (object, value) => {
    return Object.keys(object).find((key) => object[key] === value)
  }

  const translatedInput =
    typeof kata[textInput.toLowerCase()] == 'string'
      ? kata[textInput.toLowerCase()]
      : 'tidak ada kata'

  const capitalizedOutput2 =
    getKeyByValue(kata, translatedInput).charAt(0).toUpperCase() +
    getKeyByValue(kata, translatedInput).slice(1)

  const capitalizedOutput =
    translatedInput.charAt(0).toUpperCase() + translatedInput.slice(1)

  const sendHandle = () => {
    setTextOutput(sasak === true ? capitalizedOutput : capitalizedOutput2)
  }
  console.log(translatedInput, getKeyByValue(kata, translatedInput))
  return (
    <View style={styles.translateBox}>
      <TranslateBoxTitle bahasaSwap={bahasaSwap} />
      <View style={styles.textInputContainer}>
        <View style={styles.textInputValue}>
          <Text style={{ fontSize: 24 }}>{output}</Text>
          <XIcon pressIconHandle={clear} size={20} />
        </View>
        <Input
          containerStyle={{
            flex: 1,
            justifyContent: 'flex-end'
          }}
          clearTextOnFocus={true}
          errorMessage={`${textInput.length} / 500`}
          errorStyle={{ color: 'black' }}
          maxLength={500}
          onChangeText={(newText) => setTextInput(newText)}
          defaultValue={textInput}
          placeholder='Masukkan kata'
          rightIcon={<Icon onPress={sendHandle} name='send' type='material' />}
        />
      </View>
    </View>
  )
}

const LangContainter = ({ bahasaSwap }) => {
  return (
    <View style={styles.langCont}>
      <View>
        <View style={styles.imageCont}>
          <Image
            style={styles.image}
            source={require('../../../assets/aksara/aksara_utama.png')}></Image>
        </View>
      </View>
      <Text style={styles.langText}>{bahasaSwap}</Text>
    </View>
  )
}

function Terjemah() {
  const [sasak, setSasak] = useState(true)
  const [textInput, setTextInput] = useState('')
  const [textOutput, setTextOutput] = useState('')

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

  return (
    <View style={{ flex: 1 }}>
      <SolidColorHeader target={'Home'} title='Terjemahan' color='#93D564' />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        style={styles.scrollView}>
        <View style={styles.langContWrap}>
          <LangContainter bahasaSwap={bahasaSwap(false)} sasak={sasak} />
          <SwapIcon
            pressIconHandle={swapHandle}
            styles={styles.swapIcon}
            size={22}
          />
          <LangContainter bahasaSwap={bahasaSwap(true)} sasak={sasak} />
        </View>
        <TranslateBox
          sasak={sasak}
          kata={kata}
          output={textOutput}
          setTextOutput={setTextOutput}
          clear={clearHandle}
          bahasaSwap={bahasaSwap(false)}
          textInput={textInput}
          setTextInput={setTextInput}
        />
      </ScrollView>
    </View>
  )
}
export default Terjemah
