## Requirements

[x] The code should be written in ES6 as much as possible
[x] Use the `create-react-app` generator to start your project.
	[x] Follow the instructions on this repo to setup the generator: [create-react-app](https://github.com/facebookincubator/create-react-app)
[x] Your app should have one HTML page to render your react-redux application
[x] There should be 2 container components
  - DifficultyContainer
  - PuzzleContainer
[x] There should be 5 stateless components
  - ButtonFullWidth
  - NavBar
  - NumberPad
  - PuzzleGrid
  - Signup
  - Welcome
  - LoginContainer
  - LogoutContainer
  - NewGameContainer
  - NumberContainer
[x] There should be 3 routes
  - /signup
  - /login
  - /
    - select difficulty
    - select nature sounds
  - /puzzle
    - solve puzzle
    - listen to nature sounds
[x] The Application must make use of `react-router` and proper RESTful routing (should you choose to use react-router v3 please refer to the appropriate [docs](https://github.com/ReactTraining/react-router/tree/v3/docs); docs for v4 can be found [here](https://reacttraining.com/react-router/web/guides/quick-start))
[x] Use Redux middleware to respond to and modify state change
[x] Make use of async actions and `redux-thunk` middleware to send data to and receive data from a server
[x] Your Rails API should handle the data persistence with a database. You should be using `fetch()` within your actions to GET and POST data from your API - do not use jQuery methods.
[x] Your client-side application should handle the display of data with minimal data manipulation
[x] Your application should have some minimal styling: feel free to stick to a framework (like react-bootstrap), but if you want to write (additional) CSS yourself, go for it!
[ ] [Once your app is complete, fill out this checklist.](https://goo.gl/forms/ULtKsxuzWomvXuTk2)

### To Do

- [x] Sudoku Grid
- [x] Redux Set Up
- [x] User Sign Up
- [x] User Log in
- [x] User Authentication
- [ ] Nav Bar
- [x] React Router
- [x] Render a different puzzle
- [x] generate solution
- [x] check entry for conflicts 
- [x] check complete puzzle against solution
- [x] check if puzzle solved
- [x] style sign up form
- [x] add cancel button to sign up and log in forms
- [x] display puzzle level during game
- [x] change logged out alert to modal
- [x] add username field to backend
- [x] add username field to signup form
- [x] customize validation error messages
- [x] stylize validation error messages (sign up and log in)
- [x] route protection / authenticate route
- stop clearing puzzle/difficulty on refresh
- [x] add spotify
- [ ] disable 'start puzzle' button unless sound and difficulty selected
- [ ] change number on number pad when all 9 instances entered

### Stretch Goals

- [ ] Timer
- [ ] Best Time
- [ ] Save Game
- [ ] notes/pencil mode
- [ ] undo 
        // state = {
        //  history = [[pos, 1]]
        //}
