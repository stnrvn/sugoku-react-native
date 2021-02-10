export function getBoard (difficulty) {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://sugoku.herokuapp.com/board?difficulty=${difficulty}`)

      const data = await response.json()
    
      dispatch ({
        type: 'GET_BOARD',
        payload: data.board
      })
    } catch (error) {
        console.log(error)
    }
  }
}

export function validateBoard (boardData) {
  return async (dispatch) => {
    try {
      const response = await fetch('https://sugoku.herokuapp.com/validate', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        data: boardData
      })

      const data = await response.json()
      console.log(data.status, 'validate data')

      dispatch ({
        type: 'UPDATE_STATUS',
        payload: data.status
      })
    } catch (error) {
        console.log(error)
    }
  }
}