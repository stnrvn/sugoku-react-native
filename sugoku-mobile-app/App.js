import React from 'react'
import {
  StyleSheet,
  View } from 'react-native'
import { Provider } from 'react-redux'
import store from './src/store'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SudokuBoard from './src/components/SudokuBoard'
import StartScreen from './src/components/StartScreen'
import FinishScreen from './src/components/FinishScreen'


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={ store }>
        <Stack.Navigator>
          <Stack.Screen name="Start" component={StartScreen} />
          <Stack.Screen name="Game" component={SudokuBoard} />
          <Stack.Screen name="Finish" component={FinishScreen} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
