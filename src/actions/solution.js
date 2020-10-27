import SudokuToolCollection from 'sudokutoolcollection';

const sudoku = SudokuToolCollection()

// syncronous action creators
export const setSolution = solution => {
  return {
    type: 'SET_SOLUTION',
    solution
  }
}

export const clearSolution = () => {
  return {
    type: 'CLEAR_SOLUTION'
  }
}

export const generateSolution = puzzleString => {
  return dispatch => {
    const solution = sudoku.solver.solve(puzzleString)
    return dispatch(setSolution(solution))
  }
}