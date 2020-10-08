export default (state = null, action) => {
  switch (action.type) {
    case "SET_DIFFICULTY":
      return action.difficulty
    case "CLEAR_DIFFICULTY":
      return null
    default:
      return state;
  }
}