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

export const checkCellValue = cell => {
  return {
    type: 'CHECK_CELL_VALUE',
    cell
  }
}

export const highlightCells = value => {
  return {
    type: 'HIGHLIGHT_CELLS',
    value
  }
}

export const clearPuzzle = puzzle => {
  return {
    type: 'CLEAR_PUZZLE',
    puzzle
  }
}

export const setCellClass = coordinates => {
  if (coordinates === 'C3' || coordinates === 'F3' || coordinates === 'C6' || coordinates === 'F6') {
    return "cell rightborder bottomborder"
  } else if (coordinates.includes('C') || coordinates.includes('F')) {
    return "cell bottomborder"
  } else if (coordinates.includes('3') || coordinates.includes('6')) {
    return "cell rightborder"
  } else {
    return "cell"
  }
}
