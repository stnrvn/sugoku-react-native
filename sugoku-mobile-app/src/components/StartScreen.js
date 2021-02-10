import React, { useEffect, useState } from 'react'
import {
    Dimensions,
    View,
    StyleSheet,
    TextInput,
    Text,
    Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

const { width } = Dimensions.get('screen')

function StartScreen ({ navigation }) {
  const [inputName, setInputName] = useState('')

  return (
    <View style={ styles.container }>
      <TextInput style={ styles.userTextBox } editable autoCapitalize='none' onChangeText={(value) => setInputName(value)}/>
      <Button title="Next" onPress={() => navigation.navigate('Game', { inputName })}></Button>
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
  userTextBox: {
    width: (width - 30) / 1,
    textAlign: 'center',
    padding: 10,
    marginBottom: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#c2c2c2'
  },
})
export default StartScreen