const initialState = {
  board: [],
  status: '',
  playerName: ''
}

export function boardReducer (state = initialState, action) {
  switch (action.type) {
    case 'GET_PLAYER_NAME':
      return {
        ...start,
        playerName: action.payload
      }
    case 'START_BOARD':
      return {
        ...state,
        isLoading: true
      }
    case 'GET_BOARD':
      return {
        ...state,
        board: action.payload,
        isLoading: false
      }
    case 'START_SOLVE':
      return {
        ...state,
        isLoading
      }
    case 'UPDATE_STATUS':
      return {
        ...state,
        status: action.payload
      }
    default: 
      return state
  }
}