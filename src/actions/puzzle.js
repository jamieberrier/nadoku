import SudokuToolCollection from 'sudokutoolcollection';

const sudoku = SudokuToolCollection()

// syncronous action creators
export const setPuzzle = (puzzle) => {
  return {
    type: 'SET_PUZZLE',
    puzzle
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