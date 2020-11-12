import SudokuToolCollection from 'sudokutoolcollection';

import { generateSolution } from './solution.js';
import { setCellClass } from '../utilities/puzzle.js';
import { generateRemaining} from './remaining.js';

const sudoku = SudokuToolCollection()

export const setPuzzle = rows => {
  return {
    type: 'SET_PUZZLE',
    rows
  }
}

export const updateCellValue = (id, rowIndex, value) => {
  return {
    type: 'UPDATE_CELL_VALUE',
    id,
    rowIndex,
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

export const generatePuzzle = level => {
  return dispatch => {
    const puzzleString = sudoku.generator.generate(level)
    const puzzleObject = sudoku.conversions.stringToObject(puzzleString)
    const rows = []
    const cells = Object.entries(puzzleObject).map(i => {
      const value = i[1] !== "." ? i[1] : ""
      return {
        className: setCellClass(i[0]),
        coordinates: i[0],
        disabled: value !== "",
        value: value
      }
    })
    
    for (let i = 0; i < cells.length; i += 9) {
      let row = cells.slice(i, i+9)
      rows.push(row)
    }

    dispatch(generateRemaining(puzzleString))
    dispatch(generateSolution(puzzleString))
    dispatch(setPuzzle(rows))
  }
}
