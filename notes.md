## Requirements

[ ] The code should be written in ES6 as much as possible
[x] Use the `create-react-app` generator to start your project.
	[x] Follow the instructions on this repo to setup the generator: [create-react-app](https://github.com/facebookincubator/create-react-app)
[x] Your app should have one HTML page to render your react-redux application
[ ] There should be 2 container components
  - DifficultyContainer
  - PuzzleContainer
  - LoginContainer
  - LogoutContainer
  - NewGameContainer
  - NumberContainer
[ ] There should be 5 stateless components
  - PuzzleGrid
  - NavBar
  - NumberPad
[ ] There should be 3 routes
  - 
  - 
  - 
[ ] The Application must make use of `react-router` and proper RESTful routing (should you choose to use react-router v3 please refer to the appropriate [docs](https://github.com/ReactTraining/react-router/tree/v3/docs); docs for v4 can be found [here](https://reacttraining.com/react-router/web/guides/quick-start))
[x] Use Redux middleware to respond to and modify state change
[x] Make use of async actions and `redux-thunk` middleware to send data to and receive data from a server
[ ] Your Rails API should handle the data persistence with a database. You should be using `fetch()` within your actions to GET and POST data from your API - do not use jQuery methods.
[ ] Your client-side application should handle the display of data with minimal data manipulation
[ ] Your application should have some minimal styling: feel free to stick to a framework (like react-bootstrap), but if you want to write (additional) CSS yourself, go for it!
[ ] [Once your app is complete, fill out this checklist.](https://goo.gl/forms/ULtKsxuzWomvXuTk2)

### To Do

- [x] Sudoku Grid
- [x] Redux Set Up
- [ ] User Sign Up
- [x] User Log in
- [ ] User Authentication
- [ ] Nav Bar
- [ ] React Router
- [x] Render a different puzzle
- [x] generate solution
- check entry against solution
- check if puzzle solved
- stop clearing puzzle/difficulty on refresh

### Stretch Goals

- [ ] Timer
- [ ] Best Time
- [ ] Save Game

<Heading size={5} renderAs="p">Default</Heading>

-------------------------------------------

/*
    stringToGrid
      0: (9) ["4", "1", "2", "7", "3", "9", ".", ".", "."]
      1: (9) ["6", "7", "8", "2", "5", ".", "3", ".", "9"]
      2: (9) ["5", "9", "3", "8", "6", ".", "7", ".", "2"]
      3: (9) ["7", "2", "5", "6", ".", "3", "4", "9", "1"]
      4: (9) ["3", "6", "9", "1", "4", "5", "2", "8", "7"]
      5: (9) ["1", ".", "4", "9", "7", ".", ".", "3", "."]
      6: (9) ["2", ".", "7", "5", "1", "8", "9", "6", "."]
      7: (9) [".", "5", ".", ".", "9", "7", "1", "2", "4"]
      8: (9) ["9", "3", "1", "4", "2", "6", ".", "7", "."]
   
    stringToObject
      {A1: "2", A2: "8", A3: ".", A4: ".", A5: ".", …}
  */
  generatePuzzle = (type = 'easy') => {
    const puzzleString = sudoku.generator.generate(type)
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
    return rows
  }

--------------------------------------------

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
