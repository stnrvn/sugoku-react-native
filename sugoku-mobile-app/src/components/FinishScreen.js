import React from 'react'
import {
    Dimensions,
    View,
    StyleSheet,
    Text,
    Button } from 'react-native'
import { useSelector } from 'react-redux'


const { width } = Dimensions.get('screen')


function FinishScreen (props) {
  const { status } = useSelector((state) => state)

  return(
    <View style={ styles.container }>
      {
        status === 'unsolved' ? <Text>Unsolved :(</Text> : (
        <View style={ styles.row }>
            <Text>Selamat anda berhasil!</Text>
            <Button title="New Game"  onPress={() => props.navigation.navigate('Start')}/>
        </View>
        )
      }
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
    borderColor: '#c2c2c2'
  },
})

export default FinishScreen