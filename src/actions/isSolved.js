import { showModal } from './displayModal';

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
    let cellClassNames = []
    const filled = value => value !== ""
    const noConflict = className => !className.includes('conflict')

    const cellValues = puzzle.map(row => {
      return row.map(cell => {
        cellClassNames.push(cell.className)
        return cell.value
      })
    }).flat()
  
    // if all cells are filled
    if (cellValues.every(filled)) {
      // if matches solution
      if (cellValues.join('') === solution || cellClassNames.every(noConflict)) {
        dispatch(showModal('success', 'You Solved The Puzzle!'))
        return dispatch(setIsSolved(true))
      }
      else {
        dispatch(showModal('info', 'The Puzzle Is Incorrect'))
      }
    }
    
    return dispatch(setIsSolved(false))
  }
}
