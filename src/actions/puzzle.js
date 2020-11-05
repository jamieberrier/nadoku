import SudokuToolCollection from 'sudokutoolcollection';

import { generateSolution } from './solution.js';

const sudoku = SudokuToolCollection()

// syncronous action creators
export const setPuzzle = rows => {
  return {
    type: 'SET_PUZZLE',
    rows
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

export const highlightCells = value => {
  return {
    type: 'HIGHLIGHT_CELLS',
    value
  }
}

export const clearPuzzle = () => {
  return {
    type: 'CLEAR_PUZZLE'
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

export const generatePuzzle = level => {
  return dispatch => {
    const puzzleString = sudoku.generator.generate(level)
    const puzzleObject = sudoku.conversions.stringToObject(puzzleString)
    const rows = []
    const cells = Object.entries(puzzleObject).map(i => {
      const value = i[1] !== "." ? i[1] : ""
      return {
        coordinates: i[0],
        value: value,
        disabled: value !== "",
        className: setCellClass(i[0])
      }
    })
    
    for (let i = 0; i < cells.length; i += 9) {
      let row = cells.slice(i, i+9)
      rows.push(row)
    }

    dispatch(generateSolution(puzzleString))
    return dispatch(setPuzzle(rows))
  }
}
