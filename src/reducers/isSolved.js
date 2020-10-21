export default (state = false, action) => {
  switch (action.type) {
    case "SET_IS_SOLVED":
      return action.isSolved
    case "CLEAR_IS_SOLVED":
      return false
    default:
      return state;
  }
}