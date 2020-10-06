## Requirements

[ ] The code should be written in ES6 as much as possible
[x] Use the `create-react-app` generator to start your project.
	[x] Follow the instructions on this repo to setup the generator: [create-react-app](https://github.com/facebookincubator/create-react-app)
[x] Your app should have one HTML page to render your react-redux application
[ ] There should be 2 container components
[ ] There should be 5 stateless components
[ ] There should be 3 routes
[ ] The Application must make use of `react-router` and proper RESTful routing (should you choose to use react-router v3 please refer to the appropriate [docs](https://github.com/ReactTraining/react-router/tree/v3/docs); docs for v4 can be found [here](https://reacttraining.com/react-router/web/guides/quick-start))
[ ] Use Redux middleware to respond to and modify state change
[ ] Make use of async actions and `redux-thunk` middleware to send data to and receive data from a server
[ ] Your Rails API should handle the data persistence with a database. You should be using `fetch()` within your actions to GET and POST data from your API - do not use
jQuery methods.
[ ] Your client-side application should handle the display of data with minimal data manipulation
[ ] Your application should have some minimal styling: feel free to stick to a framework (like react-bootstrap), but if you want to write (additional) CSS yourself, go for it!
[ ] [Once your app is complete, fill out this checklist.](https://goo.gl/forms/ULtKsxuzWomvXuTk2)

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
