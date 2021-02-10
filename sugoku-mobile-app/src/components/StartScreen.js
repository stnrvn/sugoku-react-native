import React, { useEffect, useState } from 'react'
import {
    Dimensions,
    View,
    StyleSheet,
    TextInput,
    Text,
    Button,
    Image } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

const { width, height } = Dimensions.get('screen')

function StartScreen ({ navigation }) {
  const [inputName, setInputName] = useState('')

  return (
    <View style={ styles.container }>
      <View style={ styles.row }>
        <Image
          style={ styles.img }
          source={require('../../assets/startImg.png')}
        />
      </View>
      <TextInput style={ styles.userTextBox } editable autoCapitalize='none' onChangeText={(value) => setInputName(value)}/>
      <Button
      style={ styles.btnRed }
      color="#ff2b2b"
      title="Next"
      onPress={() => navigation.navigate('Game', { inputName })}
      ></Button>
    </View>
  )    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50
  },
  userTextBox: {
    width: (width - 30) / 1,
    textAlign: 'center',
    padding: 10,
    marginBottom: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#c2c2c2',
    borderRadius: 10
  },
  img: {
    height: (height / 2),
    width: (width - 30),
    marginBottom: -100,
    marginTop: -100
  },
  btnRed: {
    borderWidth: 1,
    borderRadius: 10,
    color: '#ff2b2b',
    backgroundColor: 'white'
  }
})
export default StartScreen