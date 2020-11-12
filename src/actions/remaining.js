export const setRemaining = numbers => {
  return {
    type: 'SET_REMAINING',
    numbers
  }
}

export const clearRemaining = () => {
  return {
    type: 'CLEAR_REMAINING'
  }
}

export const generateRemaining = (puzzleString) => {
  return dispatch => {
    let numbers = [
      {1: 9 - (puzzleString.match(/1/g) || []).length},
      {2: 9 - (puzzleString.match(/2/g) || []).length},
      {3: 9 - (puzzleString.match(/3/g) || []).length},
      {4: 9 - (puzzleString.match(/4/g) || []).length},
      {5: 9 - (puzzleString.match(/5/g) || []).length},
      {6: 9 - (puzzleString.match(/6/g) || []).length},
      {7: 9 - (puzzleString.match(/7/g) || []).length},
      {8: 9 - (puzzleString.match(/8/g) || []).length},
      {9: 9 - (puzzleString.match(/9/g) || []).length}
    ]
    dispatch(setRemaining(numbers))
  }
}