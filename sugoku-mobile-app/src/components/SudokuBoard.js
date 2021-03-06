import React, { useEffect, useState } from 'react'
import { Dimensions, View, StyleSheet, TextInput, Text, Button, ImageBackground } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { getBoard } from '../store/actions/boardAction'
import { validateBoard } from '../store/actions/boardAction'

const { width } = Dimensions.get('screen')

function SudokuBoard (props) {
  const { board, status, isLoading } = useSelector((state) => state)
  const [currentBoard, setCurrentBoard] = useState([])
  const player = props.route.params.inputName
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBoard())
    console.log(props.navigation.navigate, 'ini props')
  }, [])

  useEffect(() => {
    setCurrentBoard(board)
  },[board, status])

  function handleDifficulty (difficulty) {
    dispatch(getBoard(difficulty))
  }

  
  function handleInput (value, idxCol, idxRow) {
    setCurrentBoard(
      currentBoard.map((row, i) => {
        return (
          row.map((cell, j) => {
            if (i === idxRow && j === idxCol) {
              return +value
            } else {
              return cell
            }              
          })
          )
        })
        )
        console.log(currentBoard, 'from button')
      }
      
      if (isLoading) {
        return (
          <View style={ styles.row }>
            <Text>Loading...</Text>
          </View>
        )
      }

  function handleValidate () {
    dispatch(validateBoard(currentBoard))
    props.navigation.navigate('Finish', {status})
    console.log(status, 'current board button')
  }

  return (
    <View>
      <View style={ styles.row }>
        <Text style= { styles.playerName }>Welcome, { player }</Text>
      </View>

      <View style={ styles.row }>
        <Button title="Easy"  color="#ff2b2b" onPress={() => handleDifficulty('easy')}/>
        <Button title="Medium"  color="#ff2b2b" onPress={() => handleDifficulty('medium')}/>
        <Button title="Hard"  color="#ff2b2b" onPress={() => handleDifficulty('hard')}/>
      </View>

      <View style={ styles.row }>
        {
          currentBoard.map((row, idxRow) => {
            return (
              <View key={ idxRow }>
                {
                  row.map((col, idxCol) => {
                    if (col === 0) col = null
                    return (
                      <View key={ idxCol }>
                        {
                          col ? 
                          <TextInput
                            style={ styles.filled }
                            value={ col.toString() }
                            editable={ false }
                            type={ 'number-pad' }
                            keyboardType="numeric"
                          />
                          :
                          <TextInput
                            style={ styles.unfilled }
                            editable={ true }
                            keyboardType="numeric"
                            onChangeText={(value) => handleInput(value, idxCol, idxRow)}
                          />
                        }
                      </View>
                    )
                  })
                }
              </View>
            )
          })
        }
      </View>

      <View style={ styles.row}>
        <Button title="Solve"  color="#ff2b2b" onPress={() => handleValidate()}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50
  },
  filled: {
    width: (width - 30) / 9,
    textAlign: 'center',
    padding: 10,
    margin: 0.5,
    backgroundColor: '#ff2b2b',
    color: 'white',
    borderWidth: 0,
    borderRadius: 10,
  },
  unfilled: {
    width: (width - 30) / 9,
    textAlign: 'center',
    padding: 10,
    margin: 0.5,
    backgroundColor: '#bfbfbf',
    color: 'white',
    borderWidth: 0,
    borderRadius: 10,
  },
  playerName: {
    color: 'white',
    fontSize: 30,
    backgroundColor: 'red',
    borderWidth: 0,
    borderRadius: 10,
    padding: 20,
    marginTop: 30
  }
});

export default SudokuBoard