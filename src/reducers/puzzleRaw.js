export default (state = null, action) => {
  switch (action.type) {
    case "SET_PUZZLE_RAW":
      return action.puzzleString
    case "CLEAR_PUZZLE_RAW":
      return null
    default:
      return state;
  }
}