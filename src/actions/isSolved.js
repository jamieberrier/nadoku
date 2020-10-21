// syncronous action creators
export const setIsSolved = isSolved => {
  return {
    type: 'SET_IS_SOLVED',
    isSolved
  }
}
  
export const clearIsSolved = () => {
  return {
    type: 'CLEAR_IS_SOLVED'
  }
}

export const checkIfSolved = (puzzle, solution) => {
  return dispatch => {
    const filled = value => value !== ""

    const cellValues = puzzle.map(row => {
      return row.map(cell => {
        return cell.value
      })
    }).flat()
    
    if (cellValues.every(filled)) {
      if (cellValues.join('') === solution) {
        return dispatch(setIsSolved(true))
      }
    }
    
    return dispatch(setIsSolved(false))
  }
}
  