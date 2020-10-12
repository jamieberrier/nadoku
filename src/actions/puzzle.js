// syncronous action creators
export const setPuzzle = puzzle => {
  return {
    type: 'SET_PUZZLE',
    puzzle
  }
}

export const updateCellValue = (rowindex, id, value) => {
  return {
    type: 'UPDATE_CELL_VALUE',
    rowindex,
    id,
    value
  }
}

export const clearPuzzle = puzzle => {
  return {
    type: 'CLEAR_PUZZLE',
    puzzle
  }
}
