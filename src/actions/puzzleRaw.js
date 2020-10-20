import SudokuToolCollection from 'sudokutoolcollection';

const sudoku = SudokuToolCollection()

// syncronous action creators
export const setPuzzleRaw = puzzleString => {
  return {
    type: 'SET_PUZZLE_RAW',
    puzzleString
  }
}

export const clearPuzzleRaw = () => {
  return {
    type: 'CLEAR_PUZZLE_RAW'
  }
}

export const generateRawPuzzle = level => {
  return dispatch => {
    const puzzleString = sudoku.generator.generate(level)
    return dispatch(setPuzzleRaw(puzzleString))
  }
}