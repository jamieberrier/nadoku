### To Do

- [ ] Sudoku Grid
- [ ] Redux Set Up
- [ ] User Sign Up
- [ ] User Log in
- [ ] User Authentication

### Stretch Goals

- [ ] Timer
- [ ] Best Time
- [ ] Save Game


// ratepuzzle
import { makepuzzle, solvepuzzle, posfor } from 'sudoku';

const puzzle = makepuzzle()
    // =>(81) [null, 3, null, null, null, null, null, null, null, null, null, 2, 7, 0, null, 1, null, 4, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 8, 3, null, null, 6, 1, null, 4, null, null, 7, null, null, null, 8, 4, 3, null, 7, null, 5, null, null, null, null, 0, null, null, null, null, 2, 2, null, null, null, 6, 5, null, 7, null, null, 5, null, null, null, null, null, null, null] 
  console.log(puzzle)
    /*
    function posfor(x, y, axis) {
    if (axis === undefined) {
      axis = 0;
    }

    if (axis === 0) {
      return x * 9 + y;
    } else if (axis === 1) {
      return y * 9 + x;
    }

    return [0, 3, 6, 27, 30, 33, 54, 57, 60][x] + [0, 1, 2, 9, 10, 11, 18, 19, 20][y];
  }
    */
    const row = 8
    const col = 8
    // returns position (index) in puzzle array 0-80
    const pos = posfor(row, col, 0)
    console.log(pos)
    // => 80
    // return value at index
    console.log(puzzle[pos])
    const solution = solvepuzzle(puzzle)
    // =>81) [4, 3, 7, 2, 8, 1, 0, 6, 5, 5, 6, 2, 7, 0, 3, 1, 8, 4, 1, 0, 8, 5, 4, 6, 2, 3, 7, 7, 2, 5, 6, 1, 8, 3, 4, 0, 6, 1, 3, 4, 5, 0, 7, 2, 8, 0, 8, 4, 3, 2, 7, 6, 5, 1, 8, 7, 6, 0, 3, 4, 5, 1, 2, 2, 4, 0, 1, 6, 5, 8, 7, 3, 3, 5, 1, 8, 7, 2, 4, 0, 6]
    console.log(solution)
    console.log(solution[pos])

    --------------------------------------------------------------

    console.log("sudoku", SUDOKU)
    //console.log("generator", sudoku.generator)
    const puzzle = SUDOKU.generator.generate("easy")
    console.log(puzzle.includes('.'))
    const grid = SUDOKU.conversions.stringToGrid(puzzle)
    console.log(grid)
    console.log("candidates", SUDOKU.getCandidates.get(puzzle))
    const solvedPuzzle = SUDOKU.solver.solve(puzzle)
    console.log("solver", solvedPuzzle)
    console.log(solvedPuzzle.includes('.'))
