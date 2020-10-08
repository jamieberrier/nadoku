import SudokuToolCollection from 'sudokutoolcollection';

const sudoku = SudokuToolCollection()

// syncronous action creators
export const setPuzzle = (puzzle) => {
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

export const generatePuzzle = (level) => {
  const puzzleString = sudoku.generator.generate(level)
  const puzzleObject = sudoku.conversions.stringToObject(puzzleString)
  const rows = []
  const cells = Object.entries(puzzleObject).map(i => {
    return {
      coordinates: i[0],
      value: i[1],
      readOnly: i[1] !== "."
    }
  })
  
  for (let i = 0; i < cells.length; i += 9) {
    let row = cells.slice(i, i+9)
    rows.push(row)
  }

  return dispatch => {
    dispatch(setPuzzle(rows))
  }
}

export const setCellClass = (coordinates) => {
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