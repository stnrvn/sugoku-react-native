const initialState = {
  isLoading: true,
  board: [],
  status: ''
}

export function boardReducer (state = initialState, action) {
  switch (action.type) {
    case 'GET_BOARD':
      return {
        ...state,
        board: action.payload,
        isLoading: false
      }
    case 'START_SOLVE':
      return {
        ...state,
        isLoading: false
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